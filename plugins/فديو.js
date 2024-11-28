const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');
const youtubedl = require('youtube-dl-exec');
const axios = require('axios');

module.exports = {
  name: 'mediaDownloader',
  alias: ['اغنيه', 'أغنية', 'فيديو'],
  category: 'media',
  desc: 'تنزيل صوتيات وفيديوهات من YouTube.',
  async exec(msg, conn, args, prefix, command) {
    if (!args.length) {
      return msg.reply(`يرجى كتابة اسم الفيديو بعد الأمر.`);
    }

    const query = args.join(' ');
    msg.react('⏳');

    try {
      // البحث عن الفيديو
      const searchResults = await ytSearch(query);
      if (!searchResults || !searchResults.videos.length) {
        return msg.reply('لم يتم العثور على نتائج للفيديو المطلوب.');
      }

      const video = searchResults.videos[0];
      const title = video.title;
      const url = video.url;

      // إعداد الخيارات بناءً على نوع الأمر
      let isAudio = ['اغنيه', 'أغنية'].includes(command);
      let isVideo = command === 'فيديو';

      let fileType = isAudio ? 'audio' : 'video';
      let ext = isAudio ? 'mp3' : 'mp4';

      // إرسال التنزيل للمستخدم
      const sendMedia = async (streamUrl) => {
        const fileName = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.${ext}`;

        await conn.sendMessage(
          msg.from,
          {
            document: { url: streamUrl },
            mimetype: isAudio ? 'audio/mpeg' : 'video/mp4',
            fileName,
          },
          { quoted: msg }
        );
      };

      // محاولة تنزيل الملف
      try {
        const ytdlOptions = isAudio ? { filter: 'audioonly' } : {};
        const streamUrl = ytdl(url, ytdlOptions).on('error', console.error);

        // تحقق الحجم قبل الإرسال
        const info = await ytdl.getInfo(url);
        const size = info.formats.find((f) => f.container === ext)?.contentLength || 0;
        const sizeMB = size / (1024 * 1024);

        if (sizeMB > (isAudio ? 700 : 425)) {
          return msg.reply(
            `حجم الملف أكبر من الحد المسموح به (${isAudio ? '700MB' : '425MB'}).`
          );
        }

        await sendMedia(streamUrl);
      } catch (err) {
        console.error('خطأ أثناء التنزيل باستخدام ytdl:', err);
        return msg.reply('تعذر تنزيل الملف.');
      }
    } catch (error) {
      console.error('خطأ أثناء البحث أو المعالجة:', error);
      msg.reply('حدث خطأ أثناء محاولة تنفيذ الطلب.');
    }
  },
};
