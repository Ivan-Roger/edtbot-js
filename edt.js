/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDI1MzIxNzU5MjQ0NDE5MDcy.DZF3bQ.LXzQ-dDz10h8j_1fwYVRuHwPgUI';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'edt now') {
    // Send "pong" to the same channel
    message.channel.send('Check EDT ou Google Calendar je suis HS');
  }
});

// Log our bot in
client.login(token);