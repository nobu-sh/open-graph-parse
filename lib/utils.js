const validator = require('validator')

const isUrlValid = (url) => typeof url === 'string' && url.length > 0 && validator.isURL(url)

const isImageTypeValid = (type) => {
  const validImageTypes = ['apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'tif', 'tiff', 'webp']
  return validImageTypes.includes(type)
}

const findImageTypeFromUrl = (url) => {
  let type = url.split('.').pop()
  type = type.split('?')[0]
  return type
}

const removeNestedUndefinedValues = (object) => {
  Object.entries(object).forEach(([key, value]) => {
    if (value && typeof value === 'object') removeNestedUndefinedValues(value)
    else if (value === undefined) delete object[key]
  })
  return object
}

module.exports = {
  isUrlValid,
  isImageTypeValid,
  findImageTypeFromUrl,
  removeNestedUndefinedValues,
}
