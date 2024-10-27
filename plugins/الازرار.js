import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let { money, joincount, diamond } = user;
    let { exp, limit, level, role } = user;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    await conn.sendMessage(m.chat, { react: { text: '🗒', key: m.key } });

    const images = [
      https://telegra.ph/file/8565f5591f7bb331c7ed6.mp4';
     
   
      
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });
await conn.sendMessage(m.chat, { text: '*🌹صلي علي النبي🌺*' }, { quoted: global.fcontact });
    await new Promise(resolve => setTimeout(resolve, 1000));
    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `> *🤍─[مرحبا بك ]────╮*
> *┤ *نورت ${taguser}*
> *┤ ✅ الاصدار: 1.2.0* 
> *┤────────────···*
> *✧────[معـلـومـات الـمسـتـخـدم✴️]────╮*
> *┤ 🌟 *الاسـم: ${name}*
> *┤ 📈 المستوي: ${level}*
> *┤ 🏆 *الـرتبة: ${role}*
> *┤ 💵 *نقودك: ${money}*
> *┤ 💎*الألـماس: ${diamond}* 
> *┤ 🌟 *الـبـرﯾـمـيـوم: ${user.premiumTime > 0 ? 'مـمـيز✅' : (isPrems ? 'مـمـيز ✅' : 'عـادي ❌') || ''}* 
> *┤────────────···* 
> *✧────[ الـوقـت والـتـاريـخ ]────╮*
> *┤ 📅التاريخ: ${date}*
> *┤ 🗓اليوم: ${week}*
> *┤ ⏱️وقت النشاط: ${uptime}*
> *┤────────────···*`
                    },
                    footer: {
                        text: 'ᵐᵒʰᵃᵐᵐᵉᵈ ᵃᵈᵉˡ '
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '✨اختار قسم✨,
                                    sections: [
                                        {
                                            title: '『』مرحبا بك في مهام بوت ميدو《',
                                            highlight_label: '𝕄𝕆ℍ𝔸𝕄𝕄𝔼𝔻 𝔸𝔻𝔼𝕃 ',
                                            rows: [
                                                {
                                                    header: 'ميدو',
                                                    title: '📡المطور📡',
                                                    description: '',
                                                    id: '.المطور'
                                                },
                                                {
                                                    header: '🛜قسم التنزيلات🛜',
                                                    title: '🔰التنزيلات🔰',
                                                    description: '',
                                                    id: '.4',
                                                },
                                                {

header: '🌹قسم الجروبات🌹',
                                                    title: '🧸🎀 الجروبات🎀🧸',
                                                    description: '',
                                                    id: '.5',
                                                },
                                                {
                                                    header: '🎮قسم الالعاب🎮',
                                                    title: '🎖الالعاب🎖',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '💰قسم الترفيه💰',
                                                    title: '🏅الترفيه🏅',
                                                    description: '',
                                                    id: '.6',
                                                },
                                                {
                                                    header: '📷قسم الصور📷',
                                                    title: '📸الصور📸',
                                                    description: '',
                                                    id: '.2',
                                                },
                                                {
                                                    header: '🛠قسم الادوات🛠',
                                                    title: '🔧الادوات🔧',
                                                    description: '',
                                                    id: '.7',
                                                },
                                                {
                                                    header: '📖قسم الالقاب📖',
                                                    title: '📚شرح الالقاب📚',
                                                    description: '',
                                                    id: '.3',
                                                },
                                                {
                                                    header: '🌟شروط ميدو🌟',
                                                    title: '✴️الشروط✴️',
                                                    description: '',
                                                    id: '.20',
                                                },
                                                {
                                                    header: '👑قسم الدعم👑',
                                                    title: '🎶الدعم🎶',
                                                    description: '',
                                                    id: '.الدعم',
                                                },
                                                {
                                                    header: '🗒جميع الاوامر🗒 ',
                                                    title: '📝كل اوامر البوت📝',
                                                    description: '',
                                                    id: '.10',
                                                },
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: '𝑀𝑂𝐻𝐴𝑀𝑀𝐸𝐷'
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"✨مطور البوت✨\",\"id\":\".المطور\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\" 👥قروب البوت👥 ",\"url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\",\"merchant_url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\" 📝الموقع 📝\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "💬قناة البوت💬",
                                    url: "https://whatsapp.com/channel/0029Vaich7vLdQeUgMMBPc13",
                                    merchant_url: "https://chat.whatsapp.com/GwpVRwW4o8z11bctqm9n7Q"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اوامر','الاوامر','menu','المهام'];

export default handler;
