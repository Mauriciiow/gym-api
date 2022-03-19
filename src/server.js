import app from './app.js'

const port = 3000

app.listen(port, ()=>{
    console.log(`Server ligado na porta ${port} http://localhost:${port}/`);
 
})
