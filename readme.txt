
PHP Script provided by: Paul Cardwell

E-mail: arcadefx@msn.com

Revision: 1.4

History: Fixed issue in Speed Plugin on line 131, did not check for file==null. Ran into error when setting file upload limit.

History: js/handlers.js - put in check for Mac User uploading < 100k files.

Date: September 17, 2009.

Original Author: Derived in part from code by Edmon Joseph Caputo - I think it's him.

Warranty: None, use at your own risk.

License: Follow SWFUpload license.

SWFUpload unmodified can be found here: http://www.swfupload.org/



(Mini) How To use PHP and S3 Directly with SWFUpload:

-----------------------------------------------------
Date: September 17, 2009 - origin
Date: June 12, 2010 - fixed issue with SWFUPLOAD and redirect. Policy stated it, but it didn't need it, so it's been removed.
      This fixes the '303' error.

Assumptions: You have an account on a box with PHP5 and a Web Server.



1) First you have to set up an account on Amazon S3.

2) Create a "Bucket" on Amazon S3.

3) Copy "crossdomain.xml" into your "Bucket" (make sure it's publicly readable!)

4) Edit "config.php" and update the configuration for S3.
   
   *) Remember to change the redirect url.  For the demo make sure it points to success.php

5) Use a desktop web browser and pull up example.php 

***If you are on a Mac read on otherwise your done!

6) Notice the "assume_success_timeout" variable.  I set it to wait at most 5 seconds before forcing it to finish. This will only happen on the Mac.  Basically, after SWFUpload sends the final packet it waits 5 seconds and then continues normal processing. 

7) Enjoy!



Follow the on-screen instructions and your files will appear on Amazon S3.

