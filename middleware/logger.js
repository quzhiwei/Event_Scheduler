const moment = require("moment");
const path = require("path");


const logger = (req,res,next)=>{
	console.log(`${req.ip} has connected to ${req.protocol}://${req.get("host")} ${req.originalUrl} at    :${moment().format()}` );
	next();
}


module.exports = logger