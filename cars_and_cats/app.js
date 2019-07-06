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
		if(fileType == "cars"){
			response.writeHead()


		}
		else if(fileType == "cats") {
			response.writeHead()

		}
		else {
			response.writeHead(404);
			response.end('File not found!!!');

		}
	}

	
// 	if(file != null) {
// 		if(fileType == 'images') {
			 
// 		      fs.readFile(`images/${file}`, function(error, contents) {
// 			    // Check to see if an error exists
// 			    if (error) { return response; }
// 			    // Respond to the browser
// 			    response.writeHead(200, {'Content-type' : 'image/jpg' });
// 			    response.write(contents);
// 			    response.end();
// 			  });
// 		}
// 	}
// 	else if(file == null) {
// 		if(fileType === 'cars') {
// 			fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
// 					if (errors) { return serve404(response) }
// 					response.writeHead(200, {'Content-Type' : 'text/html'}); //send data about response
// 					response.write(contents  ); //send response body
// 					response.end();
// 			});	

// 		}
// 	}
// 	else {
		
// 	}


// });






// //tell your server which port to run on 
// server.listen(7077);
// //print to terminal window
// console.log("Running in localhost at port 7077");