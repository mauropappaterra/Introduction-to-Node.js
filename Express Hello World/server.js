/** Introduction to Node.js
 *  server.js
 *  Created by Mauro J. Pappaterra on 30 of 03 2018.
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000)