let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
  let { name } = global.db.data.users[who]
  m.react('🎮')
let str = `                  *┃━━━━⬣𝐌𝐈𝐃𝐎-𝐁𝐎𝐓⬣━━━━┃*
*【..≼قــســم الترفيه≽..】*
                   *⋄━───═◞⬪🎮⬪◟═───━⋄*
*『 🎮 』 ⇇╎اكس واسم الغرفه』*
*『 🎮 』 ⇇╎للخروج من الالعاب كنسل』*
*『 🎮 』 ⇇╎تحدي』*
*『 🎮 』 ⇇╎حرب』*
*『 🎮 』 ⇇╎احزر』*
*『 🎮 』 ⇇╎حظ』*
*『 🎮 』 ⇇╎جميل』*
*『 🎮 』 ⇇╎صفع』*
*『 🎮 』 ⇇╎طبطبه』*
*『 🎮 』 ⇇╎ورع』*
*『 🎮 』 ⇇╎اهبل』*
*『 🎮 』 ⇇╎خروف』*
*『 🎮 』 ⇇╎انطق』*
*『 🎮 』 ⇇╎نسبه』*
*『 🎮 』 ⇇╎لو』*
*『 🎮 』 ⇇╎تويت』*
*『 🎮 』 ⇇╎تاج』*
*『 🎮 』 ⇇╎سؤال』*
*『 🎮 』 ⇇╎اسئلني』*
*『 🎮 』 ⇇╎كت』*
*『 🎮 』 ⇇╎شطرنج』*
*『 🎮 』 ⇇╎سلاحي』*
*『 🎮 』 ⇇╎علم』*
*『 🎮 』 ⇇╎نصايح』*
*『 🎮 』 ⇇╎عين』*
*『 🎮 』 ⇇╎عكس』*
*『 🎮 』 ⇇╎تويت』*
*『 🎮 』 ⇇╎مراتي』*
*『 🎮 』 ⇇╎فزوره』*
*『 🎮 』 ⇇╎حروف』*
*『 🎮 』 ⇇╎شخصيه』*
*『 🎮 』 ⇇╎احرجني』*
*『 🎮 』 ⇇╎خمن』*
*『 🎮 』 ⇇╎شاذ』*
*『 🎮 』 ⇇╎فكك』*
*『 🎮 』 ⇇╎المار』*
*『 🎮 』 ⇇╎دين』*
*『 🎮 』 ⇇╎ايمو』*
*『 🎮 』 ⇇╎كوره』*
*『 🎮 』 ⇇╎رياضيات』*
*『 🎮 』 ⇇╎تخمين』*
*『 🎮 』 ⇇╎العاب』*
*『 🎮 』 ⇇╎اموجي』*
*『 🎮 』 ⇇╎تحداني』*
*『 🎮 』 ⇇╎رياضه』*
*『 🎮 』 ⇇╎فعاليه』*
*『 🎮 』 ⇇╎ثقافه』*
*『 🎮 』 ⇇╎مانغا』*
                    *┃━━━━⬣𝐌𝐈𝐃𝐎-𝐁𝐎𝐓⬣━━━━┃*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الترفيه']

export default handler
