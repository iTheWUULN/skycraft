const { PermissionsBitField } = require("discord.js");
module.exports = {
    name:"kick",
    description: '💙 Kullanıcıyı Sunucudan Atarsın.',
    type:1,
    options: [
        {
            name:"user",
            description:"Atılacak Kullanıcıyı Seçin.",
            type:6,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content: "<:carpi:1136592790843838505> | Üyeleri At Yetkin Yok!", ephemeral: true})
    const user = interaction.options.getMember('user')
    if(user.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content:"<:carpi:1136592790843838505> | Bu Kullanıcının Kullanıcıları Atma Yetkisi Olduğu İçin Onu Yasaklayamadım.   ",ephemeral:true})
    user.kick();
    interaction.reply({content: "<:tik:1136344350830366740> | Başarıyla Üyeyi Attım!"})
}

};
