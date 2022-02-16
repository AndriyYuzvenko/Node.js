const fs = require('fs')
const path = require("path");

fs.writeFile(path.join(__dirname, 'task.txt'),
    'Текст до завдання 2',
    (err) => {
        if (err) {
            console.log(err)
            throw err;
        }
        fs.readFile(path.join(__dirname, 'task.txt'),
            (err, data) => {
                if (err) {
                    console.log(err)
                    throw err;
                } else {
                    fs.writeFile(path.join(__dirname, 'taskCopy.txt'),
                        `${data.toString()}`,
                        (err) => {
                            if (err) {
                                console.log(err)
                                throw err;
                            }
                        })
                }

            })
    })



