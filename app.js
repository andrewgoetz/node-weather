// to run use node app.js [zipcode]
// example: node app.js 90210

var functions = require("./scripts.js");
var zipcode = functions.zipcode;
functions.getZipCoordinates(zipcode);