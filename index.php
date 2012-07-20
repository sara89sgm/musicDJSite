<?php
/* Be sure to edit the file included below with your AMAZON S3 settings! */
require_once "config.php";

$isMacUser = (preg_match("/macintosh/",strtolower($_SERVER['HTTP_USER_AGENT'])) ? true : false);

if ( !isset($S3_BUCKET) || $S3_BUCKET == '' ) {
  echo "Um, sorry, I need my configuration file. :( ";
  exit(0);
}

/*
  Flash 10.1 issue, omitted the below from the policy
        {"success_action_redirect": "' . $SUCCESS_REDIRECT . '"},
*/

$MAX_FILE_SIZE = 50 * 1048576;
$expTime = time() + (1 * 60 * 60);
$expTimeStr = gmdate('Y-m-d\TH:i:s\Z', $expTime);
$policyDoc = '{
        "expiration": "' . $expTimeStr . '",
        "conditions": [
        {"bucket": "' . $S3_BUCKET . '"},
        ["starts-with", "$key", ""],
        {"acl": "public-read"},
        ["content-length-range", 0, '. $MAX_FILE_SIZE .'],
        {"success_action_status": "201"},
        ["starts-with", "$Filename", ""], 
        ["starts-with", "$Content-Type", ""]
      ]
}';
   
$policyDoc = implode(explode('\r', $policyDoc));
$policyDoc = implode(explode('\n', $policyDoc));
$policyDoc64 = base64_encode($policyDoc);
$sigPolicyDoc = base64_encode(hash_hmac("sha1", $policyDoc64, AWS_SECRET_ACCESS_KEY, TRUE));
   
?>
<!DOCTYPE html>
<html>
	<head>
     
		<title>Responsive HTML5/CSS3 template</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, maximum-scale = 1, minimum-scale=1" />
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
		<link rel="stylesheet" href="css/custom.css" type="text/css" />
		<link rel="stylesheet" href="css/singup.css" type="text/css" />
        <link rel="stylesheet" href="css/itunes.css" type="text/css" />
        <link rel="stylesheet" href="css/swf.css" type="text/css" />
        	<link rel="stylesheet" href="css/jquery-ui-1.8.21.css" type="text/css" />

        	<link rel="stylesheet" href="css/jquery.mCustomScrollbar.css" type="text/css" />
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	        		
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
		<script src="js/jquery.mousewheel.min.js"></script>
		<script src="js/jquery.mCustomScrollbar.js"></script>		

        <script src="js/jquery-ui-1.8.21.custom.min.js"></script>
		<script src="js/jquery.roundabout-shapes.min.js"></script>
		<script src="js/jquery.flexslider.js"></script>
		<script src="js/jquery.roundabout.js"></script>
		<script src="js/default.js"></script>
        <script src="js/home.js"></script>
         	<script src="js/index.js"></script>
		<script src="http://www.parsecdn.com/js/parse-1.0.6.min.js"></script>
		<script src="js/singUp.js"></script>
        <script src="js/facebook.js"></script>
        <script src="js/facebookparse.js"></script>
        <script src="js/request.js"></script>
        <script src="js/response.js"></script>      
       <script src="js/submit_request.js"></script>
        <script src="js/requestpopup.js"></script><script type="text/javascript" src="<?=$SWFRoot?>swfupload.js"></script>
<script type="text/javascript" src="js/swfupload.queue.js"></script>
<script type="text/javascript" src="js/fileprogress.js"></script>
<script type="text/javascript" src="plugins/swfupload.speed.js"></script>
<script type="text/javascript" src="js/handlers.js"></script>
<script type='text/javascript' > 
  RequestID = ""
  UserID = ""
  ResponseID = ""
