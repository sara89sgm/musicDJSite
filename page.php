<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>File upload</title>
        <link href="css/style.css" rel="stylesheet" type="text/css">
    </head>

<body>
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
<h1>Upload the dammnnn file!!</h1>
<p>Please select blabla..</p>
   	<form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
      <input name="theFile" type="file" />
      <input name="Submit" type="submit" value="Upload">
	</form>
<h1>List query checker</h1>
<?php
	// Get the contents of our bucket
	$contents = $s3->getBucket("fuuzik");
	foreach ($contents as $file){
	
		$fname = $file['name'];
		$furl = "http://fuuzik.s3-website-eu-west-1.amazonaws.com/".$fname;
		
		//output a link to the file
		echo "<a href=\"$furl\">$fname</a><br />";
	}
?>
</body>
</html>
