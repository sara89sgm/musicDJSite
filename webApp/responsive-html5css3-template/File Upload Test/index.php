<html>
<head>
<title> file upload test </title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="upload/swfupload.js"></script>
<script src="upload.js"> </script>
</head>

<body>
	<?php
			  
    $encodedPolicy = json_encode( array(  
                  "expiration" => "gmdate(‘Y-m-d\TH:i:s\Z’, time() + (1 * 60 * 60))",  
                  "conditions" => array(  
                      0 => array( "acl" => "public-read" ),  
                      1 => array( "bucket" => "fuuzik" ),  
                      2 => array( "x-amz-meta-sig" => 'some meta signature to ensure authentic requests'),  
                      3 => array( "redirect" => $'URL to redirect a success request (its doesnt matter)' ),  
                      4 => array( "key" => "${filename}" ),  
                      5 => array( "Filename" => "${filename}" )  
                  ),  
                )  
    );  
    $encodedPolicy = base64_encode( $encodedPolicy );  
    $secretkey = 'oQ3oHXoVuTF/5t6Xc4tAv2O0/UZUbyzqCqlbe6ks';
    $signature = base64_encode(hash_hmac(‘sha1′, $encodedPolicy, $secretkey, true));
                var swfConfig = {  
                        'AWSAccessKeyId': 'AKIAITXOXYKBQBBYQN6A',  
                        'acl': 'public-read',  
                        'key': '${filename}',  
                        'policy': '<?php echo $encodedPolicy?>',  
                        'signature': '<?php echo $signature?>',  
                        'redirect': 'URL to redirect a success request (its doesnt matter)',  
                        'x-amz-meta-sig': 'some meta signature to ensure authentic requests',  
                };  
      
                // this line sets the post params so that SWFUpload will send the additional fields when it uploads the file.  
                $.swfu.setPostParams( swfConfig );  
			
			
			
			?>
			

			
			</body>
			</html>
