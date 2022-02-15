const {resolve} = require('path');
const express = require('express');//importe la librairie express

const app = express();// Créer l'application express

app.use(express.static(resolve(__dirname, 'public')));

app.listen(8000, () => {
    console.log('Server a démarer dans http://localhost:8000')
});



