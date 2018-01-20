var movies=require('./movieData');
exports:getAllmovies=function(req,res){
  return res.json(movies);
}
