	function urlEncode(obj) {

				var s = '';

				for (var key in obj) {

					s += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&';

				}

				if (s.length > 0) {

					s = s.substr(0, s.length - 1);

				}


				return (s);

			}

var entry_1 = $(this).text().replace(/ /g,'');

			function performSearch() {

				var params = {
					

					term: encodeURIComponent($('#entry_1').val()),

					country: 'GB',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 1,

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

						genre: item.primaryGenreName

					};

					results[i] = obj;



					html += '<div class="songs-search-result">';



				

					html += '<a href="{0}" target="_blank"><img src="http://r.mzstatic.com/images/web/linkmaker/badge_itunes-sm.gif" alt=".replace("{0}", obj.track_url);" style="border: 0;"/></a></a>&nbsp;&nbsp;'.replace("{0}", obj.track_url);


					
				

				}

				jQuery('#itunes-preview').html(html);

			}	