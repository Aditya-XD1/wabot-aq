let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Dana • Gopay 」
│ • Dana [083113079181]
│ • Telkomsel [081313293689]
│ • Axis [083113079181]
│ • 𝙂𝙞𝙩𝙝𝙪𝙗 :  x x x x x x x x
│ • x x x x x x x x x x x x
│ •  x x x x x x x x x x x
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
