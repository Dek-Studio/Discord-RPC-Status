var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "DETAILS",
assets : {
large_image : "LARGE IMAGE",
large_text : "LARGE TEXT"
},
buttons : [{label : "BUTTON 1" , url : "LINK 1"},{label : "BUTTON 2",url : "LINK 2"}]
}
})
})
client.login({ clientId : "CLIENT ID" }).catch(console.error);
