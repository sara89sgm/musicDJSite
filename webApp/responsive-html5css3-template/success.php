<html>
<head>
<title>test Upload</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="default.css" rel="stylesheet" type="text/css" />
</head>
<body style="padding:10px">
<?php
require_once "config.php";

$keys = explode(",",$_REQUEST['keys']); // cafeful, need to sanatize -- this has not been done!

// show files
if ( is_array($keys) ) {
  if ($keys[0] != '') {
    foreach ($keys as $value) {
      echo 'File transferred: ' . $S3_BUCKET . '/' . $value . '<br />';
      $expires = time() + 1*24*60*60/*$expires*/;
      $resource = $S3_BUCKET."/".urlencode($value);
      $stringToSign = "GET\n\n\n$expires\n/$resource";
      $signature = urlencode(base64_encode(hash_hmac("sha1", $stringToSign, AWS_SECRET_ACCESS_KEY, TRUE/*raw_output*/)));

      $privateURL = "<a href=\"http://s3.amazonaws.com/$resource?AWSAccessKeyId=".AWS_ACCESS_KEY_ID."&Expires=$expires&Signature=$signature\">$S3_BUCKET/$value</a>";
      $publicURL = "<a href=\"http://".$S3_BUCKET.".s3.amazonaws.com/$value\">".$value."</a>";
 
      echo "URL (private read): $privateURL <br />";
      echo "URL (public read) : $publicURL <br />";
      echo "<br />";
    } // foreach
  } else {
    echo "Nothing was uploaded, try again.";
  } 
} 
?>
<?php if (preg_match("/.*(png|jpg|gif)/",$value)) { // very simple check for a picture (only on last file) -- for fun ?>
<img src="http://<?=$S3_BUCKET?>.s3.amazonaws.com/<?=$value?>" />
<?php } ?>

<p><a href="example.php">&laquo; Go back and upload more files...</a></p>
</body>
</html>
