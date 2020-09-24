const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let kişicikabi = message.mentions.users.first() || message.author
 let avatarcım = new Discord.MessageEmbed()
  
  .setImage(kişicikabi.avatarURL())
  .setColor("BLUE")
  message.channel.send(avatarcım)
  
  };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'avatar',
   description: '',
   usage: ''
 };