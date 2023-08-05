const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"ban",
    description: '💙 Kullanıcıyı Sunucudan Yasaklarsın.',
    type:1,
    options: [
        {
            name:"user",
            description:"Yasaklanıcak Kullanıcıyı Seçin.",
            type:6,
            required:true
        },
        {
            name:"reason",
            description:"Hangi Sebepten dolayı yasaklanıcak?",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "<:carpi:1136592790843838505> | Üyeleri Yasakla Yetkin Yok!", ephemeral: true})
    const user = interaction.options.getMember('user')
    const sebep = interaction.options.getString('reason')
    if(user.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content:"<:carpi:1136592790843838505> | Bu Kullanıcının Ban Yetkisi Olduğu İçin Onu Yasaklayamadım.   ",ephemeral:true})
    user.ban({reason: sebep});
    interaction.reply({content: "<:tik:1136344350830366740> | Başarıyla Üyeyi Yasakladım!"})
}

};
