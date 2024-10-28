//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/efb1c82a1c11caa338b8e.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `*𝐌𝐈𝐃𝐎 *`.trim() },  
            header: {
                title: `*┃━━━━━⬣𝕄𝕆ℍ𝔸𝕄𝕄𝔼𝔻 𝔸𝔻𝔼𝕃⬣━━━━━┃*\n\n*◞❐نورت يا حب بوت استرو🤺🔥*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت ميدو*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص *\n\n*◞❐يمنع شتم البوت*\n\n*┃━━━━━⬣ᵐᵒʰᵃᵐᵐᵉᵈ ᵃᵈᵉˡ ⬣━━━━━┃*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '⌝اوامر البوت⌞',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: '【..≼اوامر الجروبات≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼ الجروبات≽..】',
  								    		  id: '.الجروب'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الاعضاء≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼ الاعضاء≽..】',
  								    		  id: '.الاعضاء'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الانــمـــي≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼ الانــمـــي≽..】',
  								    		  id: '.انيمي'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الترفيه≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼ الترفيه≽..】',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الايديت والصور≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼ الايديت والصور≽..】',
  								    		  id: '.الايديت'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر التحويلات≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼التحويلات≽..】',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الادوات ≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼الادوات≽..】',
  								    		  id: '.الاداوات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼اوامر الدين≽..】',
  										      title: '𝐌𝐈𝐃𝐎',
  									    	  description: '【..≼الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..اوامر الذكاء الاصطناعي ≽..】',
  										      title: '𝐌𝐈𝐃𝐎',		 
                                           	  description: '【..≼الذكاء الاصطناعي ≽..】',
  								    		  id: '.ذكاءاصطناعي'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'قروب البوت 🌐',
                                      url: 'https://chat.whatsapp.com/HEymhaMK6EfD4MRWj00juf',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;
