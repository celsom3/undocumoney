const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const request = require('request');
const fs = require('fs');
const Hogan = require('hogan.js');
const ManagementClient = require('auth0').ManagementClient;
const AuthenticationClient = require('auth0').AuthenticationClient;

// const management = new ManagementClient({
//   token: '',
//   domain: '',
//   telemetry: false
// });
//
// const auth0 = new AuthenticationClient({
//   domain: ''
// });


if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
}

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const helper = require('sendgrid').mail;

const router = express.Router();

//router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/test', (req, res) => {
    console.log('Reached test');


});
