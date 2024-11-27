import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment-timezone';
import { join } from 'path';

const time = moment.tz('Africa/Egypt').format('HH');
let wib = moment.tz('Africa/Egypt').format('HH:mm:ss');

let handler = async (m, { conn, usedPrefix, command }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let who = m.quoted
        ? m.quoted.sender
        : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
        ? conn.user.jid
        : m.sender;

    if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`;

    let vn = './media/Madara.mp3';
    let user = global.db.data.users[who];
    let { money, joincount } = global.db.data.users[m.sender];
    let { name, exp, diamond, level, role } = user;
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let rtotal = Object.entries(global.db.data.users).length || '0';
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    global.fcontact = {
        key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    m.react('📃');

    const str = `
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +249128749239*
*🐉✬⃝╿ باي بال:* paypal.me/Mido
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢

┏━━━━━━━━━━━━━━━━┓
┃ *< إعدادات البوت >*
┣➤ الرسائل في الانتظار
┣ ඬ⃟ ⚡ *.صلح*
┗━━━━━━━━━━━━━━━━┛

┏━💼 مـعلـومـات المستخدم:_ 💼━┓
┃ 🎩  *الاسـم:* ${name}
┃ 💎  *الألـماس:* ${diamond}
┃ 🏆  *الـرتبة:* ${role}
┃ 🎮  *الخبـرة:* ${exp}
┃ 🪙  *ميدو كوينز:* ${money}
┃ 🎟️  *الرموز:* ${joincount}
┗━━━━━━━━━━━┛

┏━━⏰ _الـتـاريـخ والـوقـت!_ ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* ${date}
┃ ⏲️  *الـوقـت الـحالـي:* ${wib}
┗━━━━━━━━━━━━━┛

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت:* ${botname}
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀
┃ 🕓  *وقـت الـتـشغيـل:* ${uptime}
┃ 📚  *إجـمالـي المـستخـدميـن:* ${rtotal}
┗━━━━━━━━━━━━━┛`;

    conn.reply(m.chat, str, m);
};

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    return [h, m, s].map((v) => (v < 10 ? '0' + v : v)).join(':');
}

export default handler;
