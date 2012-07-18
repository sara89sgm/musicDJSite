$(document).ready(function() {
	
	


	
	$('a.login-window').click(function() {
		
		
		
                //Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
	
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
});

function logged(){
	
	var currentUser = Parse.User.current();
	if (currentUser) {
		alert(currentUser.username)
		 UserID = currentUser.username;
	    return true;
		
		
	} else {
	    return false;
	}
	
}





function signUp() {
	var user = new Parse.User();

	user.set("name", $("#username").val());
	user.set("password", $("#password").val());
	user.set("username", $("#email").val());
	user.set("lat", lat);
	user.set("lng", lng);

	// other fields can be set just like with Parse.Object

	
	user.signUp(null, {
		success : function(user) {
		
			$("#formSingUp").hide();
			$("#signedUP").show();
		},
		error : function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.message);
		}
	});
}

function login(){
	
	Parse.User.logIn($("#emailL").val(), $("#passwordL").val(), {
		  success: function(user) {
			 
			  $('#mask , .login-popup').fadeOut(300 , function() {
					$('#mask').remove(); });
		  },
		  error: function(user, error) {
			  alert("Error: " + error.message);
		  }
		});
	
}



function logout(){
	Parse.User.logOut();

}


