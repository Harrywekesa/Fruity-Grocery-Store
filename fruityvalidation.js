//Funtion to validate name entered by ensuring it is not shorter than 3 characters and not longer than 50 characters
function validatename(){
	var nma = document.getElementById('name').value;
	len=nma.length;
	if (len == 0 || len < 3 || len > 50)
		alert("Enter a correct name between 3 and 50 characters");
};

//Function to validate age entered by ensuring the age is no less than 15 years  and no more than 120 years
function validateage(){
	if (document.getElementById("age").value > 120){
		alert("Age value  must be less than 120");
	}
	else if (document.getElementById("age").value < 15){
		alert("Age value must be greater than 15");
	}
	else
		return true
};

// Function to validate email by making sure the email entered by the user has an @ alerting the user if it is not there
function validateEmail(){
	var emailone = document.getElementById("Email1").value;
	if(!emailone.includes("@")){
		alert("invalid email");
		error.innerHTML = "Please enter a correct email"
	}
};

//Function to validate the emails by makng sure the entered emails do match and alerting the user if they don't
function validateEmails(){
		var em = document.getElementById('Email1').value;
		var em2= document.getElementById("Email2").value;
		if (em == em2)
			return true
		else
			alert('Emails do not match ')
			return false
};