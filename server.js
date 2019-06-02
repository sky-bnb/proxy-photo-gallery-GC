const express = require('express')
const app = express()
const port = 3000
const proxy = require('http-proxy-middleware')

app.use(express.static('public'))

app.use('/MoreHomes',
proxy({
    target: 'http://3.14.81.50/MoreHomes',
    pathRewrite: (path, req) => {
        return path.split('/').slice(2).join('/');
    }
})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))