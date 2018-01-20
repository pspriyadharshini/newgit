console.log("notes");
$.ajax ({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
  //  console.log("data from success",response);
  var data=constructDOM(data);
  constructDOM(data);
  },
  error:function(err) {
    console.log("error in GET method",err);
  }
});
function constructDOM(data){
  var flags=[] ,categoryObject=[];
  var n=response.length;
  for(var i=0;i<n;i++){
    var movie=response[i];
    var index=flags.indexOf(movie.language);
    if(index>=0){
      categoryObject[index].movies.push(movie);
      continue;
    }
    else{
      flags.push(movie.language);
    }
    var objectSchema = {
      "category":movie.language,
      "movies":[]
    }
   objectSchema.movies.push(movie);
   categoryObject.push(objectSchema);
   console.log("category",categoryObject);
 }
  console.log(flags);
    return categoryObject;
  function constructDOM(data){
    var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
    console.log("constructDOM data",objectSchema);
    var categoryTitle=$('h3 class="categoryName">'+objectSchema.category+'</h3>');
    categoryContent.push(categoryTitle);
  }
    $('section content').html(categoryTitle);

}


    console.log("formobject response");
}
