const http = require('http');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1'); // to generate random timestamped values

// console.log(uuidv1()); // 23115070-190c-11e9-9e21-49b5e297dc4a

const downloadPage = (url = 'http://nodeprogram.com') => {
    console.log('Downloading ' + url);
    const fetchPage = (url, callback) => {
        http.get(url, (res) => {
            let buff = '';
            res.on('data', (chunk) => {
                buff += chunk;
            })
            res.on('end', () => {
                callback(null, buff);
            })
        }).on('error', (error) => {
            console.error(`Got error: ${error.message}`)
            callback(error)
        })
    }

    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    fetchPage(url, (error, data)=>{
        if (error) return console.log(error)
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
        fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
        console.log('downloading is done in folder ', folderName)
    })
}

downloadPage(process.argv[2])