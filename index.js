
var docx = require('./docx_reader')

docx.extract('abc.docx').then(function(res, err) {
    if (err) {
        console.log(err)
    }
    console.log(res)
})