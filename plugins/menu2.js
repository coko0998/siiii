import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *تم اصلاح امر .طباعة و اضافة اوامر جديده✨*
╮───────────────╭ـ 
│⚝ ⃟✨❯ *اهلا بك, ${taguser}*
︎╯───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
│⚝ ⃟👤❯ *المالك:*ميدو
│⚝ ⃟🤖❯ *رقم البوت:* wa.me/249128749239
│⚝ ⃟🗓️❯ *التاريخ:* ${date}
│⚝ ⃟⏲️❯ *الوقت:* ${uptime}
│⚝ ⃟👤❯ *المستخدم:* ${rtotalreg}
│⚝ ⃟👥❯ *عدد المستخدمين:* ${rtotal}
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥📲 *حسـابك* 📃❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
│⚝ ⃟🎖️❯ *المستوى:* ${level}
│⚝ ⃟🧰❯ *الخبرات:* ${exp}
│⚝ ⃟⚓❯ *رتـبة:* ${role}
│⚝ ⃟💎❯ *المـاس:* ${limit}
│⚝ ⃟👾❯ *العمـلات:* ${money}
│⚝ ⃟🪙❯ *الرموز:* ${joincount}
│⚝ ⃟🎟️❯ *المميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
│
*╯ ───═┅─┅─┅═─── ╰*
${readMore}
${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
╮───────────────╭ـ
│「❥❤️ *إسلامية* ✨👑❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟✨❯ ${usedPrefix}الله*
*│⚝ ⃟✨❯ ${usedPrefix}سوره*
*│⚝ ⃟✨❯ ${usedPrefix}السوره*
*│⚝ ⃟✨❯ ${usedPrefix}القران*
*│⚝ ⃟✨❯ ${usedPrefix}قران*
*│⚝ ⃟✨❯ ${usedPrefix}اذكار المساء*
*│⚝ ⃟✨❯ ${usedPrefix}اذكار الصباح*
*│⚝ ⃟✨❯ ${usedPrefix}ادعيه*
*│⚝ ⃟✨❯ ${usedPrefix}ايه*
╮───────────────╭ـ
│「❥🗣️ *الذكاء الاصطناعي* 📃❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟👥❯ ${usedPrefix}بوت*
*│⚝ ⃟👥❯ ${usedPrefix}ايلي*
*│⚝ ⃟👥❯ ${usedPrefix}دكس*
*│⚝ ⃟👥❯ ${usedPrefix}جيمي*
*│⚝ ⃟👥❯ ${usedPrefix}مساعد*
*│⚝ ⃟👥❯ ${usedPrefix}ارسم*
*│⚝ ⃟👥❯ ${usedPrefix}جيتا*
*│⚝ ⃟👥❯ ${usedPrefix}تحدث*
*│⚝ ⃟👥❯ ${usedPrefix}انطق*
*│⚝ ⃟👥❯ ${usedPrefix}ترجم*
*│⚝ ⃟👥❯ ${usedPrefix}طباعه*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *الـبـحـث* 📊❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟📊❯ ${usedPrefix}يوتيوب*
*│⚝ ⃟📊❯ ${usedPrefix}خلفيات*
*│⚝ ⃟📊❯ ${usedPrefix}بحث*
*│⚝ ⃟📊❯ ${usedPrefix}كتب*
*│⚝ ⃟📊❯ ${usedPrefix}كتابي*
*╯ ───═┅─┅─┅═─── ╰*
*${usedPrefix}سيتم اضافه بقية الاوامر قريبا*
╮───────────────╭ـ
│「❥⚙️ *التنـزيلات* ✨👑❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟📸❯ ${usedPrefix}صوره*
*│⚝ ⃟📸❯ ${usedPrefix}بينترست*
*│⚝ ⃟📸❯ ${usedPrefix}صور*
*│⚝ ⃟🎬❯ ${usedPrefix}حمل*
*│⚝ ⃟📽️❯ ${usedPrefix}تنزيل*
*│⚝ ⃟📽️❯ ${usedPrefix}2تنزيل*
*│⚝ ⃟🎶❯ ${usedPrefix}صوت*
*│⚝ ⃟🎶❯ ${usedPrefix}صوتي*
*│⚝ ⃟📽️❯ ${usedPrefix}فيديو*
*│⚝ ⃟📽️❯ ${usedPrefix}فديو*
*│⚝ ⃟📽️❯ ${usedPrefix}فيسبوك*
*│⚝ ⃟📽️❯ ${usedPrefix}انستجرام*
*│⚝ ⃟🎻❯ ${usedPrefix}اغنيه*
*│⚝ ⃟🎵❯ ${usedPrefix}تحميل*
*│⚝ ⃟🎵❯ ${usedPrefix}شغل*
*│⚝ ⃟⏳❯ ${usedPrefix}ميديافاير*
*│⚝ ⃟🎭❯ ${usedPrefix}تطبيق*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *التطبيقـات* 🎭🥏❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟🎭❯ ${usedPrefix}برنامج*
*│⚝ ⃟🎭❯ ${usedPrefix}تطبيق*
*│⚝ ⃟🎭❯ ${usedPrefix}لعبه*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *ملصقات* 🧸🖼️❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟🧸❯ ${usedPrefix}ملصق*
*│⚝ ⃟🧸❯ ${usedPrefix}ملصقات*
*│⚝ ⃟🧸❯ ${usedPrefix}ستيكر*
*│⚝ ⃟🧸❯ ${usedPrefix}اسم*
*│⚝ ⃟🧸❯ ${usedPrefix}دمج*
*│⚝ ⃟🧸❯ ${usedPrefix}لصوره*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *صور عشوائية* 🖼️❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟🐱❯ ${usedPrefix}قط*
*│⚝ ⃟🐶❯ ${usedPrefix}كلب*
*│⚝ ⃟🐈❯ ${usedPrefix}قطه*
*│⚝ ⃟⚽❯ ${usedPrefix}ميسي*
*│⚝ ⃟⚽❯ ${usedPrefix}كريستيان*
*│⚝ ⃟☕❯ ${usedPrefix}قهوه*
*│⚝ ⃟💕❯ ${usedPrefix}تطقيم*
*│⚝ ⃟💕❯ ${usedPrefix}كيوت*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *تغيرالصوت* 🎤❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│*قم بالرد على الرساله الصوتيه وكتب الامر*
*│⚝ ⃟🎤❯ ${usedPrefix}سنجاب*
*│⚝ ⃟🎤❯ ${usedPrefix}ناعم*
*│⚝ ⃟🎤❯ ${usedPrefix}بطيء*
*│⚝ ⃟🎤❯ ${usedPrefix}روبوت*
*│⚝ ⃟🎤❯ ${usedPrefix}رفيع*
*│⚝ ⃟🎤❯ ${usedPrefix}تخينن*
*│⚝ ⃟🎤❯ ${usedPrefix}سريع*
*│⚝ ⃟🎤❯ ${usedPrefix}صاخب*
*│⚝ ⃟🎤❯ ${usedPrefix}تخين*
*│⚝ ⃟🎤❯ ${usedPrefix}منفوخ*
*│⚝ ⃟🎤❯ ${usedPrefix}عميق*
*╯ ───═┅─┅─┅═─── ╰*
╮───────────────╭ـ
│「❥⚙️ *اوامر اضافية* ✨👑❥」
│───────────────╰ـ
*╮ ───═┅─┅─┅═─── ╭*
*│⚝ ⃟👑❯ ${usedPrefix}المطور*
*│⚝ ⃟👑❯ ${usedPrefix}الدعم*
*│⚝ ⃟👑❯ ${usedPrefix}بروفايل*
*│⚝ ⃟✨❯ ${usedPrefix}زخرفه*
*│⚝ ⃟✨❯ ${usedPrefix}زخرفة*
*│⚝ ⃟✨❯ ${usedPrefix}تويت*
*│⚝ ⃟✨❯ ${usedPrefix}انمي*
*│⚝ ⃟📓❯ ${usedPrefix}كود*
*│⚝ ⃟🌦️❯ ${usedPrefix}طقس*
*│⚝ ⃟🖼️❯ ${usedPrefix}لوجو*
*│⚝ ⃟🖼️❯ ${usedPrefix}تويت*
*│⚝ ⃟🎨❯ ${usedPrefix}تلوين*
*│⚝ ⃟🏞️❯ ${usedPrefix}تحسين*
*│⚝ ⃟👀❯ ${usedPrefix}تصفية*
*│⚝ ⃟🪄❯ ${usedPrefix}بيديف*
*│⚝ ⃟🪄❯ ${usedPrefix}توبيديف*
*│⚝ ⃟🖌️❯ ${usedPrefix}مسح*
*│⚝ ⃟📱❯ ${usedPrefix}وهمي*
*╯ ───═┅─┅─┅═─── ╰*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|اوامر|أوامر|الاوامر|مساعده|info|الأوامر|القائمة|القائمه|معلومات|تشغيل|الو|مرحبا|امر)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
