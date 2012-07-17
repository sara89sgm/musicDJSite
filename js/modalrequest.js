$(document).ready(function() {
	
	


	
	$('a.request-window').click(function() {
		
		alert("pop");
		
                //Getting the variable's value from a link 
		var requestBox = $(this).attr('href');

		//Fade in the Popup
		$(requestBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(window).height() - $(requestBox).height() ) / 2; 
		var popMargLeft = ($(window).width() - $(requestBox).width()) / 2; 
	
		$(requestBox).css({ 
			'margin-top' : popMargTop,
			'margin-left' : popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
	
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .request-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
	
	

});
