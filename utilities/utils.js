const googleDictionaryApi = require("google-dictionary-api")
async function sampleTest()
{
    await googleDictionaryApi.search('price', 'en')
      .then(results=>{
        console.log(results)
      })
      .catch(error=>{
        console.log(error)
      })
}

module.exports = sampleTest;