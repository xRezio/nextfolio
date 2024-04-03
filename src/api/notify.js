import axios from 'axios';
import { useEffect } from 'react';

function Notify() {
  useEffect(() => {
    const sendNotification = async () => {
      try {
        // Get the visitor's IP address
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ip = ipResponse.data.ip;

        // Get the visitor's location
        const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`);
        const location = locationResponse.data;

        // Send the notification
        await axios.post('/api/notifier', { ip, location });

        console.log('Notification sent');
      } catch (error) {
        console.error('Failed to send notification', error);
      }
    };

    sendNotification();
  }, []);

  return null; // This component doesn't render anything
}

export default Notify;