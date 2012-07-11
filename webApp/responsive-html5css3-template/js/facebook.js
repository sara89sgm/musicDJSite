$(document).ready(function() {

window.fbAsyncInit = function() {  
  Parse.FacebookUtils.init({
    appId      : '386827401378707', // Facebook App ID
    channelUrl : 'http://www.fuuzik.com/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });
 

  // Additional initialization code here
};

Parse.FacebookUtils.logIn("user_likes,email", {
  success: function(user) {
    // Handle successful login
  },
  error: function(user, error) {
    // Handle errors and cancellation
  }
})
});