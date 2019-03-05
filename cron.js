var schedule = require('node-schedule');
var request = require('request');

var j = schedule.scheduleJob('30 17 * * *', function(){
    let d = new Date();
    let day = d.getDay();
    console.log('Send notification')
    if (day != 0 && day != 6){
      request({
        method: 'POST',
        uri: 'https://lineapi-firebase.herokuapp.com/notification',
        proxy: 'http://10.164.225.2:8080'
      },
      function (error, response, body) {
        if (error) {
          return console.error('send failed:', error);
        }
        console.log('Send notification successful!  Server responded with:', body);
      })
    }
    
});
console.log('Start Cron job')

