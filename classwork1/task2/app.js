const fs = require('fs')
const path = require("path");

fs.writeFile(path.join(__dirname, 'task.txt'),
    'Текст до завдання 2',
    (err) => {
        if (err) {
            console.log(err)
            throw err;
        } else {
            fs.readFile(path.join(__dirname, 'task.txt'), (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    fs.mkdir(path.join(__dirname, 'taskCopy'), (err) => {
                        if (err) {
                            console.log(err);
                        }
                        fs.writeFile(path.join(__dirname, 'taskCopy', 'taskCopy.txt'),
                            `${data.toString()}`,
                            (err) => {
                                if (err) {
                                    console.log(err)
                                    throw err;
                                } else {
                                    fs.unlink("task.txt", (err) => {
                                        if (err) {
                                            console.log(err)
                                            throw err
                                        }
                                    });
                                }
                            })
                    })

                }
            })
        }
    })



