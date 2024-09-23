const db = require("../models");
const Notebook = db.notebook;


exports.create = (req, res) => {

    console.log(req.body);

    const note = {
        content: req.body.content,
        color: req.body.color
    };

    console.log('Note:', note);

    Notebook.create(note).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the notebook." });
    });
};


exports.findAll = (req, res) => {

    const c = req.params.color;

    Notebook.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving all notes." });
    });

};



exports.findAllQuery = (req, res) => {

    const q = req.params.query;
    Notebook.findAll({
        where: {
            content: { [Op.ilike]: '%' + q + '%' },
        },
    }).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving notes with this text." });
    });

};


exports.update = (req, res) => {

};


exports.delete = (req, res) => {

    const id = req.params.id;
    Notebook.destroy({ where: { id: id } }).then(() => {
        console.log("Entry erased");
        res.send({ message: "Erased." });
    })

};


