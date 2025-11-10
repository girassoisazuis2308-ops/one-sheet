import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

// 🔹 Permite requisições do Owlbear Rodeo
app.use(
  cors({
    origin: ["https://www.owlbear.rodeo", "https://owlbear.rodeo"],
  })
);

// 🔹 Servir o conteúdo buildado em dist/
app.use(express.static(path.join(__dirname, "dist")));

// 🔹 Fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// 🔹 Porta padrão do Render
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor ativo na porta ${port}`));