</script>
<script type="text/javascript">

        var isMacUser = <?php echo ($isMacUser ? 'true' : 'false'); ?>;
        var successURL = '<?php echo ($SUCCESS_REDIRECT); ?>';

        var swfu;
        window.onload = function () {
            swfu = new SWFUpload({
                // Backend Settings
                //upload_url: "<?php //echo HTTPPATH_MESSAGES.'upload_test.php'?>",
                upload_url: "http://<?=$S3_BUCKET?>.s3.amazonaws.com/",
                post_params: {"AWSAccessKeyId":"<?=AWS_ACCESS_KEY_ID?>", "key":"${filename}", "acl":"public-read", "policy":"<?=$policyDoc64?>", "signature":"<?=$sigPolicyDoc?>","success_action_status":"201", "content-type":"image/"},

                http_success : [201], 
                assume_success_timeout : <?php echo ($isMacUser ? 5 : 0); ?>,

                // File Upload Settings
                file_post_name: 'file',
                file_size_limit : "102400",    // 10 MB
                file_types : "*.*",
                file_types_description : "All Files",
                file_upload_limit : "10",
                file_queue_limit : 0,

                // Event Handler Settings - these functions as defined in Handlers.js
                //  The handlers are not part of SWFUpload but are part of my website and control how
                //  my website reacts to the SWFUpload events.
                file_queued_handler : fileQueued,
                file_queue_error_handler : fileQueueError,
                file_dialog_complete_handler : fileDialogComplete,
                upload_start_handler : uploadStart,
                upload_progress_handler : uploadProgress,
                upload_error_handler : uploadError,
                upload_success_handler : uploadSuccess,
                upload_complete_handler : uploadComplete,

                // Button Settings
                button_image_url: "<?=$SWFRoot?>images/TestImageNoText_65x29.png",
                button_width: "65",
                button_height: "29",
                button_placeholder_id: "spanButtonPlaceHolder",
                button_text: '<span class="theFont">Browse</span>',
                button_text_style: ".theFont { font-size: 16; }",
                button_text_left_padding: 6,
                button_text_top_padding: 3,

                button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                button_cursor: SWFUpload.CURSOR.HAND,

                moving_average_history_size: 10,
               
                // Flash Settings
                flash_url : "<?=$SWFRoot?>swfupload.swf",
                custom_settings : {
                  progressTarget : "fsUploadProgress",
                  cancelButtonId : "btnCancel"
                },
               
                // Debug Settings
                debug: false
            });
        };
    </script>
    </head>
	<body>

    
     <div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
     appId      : '386827401378707', // App ID
      channelUrl : 'http://www.fuuzik.com/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
   

   
</script>

<!--  WRAP START -->
		<div id="wrap">
<!--  HEADER START  -->
			<header>
<!--  NAV START  -->
				<div id="fb-root"></div>
                <nav>
				<img src='img/purplefuziclogo.png' width="215" height="118" onClick="window.location.href='index.php'"> </img> 
					
					<ul>
						<li class="a" onclick="reqpopup()"></li></li><li class="b" onClick="window.location.href='index.php'"></li><li class="c" onClick="window.location.href='page3.html'"></li><li class="d" onClick="window.location.href='page4.html'"></li>
					</ul>
					
				</nav>
<!--  NAV END  -->
				<div id="player">
					<ul id="roundb">
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
					</ul>
					<audio id="audioPlayer" controls="controls" >
						<source id="mp3Source" type="audio/mp3"
									src="http://houseanthems.com/wp-content/uploads/2012/05/Avicii-vs.-Lenny-Kravitz-Superlove-Original-Mix.mp3" />
					</audio>
				</div>
				<div id="login">
				<a href="#login-box2" class="login-window" id="loginA">Login </a>
				<a href="#login-box" class="login-window" id="loginB">Sign Up </a>
                
				
				</div>
                <div id="request-box" class="request-popup"><a href="#" class="close"></a>
   <section id="requestamix">
					<h2>     Request A Mix</h2>
                    <h3>     Click and hold to preview. Double click to select. </h3>
					<div id="track">
						<input class="j" id="keyword"  type="text" placeholder="Track 1"/>
                        <input class="j1" id="keyword1"  type="text"  placeholder="Track 2"/>
                        <input class="j2" id="keyword2"  type="text"  placeholder="Track 3"/>
                        <input class="j3" id="keyword3"  type="text"  placeholder="Track 4"/>
                        <input class="j4" id="keyword4"  type="text"  placeholder="Track 5"/>
                    
                        </div><div>
<ul id="itunes-results" onDblClick="$('#itunes-results').hide('slow', function() {

    
  });"></ul></div>
					<div id="trackinfo">
						<input type="text" name="" value="title…" onblur="this.value=!this.value?'title...':this.value;" onfocus="this.select()" onclick="this.value='';" class="" id="title1" title="" />
						<textarea name="entry2" rows="8" cols="75" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="" id="description" title="">Please type your message here...</textarea>
