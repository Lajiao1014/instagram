import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/login', (req: Request, res: Response) => {
    res.send('Express 已成功安裝！');
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express 已成功安裝！');
});

app.listen(port, () => {
    console.log('伺服器運行在 port 3000');
}); 