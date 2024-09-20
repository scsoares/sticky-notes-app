﻿const db = require("../models");
const Shop = db.shops;


exports.create = (req, res) => {

    const shop = {
        brand: req.body.brand,
        model: req.body.model
    };

    Shop.create(shop).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the shop." });
    });
};


exports.findAll = (req, res) => {

    Shop.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving shops." });
    });

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};


exports.delete = (req, res) => {

    const id = req.params.id;
    Shop.destroy({ where: { id: id } }).then(() => {
        console.log("Entry erased");
        res.send({ message: "Erased." });
    })

};


