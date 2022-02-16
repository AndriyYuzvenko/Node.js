const fs = require('fs');
const path = require("path");

fs.readdir(path.join(__dirname, 'fiels'), (err, data) => {
    if (err) {
        console.log(err)
        throw err
    }
    data.forEach(item => {
        const status = item.endsWith('txt')
        if (status === true) {
            fs.truncate(path.join(__dirname, 'fiels', item), err => {
                if (err) {
                    console.log(err)
                    throw err;
                }
            });
        } else {
            fs.rename(path.join(__dirname, 'fiels', item)
                , path.join(__dirname, 'fiels', 'new' + item), (err) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                })
        }
    })

})