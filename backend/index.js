const express = require("express");

const app = express();

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Database already in sync.")
})

app.get("/", (req, res) => {

    return res.status(200).send({
        message: "Hola holita"
    })
});

require("./routes/shop.routes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})