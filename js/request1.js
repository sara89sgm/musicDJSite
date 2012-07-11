function requestDO(){

      
              

var Request = Parse.Object.extend("Request");
var Request = new Request();

request.set("track1", $("#entry_1").val());
request.set("track2", $("#entry_2").val());
request.set("track3", $("#entry_3").val());
request.set("track4", $("#entry_4").val());
request.set("track5", $("#entry_5").val());
request.set("title1", $("#title1").val());
request.set("description", $("#description").val());
request.set("genre", $("#genre").val());
request.set("tag1", $("#tag1").val());
request.set("tag2", $("#tag2").val());
request.set("tag3", $("#tag3").val());



alert(asdfs);
request.save(null, {
  success: function(request) {
    // The object was saved successfully.
  },
  error: function(request, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
  }
});

 }

