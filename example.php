<?php
/* Be sure to edit the file included below with your AMAZON S3 settings! */
require_once "config.php";

$isMacUser = (preg_match("/macintosh/",strtolower($_SERVER['HTTP_USER_AGENT'])) ? true : false);

if ( !isset($S3_BUCKET) || $S3_BUCKET == "" ) {
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
        ["starts-with", "$Content-Type", "image/"]
      ]
}';
   
$policyDoc = implode(explode('\r', $policyDoc));
$policyDoc = implode(explode('\n', $policyDoc));
$policyDoc64 = base64_encode($policyDoc);
$sigPolicyDoc = base64_encode(hash_hmac("sha1", $policyDoc64, AWS_SECRET_ACCESS_KEY, TRUE));
   
?>
<html>
<head>
<title>test Upload</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?=$SWFRoot?>swfupload.js"></script>
<script type="text/javascript" src="<?=$SWFRoot?>js/swfupload.queue.js"></script>
<script type="text/javascript" src="<?=$SWFRoot?>js/fileprogress.js"></script>
<script type="text/javascript" src="<?=$SWFRoot?>plugins/swfupload.speed.js"></script>
<script type="text/javascript" src="<?=$SWFRoot?>js/handlers.js"></script>
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
                file_size_limit : "10240",    // 10 MB
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

<div id="content">
  <form id="form1" action="index.php" method="post" enctype="multipart/form-data">
    <p>This page demonstrates a simple usage of SWFUpload.  It uses the Queue Plugin to simplify uploading or cancelling all queued files.</p>

      <div class="fieldset flash" id="fsUploadProgress">
      <span class="legend">Upload Queue</span>
          <div id="loadanim" style="display:none;position:relative;top:-10px;line-height:0;"><img src="images/loader.gif" alt="" style="border:0;" />&nbsp;Processing...please wait.</div>
      </div>
    <div id="divStatus" style="display:none;">0 Files Uploaded</div>
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
</div>
</body>
</html> 
