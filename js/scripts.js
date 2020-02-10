$.ajax({
    url: "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3f4da57b890f31f1ef9b7fe64fb02e7d&gallery_id=72157713056458181&user_id=186906858@N06&format=json&nojsoncallback=?", 
    success: function(result){
  console.log(result.photos.photo);
  
}});