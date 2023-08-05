const db = require("croxydb");

module.exports = {
  name: "kayıt-isim-sıfırla",
  description: "💙 Kayıt ismini sıfırlarsın!",
  options: [],
  
  run: async(client, interaction) => {

    const findDatabase = db.fetch(`kayıtlıuye_${interaction.user.id}`) ? true : false;

    if(findDatabase) {
      db.delete(`kayıtlıuye_${interaction.user.id}`)
      interaction.member.setNickname(`${interaction.user.username}`)

      return interaction.reply({ embeds: [{ description: "<:tik:1136344350830366740> | İsminiz başarıyla sıfırlandı." }] })
    } else {
      return interaction.reply({ embeds: [{ description: "<:carpi:1136592790843838505> | İsminiz kayıt sisteminde kayıtlı değildir." }] })
    }
  }
}