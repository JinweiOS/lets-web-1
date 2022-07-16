const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('这是我后端的数据，是需要通过网络请求获取的，你现在看到了，就说明你已经成功通过网络调用了'); //write a response to the client
  res.end(); //end the response
}).listen(8080, () => console.log('服务器已经成功启动，请访问 http://localhost:8080')); //the server object listens on port 8080