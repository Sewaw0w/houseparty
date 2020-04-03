function sendEmail(email) {
	
	var callbackText = document.getElementById("callback-text")
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", '/emailapi/', true);
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
	    if(xhr.readyState == XMLHttpRequest.DONE) {	
		    callbackText.style.display = "block"
		    switch (xhr.status) {
			    case 204:
			    	callbackText.innerHTML = "Check your email!"
			    	callbackText.style.backgroundColor = "#39DC0C"
			    	break
			    case 500:
			    	switch (xhr.response) {
				    	case "Invalid Email":
				    		callbackText.innerHTML = "Please enter a valid email address."
				    		break
				    	case "Already Sent":
				    		callbackText.innerHTML = "You've already received a link."
				    		break
				    	default:
				    		callbackText.innerHTML = "Oops, something went wrong. Reload and try again!"
				    		break
			    	}
			    	callbackText.style.backgroundColor = "#FF004D"
			    	break
			    case 429:
			    default:
			    	callbackText.innerHTML = "Oops, something went wrong. Reload and try again!"
			    	callbackText.style.backgroundColor = "#FF004D"
			    	break
		    }
		    sendEmailResultAnalytics(xhr.status)
	    }
	    
	}
	
	xhr.send(JSON.stringify(email)); 
	
}