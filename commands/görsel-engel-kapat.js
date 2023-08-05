const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"görsel-engel-kapat",
    description: '💙 Görsel engel sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:carpi:1136592790843838505> | Kanalları Yönet Yetkin Yok!", ephemeral: true})
   db.delete(`görselengel.${interaction.guild.id}`)
   interaction.reply("<:tik:1136344350830366740> | Görsel Engel başarıyla kapatıldı!")
}

};