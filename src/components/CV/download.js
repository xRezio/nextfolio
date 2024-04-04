import axios from 'axios';

export async function Downloaded() {
      try {
        await axios.post(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
          embeds: [{
            title: 'Cv téléchargé',
            color: 16711680,
            description: 'ton CV a été téléchargé par un visiteur',
            timestamp: new Date().toISOString()
          }]
        });
      } catch (error) {
        console.error('Failed to fetch portfolio', error);
      }
    };


export default Downloaded;