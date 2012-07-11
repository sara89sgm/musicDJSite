   
   
    var swfu = new SWFUpload(  
                   {  
                   	  flash_url: "/upload/swfupload.swf",    
                      file_size_limit: "100 MB",  
                      file_types: "*.*",  
                      debug: true,  
                      upload_url: "http://fuuzik.s3-website-eu-west-1.amazonaws.com/",  
                      button_placeholder_id : "SWFUploadButton",  
                      button_width: '112',  
                      button_height: '33',  
                      button_cursor : SWFUpload.CURSOR.HAND,  
                      http_success : [201, 303, 200], /* Amazon returns a 303 on success */  
                      file_post_name: "file", /* Amazon expects the file data to be in a input named "file"  */
      
                      file_queued_handler: function(f){  
      
                        // track the filenames so you can upload them later  
                        cachedUploadFiles[ f.index ] = f.name;  
                      },  
                      upload_complete_handler: function(e){ uploadSWFFile( ); },  
                      upload_start_handler: function(e){  
                              // reset the progress bar  
                          $("#progressBar").progressbar( 'value', 0 );  
                      },  
                      upload_error_handler: function(e){  
      
                      },  
                      upload_progress_handler: function(f, c, t){  
                         // update the progress bar as the process continues  
                         $("#progressBar").progressbar( 'value', Math.ceil( ( c/t ) * 100 ) );  
                      }  
    });  
    
