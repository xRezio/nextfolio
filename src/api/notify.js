import axios from 'axios';
import { useEffect } from 'react';

function Notify() {
  useEffect(() => {
    const sendNotification = async () => {
      try {
        // Send the notification
        await axios.post('/api/notifier');

        console.log('Notification sent');
      } catch (error) {
        console.error('Failed to send notification', error);
      }
    };
    sendNotification();
  }, []);

  return null;
}

export default Notify;