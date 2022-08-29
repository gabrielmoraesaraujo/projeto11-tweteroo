import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.send('Meu primeiro sevidor uhuuuuu!');

})


app.listen(5000);
