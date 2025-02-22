const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Express 已成功安裝！');
});

app.listen(3000, () => {
    console.log('伺服器運行在 port 3000');
}); 