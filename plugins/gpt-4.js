let axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.sessionAI = conn.sessionAI ? conn.sessionAI : {};

    if (!text) throw `🚩 ${usedPrefix + command} *enable/disable*`;

    if (text === "enable") {
        conn.sessionAI[m.sender] = { sessionChat: [] };
        m.reply("Success create sessions chat!");
    } else if (text === "disable") {
        delete conn.sessionAI[m.sender];
        m.reply("Success delete sessions chat!");
    }
};

handler.before = async (m, { conn }) => {
    conn.sessionAI = conn.sessionAI ? conn.sessionAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!conn.sessionAI[m.sender]) return;
    if ([".", "#", "!", "/", "\\"].some(prefix => m.text.startsWith(prefix))) return;

    if (conn.sessionAI[m.sender] && m.text) {    
        const previousMessages = conn.sessionAI[m.sender].sessionChat || [];
        
       // ubah prompt nya di sini
        const messages = [
            { role: "system", content: "kamu adalah BTCH, Seorang Asisten pribadi yang di buat oleh BOTCAHX yang siap membantu kapan pun!" },
            { role: "assistant", content: `Halo! Ada yang bisa BTCH bantu hari ini?` },
            ...previousMessages.map((msg, i) => ({ role: i % 2 === 0 ? 'user' : 'assistant', content: msg })),
            { role: "user", content: m.text }
        ];

        try {
            const chat = async function(messages) {
                return new Promise(async (resolve, reject) => {
                    try {
                        const { data } = await axios.post('https://widipe.com/post/gpt-prompt', { messages });
                        resolve(data);
                    } catch (error) {
                        reject(error);
                    }
                });
            };

            let res = await chat(messages);
            if (res && res.result) {
                await m.reply(res.result);
                conn.sessionAI[m.sender].sessionChat = [
                    ...conn.sessionAI[m.sender].sessionChat,
                    m.text,
                    res.result
                ];
            } else {
                m.reply("Kesalahan dalam mengambil data");
            }
        } catch (error) {
            throw error;
        }
    }
};

handler.command = ['بوت'];
handler.tags = ['بوت'];
handler.help = ['autoai *enable/disable*'];

module.exports = handler;
