// get the http module:
var http = require('http');
//fs module allows us to read and write content for responses!!
var fs = require('fs');
//creating a server using http module:

// 1,2,3,4
var server = http.createServer(function (request, response){
	//see what URL the clients are requesting:
	console.log('client request URL: ', request.url);

	let splitUrl = request.url.split("/");
	// splitUrl = ['localhost:972340', 'cars'] 1 html 
	// splitUrl = ['localhost:972340', 'images', ferrari'] img #1
	// splitUrl = ['localhost:972340', 'images', lambo'] img # 2
	// splitUrl = ['localhost:972340', 'images', th'] img # 2
	let fileType = splitUrl[1];
	let file = splitUrl[2];
	let fileforms = splitUrl[3]

	//this is how we do routing:
	if(fileType == 'style' || fileType == 'images') {

		if(fileType == "style") {

		}
		else if(fileType= "images") {

		      fs.readFile(`images/${file}`, function(error, contents) {
			    if (error) { return response; }
			    response.writeHead(200, {'Content-type' : 'image/jpg' });
			    response.write(contents);
			    response.end();
			  });
		}
	}
	else {

		if(fileType === "cars") {

			fs.readFile("views/cars.html", function(error, contents) {
			    if (error) { return response; }
			    response.writeHead(200, {'Content-type' : 'text/html' });
			    response.write(contents);
			    response.end();
			  });
			  
		}
		else if(fileType === "cats") {

			fs.readFile("views/cat.html", function(error, contents) {
			    if (error) { return response; }
			    response.writeHead(200, {'Content-type' : 'text/html' });
			    response.write(contents);
			    response.end();
			  });
		}	
		else if(fileType === "forms") {

			fs.readFile("views/forms.html", function(error,contents) {
				if(error) { return response; }
				response.writeHead(200, {'Content-type' : 'text/html'});
				response.write(contents);
				response.end();
			 });
		}
		else {
			response.writeHead(404);
			response.end('File not found!!!');

		}
	}

})


//tell your server which port to run on 
server.listen(7077);

