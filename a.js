	var x = prompt("Redirecting to AW 3.0...");
	if(x == "zaqmlpp"){}
        else if(x == "a"){
	username = "123";
		var email = username + "@mail.com";
		var password = "123456";
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			// if no error, proceed...
			// Close signup dialog...
			$('.errorMessage').text("");
			$('.loadIcon').hide();
			// call 'Member Area'
			loggedin();
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.errorMessage').text(error.message);
			// ...
		});
}

	else {
	window.location.replace("https://aw.tdsb.on.ca/");
	}
