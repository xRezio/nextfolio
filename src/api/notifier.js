import axios from 'axios';

const Notification = async (req, res) => {
  const { ip, location } = req.body;

  try {
    await axios.post(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
      embeds: [{
        title: 'Nouvelle visite sur le site',
        color: 3447003,
        fields: [
          { name: 'IP', value: ip, inline: true },
          { name: 'City', value: location.city, inline: true },
          { name: 'Region', value: location.region, inline: true },
          { name: 'Country', value: location.country, inline: true },
        ],
        timestamp: new Date(),
      }],
    });

    res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
};

export default Notification;