<!--  TAGS INPUT  -->

						<input id="tag1" type="text" name="" value="tag 1" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" />
						<input id="tag2" type="text" name="" value="tag 2" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" />
						<input id="tag3" type="text" name="" value="tag 3" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" /><div class="styled-select">
							<select id="genre">
								<option>Genre</option>
								<option>House</option>
								<option>Electro</option>
								<option>Dubstep</option>
                                <option>Drum & Bass</option>
							</select>
						</div>
						<div id="#itunes-results"></div>
						<input type="file" id="picture" class="droparea " data-crop="true" data-canvas="true" data-width="100" data height="100" style="float:left;"/> 
			

						<button class="submit" onclick="logged(); requested();" type="submit">Request</button>
                       
                  

					</div>
				</section>        </div>
</div>

<div id="response-box" class="response-popup"><a href="#" class="close"></a>
<section id="requestamix">
					<h2>Respond</h2>
<p>Enter added songs... </p>
					<div id="track">
						<input type="text" name="" value="enter track 6" onblur="this.value=!this.value?'enter track 1':this.value;" onfocus="this.select(); performSearch();" onclick="this.value='';" class="spotify_song_search searchSpotify ui-autocomplete" id="entry_1" title="" /><div id="itunes-preview"></div>
						<input type="text" name="" value="enter track 7" onblur="this.value=!this.value?'enter track 3':this.value;" onfocus="this.select()" onclick="this.value='';" class="spotify_song_search searchSpotify ui-autocomplete" id="entry_2" title="" />
						<input type="text" name="" value="enter track 8" onblur="this.value=!this.value?'enter track 3':this.value;" onfocus="this.select()" onclick="this.value='';" class="spotify_song_search searchSpotify ui-autocomplete" id="entry_3" title="" />
						<input type="text" name="" value="enter track 9" onblur="this.value=!this.value?'enter track 4':this.value;" onfocus="this.select()" onclick="this.value='';" class="spotify_song_search searchSpotify ui-autocomplete" id="entry_4" title="" />
						<input type="text" name="" value="enter track 10" onblur="this.value=!this.value?'enter track 5':this.value;" onfocus="this.select()" onclick="this.value='';" class="spotify_song_search searchSpotify ui-autocomplete" id="entry_5" title="" />
					</div>
					<div id="trackinfo">
						<input type="text" name="" value="title…" onblur="this.value=!this.value?'title...':this.value;" onfocus="this.select()" onclick="this.value='';" class="" id="title1" title="" />
						<textarea name="entry2" rows="8" cols="75" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="" id="description" title="">Please type your message here...</textarea>
<!--  TAGS INPUT  -->

						<input id="tag1" type="text" name="" value="tag 1" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" />
						<input id="tag2" type="text" name="" value="tag 2" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" />
						<input id="tag3" type="text" name="" value="tag 3" onblur="this.value=!this.value?'':this.value;" onfocus="this.select()" onclick="this.value='';" class="tags"  title="" />
						<div class="styled-select">
							<select id="genre">
								<option>Genre</option>
								<option>House</option>
								<option>Electro</option>
								<option>Dubstep</option>
                                <option>Drum & Bass</option>
							</select>
						</div>
						
						<input type="file" id="picture" class="droparea " data-crop="true" data-canvas="true" data-width="100" data height="100" style="float:left;"/>

  <form id="form1" action="swf.php" method="post" enctype="multipart/form-data">
   

      <div class="fieldset flash" id="fsUploadProgress">
  
          <div id="loadanim" style="display:none;position:relative;top:-10px;line-height:0;">
        </div>
      </div>
    <div id="divStatus" style="display:none;"></div>
      <div>
        <input id="btnCancel" type="button" value="Cancel All Uploads" onClick="swfu.cancelQueue();" disabled="disabled" style="margin-left: 2px; font-size: 8pt; height: 29px;" />
      </div>
      <span id="spanButtonPlaceHolder"></span>
