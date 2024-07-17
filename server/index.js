const express = require('express');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); 

// Crear cliente de Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const prompt = req.body.message; // Obtener el prompt del cuerpo de la solicitud

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Se requiere un mensaje válido.' });
    }

    // Generar contenido con Gemini Pro
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

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
