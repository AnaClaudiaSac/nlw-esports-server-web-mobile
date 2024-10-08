import express from "express";

const app = express();

//localhost:3333/ads

app.get("/ads", (_, response) => {
  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
    { id: 6, name: "Anúncio 6" },
  ]);
});

app.listen(3333, () => console.log("Server is running..."));
