"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsController = void 0;
class ReviewsController {
    constructor() {
        this.comentario = 'alo';
        this.today = {
            day: 8,
            month: "april",
            year: 2022
        };
        this.reviews = [
            {
                nome: "João",
                country: "Brazil",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Ana",
                country: "Argentina",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Lucas",
                country: "Eua",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Chang",
                country: "China",
                comment: this.comentario,
                date_of_comment: this.today,
            }
        ];
    }
    addReview(name, country, comment, date) {
        const newReview = {
            nome: name,
            country: country,
            comment: comment,
            date_of_comment: date
        };
        this.reviews.push(newReview);
    }
    getAtractionReview(idReview) {
        return idReview;
    }
    getAllReviews() {
        return this.reviews;
    }
}
exports.ReviewsController = ReviewsController;
