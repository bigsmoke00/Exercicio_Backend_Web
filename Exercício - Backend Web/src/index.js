import Express from 'Express';

const app = Express();

app.get('/name', (req, res) =>
    res.send("<h3>Meu nome Completo</h3><p>Geraldo de Sousa Cruz Neto")
);

app.get('/users/:name', (req, res) =>
    res.send('Usuário:' + req.params.name)
);

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);