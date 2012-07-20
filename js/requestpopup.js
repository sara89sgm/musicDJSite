var data;
        $(document).ready(function(){
			$('input.j').keyup(function() {
				$('#itunes-results').show('slow', function() {

    
  })
			
			performSearch();

			});	
			$('input.j1').keyup(function() {
						$('#itunes-results').show('slow', function() {

    
  })
			performSearch1();

			});	
			$('input.j2').keyup(function() {
						$('#itunes-results').show('slow', function() {

    
  })
			performSearch2();

			});	
			$('input.j3').keyup(function() {
						$('#itunes-results').show('slow', function() {

    
  })
			performSearch3();

			});	
			$('input.j4').keyup(function() {
						$('#itunes-results').show('slow', function() {

    
  })
			performSearch4();

			});	
			 $('li').hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
	
        });	function urlEncode(obj) {
				var s = '';

				for (var key in obj) {

					s += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&';

				}

				if (s.length > 0) {

					s = s.substr(0, s.length - 1);

				}

				return (s);

			}

			function performSearch() {

				var params = {

					term: (jQuery('#keyword').val()),

					country: 'US',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 21,

					callback: 'handleTunesSearchResults'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}

			
			
			function handleTunesSearchResults(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

		source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,

						artwork: item.artworkUrl100,
						
						preview: item.previewUrl

					};
					
					results[i] = obj;


				
				
html = html+ "<li class='z' ondblclick=\"rack('{0}','{1}')\"; \">".replace('{0}', obj.track_name).replace('{1}', obj.artist_name);
html = html+ "<img class='itunes'onmousedown=\"document.getElementById('{0}').play()\" onmouseup=\"document.getElementById('{4}').pause()\" src='{2}' alt=''/><audio id='{3}'  style='display:none' preload='metadata'  src='{1}'></audio><br/>".replace("{0}", obj.track_id).replace("{1}", obj.preview).replace("{2}", obj.artwork).replace("{3}", obj.track_id).replace("{4}", obj.track_id);
					html += '<div class="c">{0}</div>'.replace("{0}", obj.track_name);
					html += '<div class="d">{0}</div></li>'.replace("{0}", obj.artist_name);
					




					

			
				 data = [
				obj.track_name,
				obj.artist_name
				]
	
			
				


				};
				jQuery('#itunes-results').html(html);

			
			}
			//end
			function rack(parm1, parm2) { 
			
  alert("ok");
  $('input.j').val(parm1 + " - " + parm2);
  

}
		function rack1(parm1, parm2) { 
			
  alert("ok");
  $('input.j1').val(parm1 + " - " + parm2);
  

}
		function rack2(parm1, parm2) { 
			
  alert("ok");
  $('input.j2').val(parm1 + " - " + parm2);
  

}
		function rack3(parm1, parm2) { 
			
  alert("ok");
  $('input.j3').val(parm1 + " - " + parm2);
  

}
		function rack4(parm1, parm2) { 
			
  alert("ok");
  $('input.j4').val(parm1 + " - " + parm2);
  

}
function performSearch1() {

				var params = {

					term: (jQuery('#keyword1').val()),

					country: 'US',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 21,

					callback: 'handleTunesSearchResults1'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}

			
			
			function handleTunesSearchResults1(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

		source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,

						artwork: item.artworkUrl100,
						
						preview: item.previewUrl

					};
					
					results[i] = obj;


				
				
html = html+ "<li class='z' onmousedown=\"document.getElementById('{4}').play()\" onmouseup=\"document.getElementById('{2}').pause()\" ondblclick=\"rack1('{0}','{1}')\"; \">".replace('{0}', obj.track_name).replace('{1}', obj.artist_name).replace("{4}", obj.track_id).replace("{2}", obj.track_id);
html = html+ "<img class='itunes' src='{2}' alt='image'/><audio id='{3}'  style='display:none' preload='metadata'  src='{1}'></audio><br/>".replace("{4}", obj.track_id).replace("{1}", obj.preview).replace("{2}", obj.artwork).replace("{3}", obj.track_id);
					html += '<div class="c">{0}</div>'.replace("{0}", obj.track_name);
					html += '<div class="d">{0}</div></li>'.replace("{0}", obj.artist_name);
					




					

			
				 data = [
				obj.track_name,
				obj.artist_name
				]
	
			
				


				};
				jQuery('#itunes-results').html(html);

			
			}
			//end
		function performSearch2() {

				var params = {

					term: (jQuery('#keyword2').val()),

					country: 'US',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 21,

					callback: 'handleTunesSearchResults2'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}

			
			
			function handleTunesSearchResults2(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

		source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,

						artwork: item.artworkUrl100,
						
						preview: item.previewUrl

					};
					
					results[i] = obj;


				
				
html = html+ "<li class='z' ondblclick=\"rack2('{0}','{1}')\"; \">".replace('{0}', obj.track_name).replace('{1}', obj.artist_name);
html = html+ "<img class='itunes'onmousedown=\"document.getElementById('{0}').play()\" onmouseup=\"document.getElementById('{4}').pause()\" src='{2}' alt=''/><audio id='{3}'  style='display:none' preload='metadata'  src='{1}'></audio><br/>".replace("{0}", obj.track_id).replace("{1}", obj.preview).replace("{2}", obj.artwork).replace("{3}", obj.track_id).replace("{4}", obj.track_id);
					html += '<div class="c">{0}</div>'.replace("{0}", obj.track_name);
					html += '<div class="d">{0}</div></li>'.replace("{0}", obj.artist_name);
					




					

			
				 data = [
				obj.track_name,
				obj.artist_name
				]
	
			
				


				};
				jQuery('#itunes-results').html(html);

			
			}
			//end
			function performSearch3() {

				var params = {

					term: (jQuery('#keyword3').val()),

					country: 'US',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 21,

					callback: 'handleTunesSearchResults3'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}

			
			
			function handleTunesSearchResults3(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

		source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,

						artwork: item.artworkUrl100,
						
						preview: item.previewUrl

					};
					
					results[i] = obj;


				
				
html = html+ "<li class='z' ondblclick=\"rack3('{0}','{1}')\"; \">".replace('{0}', obj.track_name).replace('{1}', obj.artist_name);
html = html+ "<img class='itunes'onmousedown=\"document.getElementById('{0}').play()\" onmouseup=\"document.getElementById('{4}').pause()\" src='{2}' alt=''/><audio id='{3}'  style='display:none' preload='metadata'  src='{1}'></audio><br/>".replace("{0}", obj.track_id).replace("{1}", obj.preview).replace("{2}", obj.artwork).replace("{3}", obj.track_id).replace("{4}", obj.track_id);
					html += '<div class="c">{0}</div>'.replace("{0}", obj.track_name);
					html += '<div class="d">{0}</div></li>'.replace("{0}", obj.artist_name);
					




					

			
				 data = [
				obj.track_name,
				obj.artist_name
				]
	
			
				


				};
				jQuery('#itunes-results').html(html);

			
			}
			//end
			function 
			performSearch4() {

				var params = {

					term: (jQuery('#keyword4').val()),

					country: 'US',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 21,

					callback: 'handleTunesSearchResults4'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}

			
			
			function handleTunesSearchResults4(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

		source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,

						artwork: item.artworkUrl100,
						
						preview: item.previewUrl

					};
					
					results[i] = obj;


				
				
html = html+ "<li class='z' ondblclick=\"rack4('{0}','{1}')\"; \">".replace('{0}', obj.track_name).replace('{1}', obj.artist_name);
html = html+ "<img class='itunes'onmousedown=\"document.getElementById('{0}').play()\" onmouseup=\"document.getElementById('{4}').pause()\" src='{2}' alt=''/><audio id='{3}'  style='display:none' preload='metadata'  src='{1}'></audio><br/>".replace("{0}", obj.track_id).replace("{1}", obj.preview).replace("{2}", obj.artwork).replace("{3}", obj.track_id).replace("{4}", obj.track_id);
					html += '<div class="c">{0}</div>'.replace("{0}", obj.track_name);
					html += '<div class="d">{0}</div></li>'.replace("{0}", obj.artist_name);
					




					

			
				 data = [
				obj.track_name,
				obj.artist_name
				]
	
			
				


				};
				jQuery('#itunes-results').html(html);

			
			}
			//end
		