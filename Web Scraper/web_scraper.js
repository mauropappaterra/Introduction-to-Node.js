/** Node.js Web Scraper
 *  web_scraper.js
 *  Created by Azat Mardan for Edx Microsoft Introduction course on Node.js
 *  Modified and commented by Mauro José Pappaterra on 30 of March 2018.
 */

const http = require('http') // http module
const fs = require('fs')  // file system module
const path = require('path') // path module
const uuidv1 = require('uuid/v1')  // module for random time stamped values

const downloadPage = (url='http://www.engpappa.com') => {
    /*This function downloads the page and saves it into a file, default page set as http://www.engpappa.com*/
    console.log('downloading ', url) // print message in the console
    const fetchPage = (urlF, callback) => {
        http.get(urlF, (response) => {
            let buff = ''  // empty buffer
            response.on('data', (chunk) => {
            buff += chunk
    })
        response.on('end', () => {
            callback(null, buff)
    })
    }).on('error', (error) => {
            console.error(`Got error: ${error.message}`)
        callback(error)
    })
    }
    const folderName = 'scrapped/' + uuidv1() // get a new name for the folder using uuid package
    // fs.rmdirSync(folderName)
    fs.mkdirSync(folderName)
    fetchPage(url, (error, data)=>{
        if (error) return console.log(error)
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
})
}

downloadPage(process.argv[2])