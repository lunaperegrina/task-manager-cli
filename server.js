import app from './app';

const port = 3003;

app.listen(
    port,
    () => {
        console.log(`Escutando na porta ${port}`);
        console.log(`CTRL + Click em http://localhost:${port}`);
    },
);