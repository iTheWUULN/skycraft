const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "captcha-sistemi-sıfırla",
    description: "💙 Captcha sistemini sıfırlarsın!",
    type: 1,
    options: [],

    run: async (client, interaction) => {
        // 
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpi:1136592790843838505> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!")

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<:tik:1136344350830366740> | __**Captcha Sistemi**__ başarıyla sıfırlandı dostum!`)

            db.delete(`rcaptchaDate_${interaction.guild.id}`)
            db.delete(`rcaptcha_${interaction.guild.id}`)
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};