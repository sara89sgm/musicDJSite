function facebooklogin (){
		
	Parse.FacebookUtils.logIn("email", {
		
		
  success: function(user) {
	  
    if (!user.existed()) {
      alert("User signed up and logged in through Facebook!");
    } 
	if (!Parse.FacebookUtils.isLinked(user)) {
  Parse.FacebookUtils.link(user, null, {
    success: function(user) {
      alert("Woohoo, user logged in with Facebook!");
    },
    error: function(user, error) {
      alert("User cancelled the Facebook login or did not fully authorize.");
    }
  });
}
	else {
      alert("User logged in through Facebook!");
    }
  },
  error: function(user, error) {
    alert("User cancelled the Facebook login or did not fully authorize.");
  }
});
}