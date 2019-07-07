var http = require('http');
var fs = require('fs');

 	if(fileType == 'style' || fileType == 'images') {

 		if(fileType == "style") {

 			if(fileType == "style") {

 			}

 			else if(fileType = "images") {

 				fs.readFile(`images/${file}`), function(error, contents) {
 					if(error) { return response; }
 					response.writeHead(200, {'Content-type' : 'image/jpg'});
 					response.write(contents);
 					response.end();
 				});
 			}
 		}
		else{
			if(fileType == "cats") {
			fs.readFile(`images/${file}`, function(error, contents) {
			    if (error) { return response; }
			    response.writeHead(200, {'Content-type' : 'image/jpg' });
			    response.write(contents);
			    response.end();
			  });

 		}
 	

