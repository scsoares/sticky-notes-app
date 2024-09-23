const express = require("express");

const app = express();

const cors = require("cors");

//parse requests of content-type - application/json
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8100"
}

app.use(cors(corsOptions));

//parse requests of content-type
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
    console.log("Database already in sync.")
})

app.get("/", (req, res) => {

    return res.status(200).send({
        message: "Hola holita"
    })
});

require("./routes/note.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})