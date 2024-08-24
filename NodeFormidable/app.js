var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) {
        res.write('Error during file upload. Please try again.');
        res.end();
        return;
      }

      console.log('Files:', files);

      var oldpath = files.filetoupload[0].path;
      if (!oldpath) {
        res.write('File path is undefined. Please try again.');
        res.end();
        return;
      }
      var newpath = 'C:/Users/mukes/Desktop/NodeJS/NodeFormidable/uploadedFiles' + files.filetoupload[0].originalFilename;

      fs.copyFile(oldpath, newpath, function (err) {
        if (err) {
            console.error('Error copying the file:', err);
            res.write('Error copying the file to the destination. Please try again.');
            res.end();
            return;
          }

        fs.unlink(oldpath, function (err) {
            if (err) {
              console.error('Error deleting the temporary file:', err);
              res.write('Error deleting the temporary file. Please try again.');
              res.end();
              return;
            }

        res.write('File uploaded and moved!');
        res.end();
      });
 });
});
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8088);