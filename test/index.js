const { parse } = require ('../lib/main')
const fetch = require('node-fetch').default

// Just a random test lol!
fetch('https://www.youtube.com/watch?v=Rh2JuJ1Pl2I')
  .then((r) => r.text())
  .then((text) => parse(text))
  .then(console.log)
  .catch(console.error)

