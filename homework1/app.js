const fs = require('fs')
const path = require("path");

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        console.log(err)
    }
})