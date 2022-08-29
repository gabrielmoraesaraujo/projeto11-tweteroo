import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];




app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body
    
    if(!username || !avatar){
        res.status(400).send('Insira um nome de usuario e avatar');
        return;
    };

    usuarios.push({username, avatar});
    res.status(200).send('Ok');

})

app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body

    if(!username || !tweet){
        res.status(400).send('Insira um nome de usuario e tweet');
        return;
    };

    tweets.push({username, tweet});
    res.status(200).send("ok");

})

app.get('/tweets', (req, res) => {

    const uniao = [];
   
    

    for(let i=0; i<tweets.length; i++){

        for(let j=0; j<usuarios.length; j++){

            if(usuarios[j].username === tweets[i].username ){
                uniao.push({username:usuarios[j].username, avatar:usuarios[j].avatar, tweet:tweets[i].tweet})
            }
        }
    };

    const uniaoreverse = uniao.reverse();

    res.status(200).send(uniaoreverse.slice(0,10));
})


app.listen(5000, () => {console.log('servidor on')} );
