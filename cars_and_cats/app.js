// get the http module:
var http = require('http');
//fs module allows us to read and write content for responses!!
var fs = require('fs');
//creating a server using http module:

var server = http.createServer(function (request, response){
	//see what URL the clients are requesting:
	console.log('client request URL: ', request.url);

	let splitUrl = request.url.split("/");
	let fileType = splitUrl[1];
	let file = splitUrl[2];



	//this is how we do routing:
	
	if(file != null) {
		if(fileType == 'images') {
			var img = fs.readFileSync('./images/ferarri.jpg');
		     response.writeHead(200, {'Content-Type': 'image/gif' });
		     response.end(img, 'binary');
		}
	}
	else if(file == null) {
		if(fileType === 'cars') {
			fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
					if (errors) { return serve404(response) }
					response.writeHead(200, {'Content-Type' : 'text/html'}); //send data about response
					response.write(contents  ); //send response body
					response.end();
			});	

		}
	}
	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}


});






//tell your server which port to run on 
server.listen(7077);
//print to terminal window
console.log("Running in localhost at port 7077");