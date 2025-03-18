const app = require("./src/server");
const PORT = 3000;
const dbCon = require("./src/config/dbCon");

dbCon().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} :)`);
  });
})
.catch((error) => {
  console.log("Error de la conexion:", error);
})
