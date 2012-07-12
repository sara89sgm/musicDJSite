<!DOCTYPE html>
<html>
	<head>
     
		<title>Responsive HTML5/CSS3 template</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, maximum-scale = 1, minimum-scale=1" />
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
		<link rel="stylesheet" href="css/custom.css" type="text/css" />
		<link rel="stylesheet" href="css/singup.css" type="text/css" />
		<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script src="js/jquery.roundabout-shapes.min.js"></script>
		<script src="js/jquery.flexslider.js"></script>
		<script src="js/jquery.roundabout.js"></script>
		<script src="js/default.js"></script>
		<script src="http://www.parsecdn.com/js/parse-1.0.6.min.js"></script>
		<script src="js/home.js"></script>
		<script src="js/singUp.js"></script>
        <script src="js/facebook.js"></script>
        <script src="js/facebookparse.js"></script>
        <script src="js/response.js"></script>
     
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
				<img src='img/purplefuziclogo.png' width="215" height="118" onClick="window.location.href='index.html'"> </img> 
					
					<ul>
						<li class="a" onClick="window.location.href='page1.html'"></li><li class="b" onClick="window.location.href='page2.html'"></li><li class="c" onClick="window.location.href='page3.html'"></li><li class="d" onClick="window.location.href='page4.html'"></li>
					</ul>
					<!-- Will reinclude this later :D<span class="a">request a mix 1</span>
					<span class="b">request a mix 2</span>
					<span class="c">request a mix 3</span>
					<span class="d">request a mix 4</span>
					-->
				</nav>
<!--  NAV END  -->
				<div id="player">
					<ul id="roundb">
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
						<li><img src="img/four.jpg" width="473" height="473" /></li>
						<li><img src="img/passion.jpg" width="473" height="473" /></li>
						<li><img src="img/second.jpg" width="473" height="473" /></li>
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
						<li><img src="img/four.jpg" width="473" height="473" /></li>
						<li><img src="img/passion.jpg" width="473" height="473" /></li>
						<li><img src="img/second.jpg" width="473" height="473" /></li>
						<li><img src="img/bep.jpg" width="600" height="600" /></li>
						<li><img src="img/four.jpg" width="473" height="473" /></li>
						<li><img src="img/passion.jpg" width="473" height="473" /></li>
						<li><img src="img/second.jpg" width="473" height="473" /></li>
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
                        <?php
			//include the S3 class
			if (!class_exists('S3'))require_once('S3.php');
			
			//AWS access info
			if (!defined('awsAccessKey')) define('awsAccessKey', 'AKIAITXOXYKBQBBYQN6A');
			if (!defined('awsSecretKey')) define('awsSecretKey', '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');
			
			//instantiate the class
			$s3 = new S3(awsAccessKey, awsSecretKey);
			
			//check whether a form was submitted
			if(isset($_POST['Submit'])){
			
				//retreive post variables
				$fileName = $_FILES['theFile']['name'];
				$fileTempName = $_FILES['theFile']['tmp_name'];
				
				//create a new bucket
				$s3->putBucket("fuuzik", S3::ACL_PUBLIC_READ);
				
				//move the file
				if ($s3->putObjectFile($fileTempName, "fuuzik", $fileName, S3::ACL_PUBLIC_READ)) {
					echo "<strong>Booya!</strong>";
				}else{
					echo "<strong>fuck this shit</strong>";
				}
			}
		?>

<br/>
<br/>
<br/>
<br/><br/><br/>
<form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
      <input name="theFile" type="file" />
      <input name="Submit" onclick="saveresponse();" type="submit" value="Upload">
	</form>
    
    

			

						

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
