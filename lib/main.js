const cheerio = require('cheerio')
const fields = require('./fields')
const mediaSetup = require('./media')
const fallback = require('./fallback')
const { removeNestedUndefinedValues } = require('./utils')

/**
 * Parse HTML and return open-graph spec.
 * @param {string} html 
 */
const parse = (html) => {
  if (typeof html !== 'string') throw new Error('HTML string required!')

  let ogObject = {}
  const $ = cheerio.load(html)

  // find all of the open graph info in the meta tags
  $('meta').each((_, meta) => {
    // if no propery and name return
    if (!meta.attribs || (!meta.attribs.property && !meta.attribs.name)) return
    // property = meta property or name
    const property = meta.attribs.property || meta.attribs.name
    // content = content or value
    const content = meta.attribs.content || meta.attribs.value

    // for each field 
    fields.forEach((item) => {
      // if is the current property
      if (property.toLowerCase() === item.property.toLowerCase()) {
        // add to ogObject
        if (!item.multiple) {
          ogObject[item.fieldName] = content
        } else if (!ogObject[item.fieldName]) {
          ogObject[item.fieldName] = [content]
        } else if (Array.isArray(ogObject[item.fieldName])) {
          ogObject[item.fieldName].push(content)
        }
      }
    })
  })

  // set ogImage to ogImageSecureURL/ogImageURL if there is no ogImage
  if (!ogObject.ogImage && ogObject.ogImageSecureURL) {
    ogObject.ogImage = ogObject.ogImageSecureURL
  } else if (!ogObject.ogImage && ogObject.ogImageURL) {
    ogObject.ogImage = ogObject.ogImageURL
  }

  // formats the multiple media values
  ogObject = mediaSetup(ogObject)

  // run the open graph fallbacks
  ogObject = fallback(ogObject, $)

  // removes any undefs
  ogObject = removeNestedUndefinedValues(ogObject)

  return ogObject
}

module.exports = {
  parse,
}