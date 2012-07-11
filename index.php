
<?php  
//include the S3 class                
if (!class_exists('S3'))require_once('S3.php');  
  
//AWS access info  
if (!defined('awsAccessKey')) define('awsAccessKey', 'AKIAITXOXYKBQBBYQN6A');  
if (!defined('awsSecretKey')) define('awsSecretKey', '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');  
  
//instantiate the class  
$s3 = new S3(awsAccessKey, awsSecretKey);  
  
 if(isset($_POST['Submit'])){
 
 	$fileName = $_FILES['theFile']['name'];
 	$fileTempName = $_FILES['theFile']['tmp_name'];
 	
 	$s3->putBucket("fuuzik", S3::ACL_PUBLIC_READ);
  
//move the file  
if ($s3->putObjectFile($fileTempName, "fuuzik", $fileName, S3::ACL_PUBLIC_READ)) {  
    echo "We successfully uploaded your file.";  
}else{  
    echo "Something went wrong while uploading your file... sorry.";  
}  

  
?>  

<form action="" method="post" enctype="multipart/form-data">
<input name="theFile" type="file" />
<input name="Submit" type="file" />
<input name="Submit" type="submit" value="Upload">
</form>



<?php  
// Get the contents of our bucket  
$bucket_contents = $s3->getBucket("fuuzik");  
  
foreach ($bucket_contents as $file){  
  
    $fname = $file['name'];  
    $furl = "http://fuuzik.s3-website-eu-west-1.amazonaws.com/".$fname;  
      
    //output a link to the file  
    echo "<a href=\"$furl\">$fname</a><br />";  
}  
?>  


