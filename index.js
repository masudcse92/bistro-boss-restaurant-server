const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middlware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Boss is sever Running')
})

app.listen(port, () => {
    console.log(`Bistro boss is server runnig`)
})