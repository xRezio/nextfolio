import axios from 'axios';
import { useEffect } from 'react';

function Notify() {
  useEffect(() => {
    const sendNotification = async () => {
      try {
        await axios.post(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
          embeds: [{
            title: 'Nouvelle visite sur votre site',
            color: 3447003,
            description: 'Une nouvelle visite a été enregistrée sur votre site.',
            timestamp: new Date().toISOString()
          }]
        });
      } catch (error) {
        console.error('Failed to fetch portfolio', error);
      }
    };

    sendNotification();
  }, []);

  return null;
}

export default Notify;