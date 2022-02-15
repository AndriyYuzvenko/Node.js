const fs = require('fs')
const path = require("path");

const onlineUser = [
    {
        name: 'Andriy',
        age: 19,
        city: 'Vinnytsia'
    }
]


const inPersonUser = [
    {
        name: 'Masha',
        age: 20,
        city: 'Kiev'
    }
]


fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) throw err;
})

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) throw err;
})

for (const inPersonUserElement of inPersonUser) {
    fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
        `name:${inPersonUserElement.name}\n age:${inPersonUserElement.age} \n city:${inPersonUserElement.city}`,
        (err) => {
            if (err) throw err;
        })


}

for (const onlineUserElementKey of onlineUser) {
    fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),
        `name:${onlineUserElementKey.name}\n age:${onlineUserElementKey.age}\n city:${onlineUserElementKey.city}`,
        (err) => {
            if (err) throw err;
        })
}

const rename = () => {

    if (path.join(__dirname, 'main', 'online', 'online.txt')) {
        fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
            path.join(__dirname, 'main', 'inPerson', 'online.txt'), (err) => {
                if (err) throw err;
            })
    }

    if (path.join(__dirname, 'main', 'inPerson', 'inPerson.txt')) {
        fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
            path.join(__dirname, 'main', 'online', 'inPerson.txt'), (err) => {
                if (err) throw err;
            })
    }

}
rename()