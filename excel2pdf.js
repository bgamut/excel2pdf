const excelToJson = require('convert-excel-to-json');
const PDFDocument=require('pdfkit')
const fs = require('fs');

// const { font } = require('pdfkit/js/mixins/fonts');
const result = excelToJson({
    sourceFile: 'test.xlsx'
});
console.log(result)
const doc=new PDFDocument({
    size:[1000,500],
    margins : { // by default, all are 72
        top: 10,
       bottom:10,
        left: 10,
      right: 10
    }
})
doc.pipe(fs.createWriteStream('output.pdf'))
//doc.registerFont('NotoSansCJK', __dirname+'/NotoSansCJK-Medium.ttc/NotoSansCJK-Medium.ttc');
doc.registerFont('NanumGothic', __dirname+'/Nanum_Gothic/NanumGothic-Regular.ttf');
doc
    
    .fontSize(25)
    //font('NotoSansCJK')
    .font('NanumGothic')
    // .moveTo(25,0)
    
    .text(result.Sheet1[1].B,600,25)
    // .text(result.Sheet1[1].B,-250,-500)
    .fontSize(35)
    .text(result.Sheet1[1].E+" ("+result.Sheet1[1].J+")",40,50)
    .text(result.Sheet1[1].F,40,120)
    .text(result.Sheet1[1].G,40,190)
    .text(result.Sheet1[1].H,40,260)
    .text("우 "+result.Sheet1[1].I,40,330)
    
    .save()
    .end()
    

