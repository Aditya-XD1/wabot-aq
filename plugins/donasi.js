let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Dana • Gopay 」
│ • Dana [083113079181]
│ • Telkomsel [081313293689]
│ • Axis [083113079181]
│ • 𝙂𝙞𝙩𝙝𝙪𝙗 :  x x x x x x x x
│ • x x x x x x x x x x x x
│ •  x x x x x x x x x x x
│ • INFO DONASI  
│ • [wa.me/6281313293689]  
╰──── [ 𝘼𝘿𝙄𝙏 𝙈𝘼𝙃𝘼 𝙆𝙀𝙍𝙀𝙉 ]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
