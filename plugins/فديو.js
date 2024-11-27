import yts from 'yt-search'; 
const handler = async (m, { conn, text, command }) => {
    try {
        if (!text) { 
            return conn.reply(m.chat, `*💥 يرجى إدخال عنوان أو رابط الفيديو على YouTube.*\n\n*𔔢 مثال: فيديو جوني - Honeypie Animation*`, m);
        }
        
        let isVideo = /فيديو/.test(command); // يتحقق إذا كان الأمر فيديو
        let search = await yts(text);
        let urls = search.all[0].url;
        let body = `📽 *تفاصيل البحث:*\n\n> 🎬 *العنوان:* ${search.all[0].title}\n> 👀 *عدد المشاهدات:* ${search.all[0].views}\n> ⏱ *المدة الزمنية:* ${search.all[0].timestamp}\n> 🗓 *تم الرفع منذ:* ${search.all[0].ago}\n> 🔗 *الرابط:* ${urls}\n\n📽 *جاري إرسال ${isVideo ? 'الفيديو' : 'الصوت'}... الرجاء الانتظار.*`;

        let sentMessage = await conn.sendMessage(m.chat, { 
            image: { url: search.all[0].thumbnail }, 
            caption: body,
            quoted: m 
        });
        
        let res = await dl_vid(urls); // تنزيل الفيديو/الصوت
        let type = isVideo ? 'video' : 'audio';
        let video = res.data.mp4;
        let audio = res.data.mp3;

        await conn.sendMessage(m.chat, { 
            [type]: { url: isVideo ? video : audio }, 
            gifPlayback: false, 
            mimetype: isVideo ? "video/mp4" : "audio/mpeg" 
        }, { quoted: m });

    } catch(error) {
        conn.reply(m.chat, `حدث خطأ أثناء التحميل.\nالتفاصيل: ${error}.`, m);
    }
};

handler.command = ['فيديو', 'اغنيه', 'اغنية']; // الأوامر التي يتم تفعيلها
handler.help = ['فيديو', 'اغنيه', 'اغنية'];
handler.tags = ['descargas'];
handler.group = true;
export default handler;

// وظيفة تنزيل الفيديو/الصوت
async function dl_vid(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url,
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
