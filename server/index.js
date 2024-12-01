const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: process.env.URL
}));

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const prompt = req.body.message;

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Se requiere un mensaje válido.' });
    }

    // Generar contenido con Gemini Pro
    const response = await fetch('http://localhost:3001/api/v1/workspace/uft-chat/chat', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': `${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "message": `${prompt}`,
        "mode": "chat"
      })
    });

    const parsedData = await response.json();
    const text = parsedData.textResponse || parsedData.message || ""; // Access from specific key or default if not found

    res.json({ message: text });
  } catch (error) {
    console.error('Error al generar contenido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});