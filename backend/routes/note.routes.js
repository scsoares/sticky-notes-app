module.exports = app => {
    const notebook = require("../controllers/note.controller.js");

    var router = require("express").Router();

    router.post("/", notebook.create);

    router.get("/", notebook.findAll);

    router.get("/:query", notebook.findAllQuery);

    router.put("/:id", notebook.update);

    router.delete("/:id", notebook.delete);

    app.use("/api/notebook", router);

}



