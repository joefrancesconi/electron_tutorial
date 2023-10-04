const path = './data.json'
 
 const configSettings = async () => {  
    const fs = require('fs')

    fs.access(path, fs.F_OK, (err) => {
    if (err) {
        console.log('file does not exist, creating file...')
        fs.writeFile(path, '', err => {
            if (err) {
            console.error(err);
            }
            // file written successfully
            console.log('file created');
        });
        return false
    }
    //file exists
        console.log('file exists')
        return true
    })
}
module.exports = { configSettings }