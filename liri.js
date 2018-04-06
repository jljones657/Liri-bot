require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var fs = require ('fs-extra');