<!--
          <table cellspacing="0">
            <tr>
              <td>Current Speed:</td>
              <td id="tdCurrentSpeed"></td>
            </tr>
            <tr>
              <td>Average Speed:</td>
              <td id="tdAverageSpeed"></td>
            </tr>
            <tr>
              <td>Moving Average Speed:</td>
              <td id="tdMovingAverageSpeed"></td>
            </tr>
            <tr>
              <td>Time Remaining</td>
              <td id="tdTimeRemaining"></td>
            </tr>
            <tr>
              <td>Time Elapsed</td>
              <td id="tdTimeElapsed"></td>
            </tr>
            <tr>
              <td>Percent Uploaded</td>
              <td id="tdPercentUploaded"></td>
            </tr>
            <tr>
              <td>Size Uploaded</td>
              <td id="tdSizeUploaded"></td>
            </tr>
            <tr>
              <td>Progress Event Count</td>
              <td id="tdProgressEventCount"></td>
            </tr>
          </table>
-->
  </form> 
  <button class="submit" onclick="saveresponse();" type="submit">Save</button>
    
    		</div>
</div>

				
				<div id="login-box" class="login-popup">
        <a href="#" class="close"></a>
        
        <div id="formSingUp">
          <fb:login-button size="medium"
                 onlogin="facebooklogin()">
  Connect with Facebook
</fb:login-button>
        
          <form method="post" class="signin" action="#">
                <fieldset class="textbox">
            	<label class="username">
                <span>Name</span>
                <input id="username" name="username" value="" type="text" autocomplete="on" placeholder="Username">
                </label>
                <label class="username">
                <span>Email</span>
                <input id="email" name="email" value="" type="text" autocomplete="on" placeholder="Email">
                </label>
                <label class="password">
                <span>Password</span>
                <input id="password" name="password" value="" type="password" placeholder="Password">
                </label>
                <button class="submit button" type="button" onclick="signUp()">Sign in</button>
                <p>
               
                </p>        
                </fieldset>
          </form>
          </div>
          <div id="signedUp" style="display:none" >
          <p class="popupMessage"> You are now signed Up, go to the Login and customize your Fuuzik profile! </p>          </div>
</div>


				<div id="login-box2" class="login-popup">
        <a href="#" class="close"></a>
        <div id="formSingUp2">
        
        <fb:login-button size="medium"
                 onlogin="facebooklogin()">
  Connect with Facebook
</fb:login-button>
        
           <form method="post" class="signin" action="#">
                <fieldset class="textbox">
            	
                <label class="username">
                <span>Email</span>
                <input id="emailL" name="email" value="" type="text" autocomplete="on" placeholder="Email">
                </label>
                <label class="password">
                <span>Password</span>
                <input id="passwordL" name="password" value="" type="password" placeholder="Password">
                </label>
                <button class="submit button" type="button" onclick="login()">Log in</button>
                <p>
               
                </p>        
                </fieldset>
          </form>
          </div>
                 </div>
                 
</div>


<!--  HEADER END  -->
			</header>
<!--  CONTENT START  -->
			<div id="content">
           <div id="fb-root"></div>
				<section id="requests">
					<form>
					<label for='sort'>Sort By:</label>
					<select id='sort' name=select1 onchange='OnChange(this.form.select1);'>
					<option>likes</option>
					<option>added</option>
					</select>
					
					</form>
					<div id='requestslist'>
					<!-- dynamic content goes here --> 
					</div>
				</section>
				<section id="response">
                
					
					<form>
					<label for='sort'>Sort By:</label>
					<select id='sort' name=select1 onchange='OnChange(this.form.select1);'>
					<option>likes</option>
					<option>added</option>
					</select>
					</form>
					<div id='rlist' >
                    <ul>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="#request-box"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
						<li>
							<img src="img/bep.jpg" width="600" height="600" />   <a id="" class="aaa" href="page1.html"></a><a id="" class="bbb" href="page1.html"></a><a id="" class="ccd" href="page1.html"></a><h3>title</h3><a class="more">More</a> <span class="respond">Play</span>
						</li>
					</ul>
                    </div>
				</section>
<!--  CONTENT END  -->
			</div>
			<footer>
				<p>Subscribe to
					our <a href="http://webcodebuilder.com/feed/">blog</a> and follow us
					on <a href="https://twitter.com/#!/Fuuzik">Twitter</a>
				</p>
			</footer>

<!--  WRAP END -->
		</div>
	</body>
</html>
