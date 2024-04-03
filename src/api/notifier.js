import axios from 'axios';

const Notification = async (req, res) => {
  try {
    await axios.post(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
      content: 'Nouvelle visite sur votre site',
    });

    res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
};

export default Notification;