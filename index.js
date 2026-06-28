import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});
app.get("/api/tarea", (req, res)=> {
console.log('Me llego solicitud nueva');
res.json ( 
    { 
    mensaje:"conexion creada",
    saludo:"Bienvenido a nuestro backend",
}
)
});