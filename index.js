const express = require("express");
const moment = require("moment");
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger")
const path = require("path")
const router = express.Router();


const app = express();
app.use(logger);

//homepage and homepage css, to access css file, we have to specify the corresponding path in app.get
app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname+"/static/index.html"));

});
app.get("/css/index.css",(req,res)=>res.sendFile(path.join(__dirname+'/static/css/index.css')));

//about us page and css
app.get("/about_us.html",(req,res)=>res.sendFile(path.join(__dirname+"/static/about_us.html")));
app.get("/css/about_us.css",(req,res)=>res.sendFile(path.join(__dirname+"/static/css/about_us.css")));

//contact us page and css
app.get("/contact_us.html",(req,res)=>res.sendFile(path.join(__dirname+"/static/contact_us.html")));
app.get("/css/contact_us.css",(req,res)=>res.sendFile(path.join(__dirname+"/static/css/contact_us.css")));

//index html is redirected to homepage
app.get("/index.html",(req,res)=>res.redirect('/'));

//uploading the sidebar jpg which are shared by index.css, about_us.css,and contacu_us.css, so we only need to upload once
app.get("/css/images/sidebar.jpg",(req,res)=>res.sendFile(path.join(__dirname+'/static/css/images/sidebar.jpg')));


app.listen(PORT, ()=> console.log(`PORT started on ${PORT}`));