const conf = require('../config.json');

module.exports = client => {
  console.log(`[BOT] | (${client.user.username}) Bot ready!`);
  client.user.setActivity(conf.botStatus);

};
