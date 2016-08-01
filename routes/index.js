/* GET home page. */
var weather=require('weather-js');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.weather=function(req, res){
  weather.find({search: 'London', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
  res.status(200).send(result);
});
  console.log('Recieved request from client');
  
}