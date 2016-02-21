var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

//sets up middleware for stormpath library
app.use(stormpath.init(app, 
	{
		apiKeyId: process.env.STORMPATH_API_KEY_ID,
		apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
		secretKey: process.env.STORMPATH_SECRET_KEY,
		application: process.env.STORMPATH_URL,
		website: true,
		//environment variables read from heroku config, once added to your heroku project
	}
));

app.get('/', function(req, res){
	//login page auto-generated by stormpath
	res.send("Welcome to the Stormpath Test App. Please <a href='/login'>login</a>");
});

app.listen(process.env.PORT || 3000);
