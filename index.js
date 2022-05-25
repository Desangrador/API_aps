const exs = require("express")
const routes = require('./Rutas')
const apk = exs();
apk.use(exs.json());

const puerto = 3500;
routes(apk);

apk.listen(puerto, () =>{
  console.log("puerto " + puerto + " activo")
})

apk.get('/', (req,res)=>{
  res.send("Ventana principal del API")
})
