/* GET home page. */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.weather=function(req, res){
  console.log('Recieved request from client');
}