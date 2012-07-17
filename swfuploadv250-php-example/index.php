<?php
/* Be sure to edit the file included below with your AMAZON S3 settings! */
require_once "config.php";

$isMacUser = (preg_match("/macintosh/",strtolower($_SERVER['HTTP_USER_AGENT'])) ? true : false);

if ( !isset($S3_BUCKET) || $S3_BUCKET == "") {
  echo "Um, sorry, I need my configuration file. :( ";
  exit(0);
}
 






/*
  Flash 10.1 issue, omitted the below from the policy
        {"success_action_redirect": "' . $SUCCESS_REDIRECT . '"},
*/

$MAX_FILE_SIZE = 100 * 1048576;
$expTime = time() + (1 * 60 * 60);
$expTimeStr = gmdate('Y-m-d\TH:i:s\Z', $expTime);
$policyDoc = '{
        "expiration": "' . $expTimeStr . '",
        "conditions": [
        {"bucket": "fuuzik"},
        
        {"acl": "public-read"},
        ["content-length-range", 0, '. $MAX_FILE_SIZE .'],
        {"success_action_status": "201"},
        ["starts-with", "$Filename", ""],
        ["starts-with", "$Content-Type", "audio/*"]
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
<title>SWFUpload Demos - Simple Demo</title>
<link href="css/default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="swfupload/swfupload.js"></script>
<script type="text/javascript" src="swfupload/swfupload.queue.js"></script>
<script type="text/javascript" src="js/fileprogress.js"></script>
<script type="text/javascript" src="js/handlers.js"></script>
<script type="text/javascript">

    var isMacUser = <?php echo ($isMacUser ? 'true' : 'false'); ?>;
    var successURL = '<?php echo ($SUCCESS_REDIRECT); ?>';

		var swfu;

		window.onload = function() {
			var settings = {
				flash_url : "swfupload/swfupload.swf",
				flash9_url : "swfupload/swfupload_fp9.swf",
				//upload_url: "upload.php",
        upload_url: "https://fuuzik.s3.amazonaws.com/uploads/",
        post_params: {"AWSAccessKeyId":"AKIAITXOXYKBQBBYQN6A", "key":"${filename}", "acl":"public-read", "policy":"<?=$policyDoc64?>", "signature":"<?=$sigPolicyDoc?>","success_action_status":"201", "content-type":"audio/*"},

        http_success : [201],
        assume_success_timeout : <?php echo ($isMacUser ? 5 : 0); ?>,


        // File Upload Settings
        file_post_name: 'file',
        file_size_limit : "100 MB",    // 100 MB
        file_types : "*.*",
        file_types_description : "All Files",
        file_upload_limit : "10",
        file_queue_limit : 3,

				custom_settings : {
					progressTarget : "fsUploadProgress",
					cancelButtonId : "btnCancel"
				},
				debug: false,

				// Button settings
				button_image_url: "images/TestImageNoText_65x29.png",
				button_width: "65",
				button_height: "29",
				button_placeholder_id: "spanButtonPlaceHolder",
				button_text: '<span class="theFont">Hello</span>',
				button_text_style: ".theFont { font-size: 16; }",
				button_text_left_padding: 12,
				button_text_top_padding: 3,

        moving_average_history_size: 10,
				
				// The event handler functions are defined in handlers.js
				swfupload_preload_handler : preLoad,
				swfupload_load_failed_handler : loadFailed,
				file_queued_handler : fileQueued,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStart,
				upload_progress_handler : uploadProgress,
				upload_error_handler : uploadError,
				upload_success_handler : uploadSuccess,
				upload_complete_handler : uploadComplete,
				queue_complete_handler : queueComplete	// Queue plugin event
			};

			swfu = new SWFUpload(settings);
	     };
	</script>
</head>
<body>
<div id="header">
	<h1 id="logo"><a href="../">SWFUpload</a></h1>
	<div id="version">v2.5.0</div>
</div>

<div id="content">
	<h2>Simple Demo</h2>
	<form id="form1" action="index.php" method="post" enctype="multipart/form-data">
		<p>This page demonstrates a simple usage of SWFUpload.  It uses the Queue Plugin to simplify uploading or cancelling all queued files.</p>

			<div class="fieldset flash" id="fsUploadProgress">
			<span class="legend">Upload Queue</span>
			</div>
		<div id="divStatus">0 Files Uploaded</div>
			<div>
				<span id="spanButtonPlaceHolder"></span>
				<input id="btnCancel" type="button" value="Cancel All Uploads" onclick="swfu.cancelQueue();" disabled="disabled" style="margin-left: 2px; font-size: 8pt; height: 29px;" />
			</div>

	</form>
</div>
</body>
</html>
