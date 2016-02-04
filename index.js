var satelize = require('satelize'),
    dns = require('dns'),
    firebase = require('firebase'),
    moment = require('moment'),
    firebaseRef = new Firebase("laksdklnaklsdn");

var cred = {
    'key': 'ansdklnalksnd',
    'domain': 'asdlknalksdnlkansd',
    'address': 'lskdnflksdnfkl'
};

//Whether or not to print debug messages
var debug = true;

var mailer = require('mailgun-mailer')(cred, debug);

//mailer.sendLink('Pranav', 'pranz.laks@gmail.com', 'Welcome to FusiformCAST!', 'path/to/template/', 'www.verification_link.com/00001234');
mailer.sendMail(
    'Raymon Schouwenaar',
    'schouwenaar1988@gmail.com',
    'Test NodeJS subject',
    'THis is the email template'
);

//name - string - name of recipient
//toAddress - string - recipient's email address
//subject - string - subject of email
//templateFile - string - path to HTML template of file

function checkInternet(cb) {
    dns.lookup('google.com',function(err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}




//setInterval(function() {
////// example usage:
//    var date = new Date();
//    var logMessage = {};
//    var checkInternetNow = checkInternet(function (isConnected) {
//        if (isConnected) {
//            // connected to the internet
//            logMessage.connection = 'Internet is connected!';
//            logMessage.time = moment(date).format('MMMM Do YYYY, HH:mm:ss');
//            satelize.satelize({ip:'83.85.2.190'}, function(err, payload) {
//                // if used with expressjs
//                // res.send(payload);
//                // res.json...
//                if(err) {
//                    console.log('Error: ', err);
//                } else {
//                    //console.log('payload: ', payload);
//                    logMessage.ip = payload.ip;
//                    logMessage.country = payload.country.en;
//                    logMessage.latLng = payload.latitude + ', ' + payload.longitude;
//                    logMessage.timezone = payload.timezone;
//
//                    console.log('logMessage: ', logMessage);
//                    var dateFirebaseChild = moment(date).format('YYYY-MM-DD');
//                    firebaseRef.child("logging").child(dateFirebaseChild).child(logMessage.country).push(logMessage);
//                }
//            });
//
//
//
//        } else {
//            // not connected to the internet
//            console.error('Internet is not connected!');
//        }
//    });
////
//}, 5000);