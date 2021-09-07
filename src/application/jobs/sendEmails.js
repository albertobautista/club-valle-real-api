const CronJob = require('cron').CronJob;

const sendEmail  = require('../emailEvents/sendEmail');

const onTick = () => {
    console.log('Running renewal tuclick');
    sendEmail()
      .then(() => console.log('Finished renewal tuclick with no errors'))
      .catch(error =>  console.log('Finished renewal tuclick with errors: ', error));
  };
  

  const scheduleJob = () => {
    const jobConfig = {
      cronTime: ' * * * * * ', // corre a las 12:07
      onTick,
    };
  
    return new CronJob(jobConfig);
  };

  module.exports = scheduleJob();