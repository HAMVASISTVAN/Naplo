const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const path = require('path');
// Statikus fájlok kiszolgálása
app.use(express.static(__dirname));
// A kezdőoldal megjelenítése
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hianyzok.html'));
});
// Osztálynévsor
let tanulok = [
    'Kiss Péter',
    'Nagy Anna',
    'Szabó Béla',
    'Tóth Éva',
    'Varga János'
];
// első API végpont elkészítése
// GET - osztálynévsor lekérése
app.get('/api/tanulok', (req, res) => {
    res.json(tanulok);
});
app.post('/api/hianyzok', (req, res) => {
    // megkapja és az express.json() feldolgozza.
    console.log(req.body); // itt a terminálablakban kiíratjuk a kapott hiányzók tömbjét
    const darab = req.body.length;  // megszámoljuk a hiányzókat
    console.log(darab);            // kiíratjuk a terminálablakba
    res.json({ hianyzokSzama: darab,     // hiányzók darabszámát küldjük vissza
               hianyzokNevei: req.body   // JSON-ként küldi vissza a hiányzókat
             });      
    });   
app.listen(PORT, () => {
  console.log(`Szerver elindult a ${PORT} porton.`);
});
