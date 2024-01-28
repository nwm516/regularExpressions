import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/user(name)?', (req, res) => {
        res.type('text/plain');
        res.send("USER HAS LOGGED IN.");
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});

app.listen(app.get('port'), () => {
    console.log("--- SERVER IS NOW RUNNING ---");
});