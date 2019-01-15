
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

fileName = 'customer-data.csv';
const csvFilePath=path.join(__dirname, fileName);
// console.log(csvFilePath)
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj))
})
 