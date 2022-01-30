var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Wielofukcyjny Bot",
assets : {
large_image : "logov3",
large_text : "Xeno"
},
buttons : [{label : "Pisz PV Po" , url : "https://discord.gg/c2gGMrSCNj"},{label : "Więcej Informacji",url : "https://discord.com/oauth2/authorize?client_id=841955168253771797&scope=bot&permissions=8589934591"}]
}
})
})
client.login({ clientId : "841955168253771797" }).catch(console.error);