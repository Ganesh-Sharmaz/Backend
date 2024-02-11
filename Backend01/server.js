import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// })

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'this is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'this is a third joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at https://localhost:${port}`);
})

