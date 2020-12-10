var http=require("http");
var url=require("url");
var qstring=require("querystring");
var fs=require("fs");
function process_request(req,resp){
  var p=url.parse(req.url);
  switch(p.pathname){
  case "/":
     fs.readFile("welcome.html",function(err,data){
	    if(err){
		   resp.end("error");
		}else{
		   resp.end(data);
		}
	 });
     break;
  }
}
var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server Running at port no:8181");