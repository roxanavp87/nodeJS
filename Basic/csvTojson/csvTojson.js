
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

fileName = 'customer-data.csv';
const csvFilePath=path.join(__dirname, fileName);
// console.log(csvFilePath)
csv()
.fromFile(csvFilePath)
.then( (jsonObj) => {
    // console.log(jsonObj);
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj, null, 2))
    console.log('File has been successfully converted')
    process.exit(0);
})
.catch( (error) => {
    console.log(error);
    process.exit(1);
});

 