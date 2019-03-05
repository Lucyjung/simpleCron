var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'SDC-Safety Notification',
  description: 'This is cron job for send notification to SDC-Safety linebot',
  script: 'D:\\Project\\EN_ACG_CT_KB\\4_MK\\ACG_CT_KB_MakingFile\\Code\\cron.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();