

function getLogged(){
	if(isLogged()){
		alert("test");
	}
	else{
		alert("not logged in");
	}
	
	
}
$(document)
			.ready(
					function() {
				getLogged();
});
