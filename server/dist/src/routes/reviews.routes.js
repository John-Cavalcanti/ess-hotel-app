"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reviews_controller_1 = require("./../controllers/reviews.controller");
const express_1 = require("express");
const reviews = (0, express_1.Router)();
const reviewsController = new reviews_controller_1.ReviewsController();
// todas as rotas necessarias pras reviews
reviews.route('/')
    .get((req, res) => {
    // rota para enviar todas as reviews disponiveis, creio que nao sera necessario
    let allReviews = reviewsController.getAllReviews();
    return res.send({ allReviews });
});
reviews.route('/:id')
    .get((req, res) => {
    // rota que retorna todas reviews de uma atracao especifica selecionada por id
    let id = Number(req.params.id);
    let atractionReviews = reviewsController.getAtractionReview(id);
    if (!atractionReviews) {
        return res.status(404).send("No Reviews for this atractions or not found");
    }
    else {
        return res.send(atractionReviews);
    }
}).post((req, res) => {
    // rota para criar novas reviews
    let nome = req.body.nome;
    let country = req.body.country;
    let comment = req.body.comment;
    let data = req.body.date;
    reviewsController.addReview(nome, country, comment, data);
    let allReviews = reviewsController.getAllReviews();
    return res.json(allReviews);
});
exports.default = reviews;
