let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Dana 」
│ • Dana [083113079181]
│ • Telkomsel [081313293689]
│ • Axis [083113079181]
│ • Telkomsel
│ • Telkomsel
│ • Telkomsel
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
