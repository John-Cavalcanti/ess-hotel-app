"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsController = void 0;
var ReviewsController = /** @class */ (function () {
    function ReviewsController() {
        this.today = {
            day: 8,
            month: "april",
            year: 2022
        };
        this.reviews = [
            {
                nome: "João",
                country: "Brazil",
                comment: 'Amei a atração! Super divertida e emocionante!',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            },
            {
                nome: "Ana",
                country: "Argentina",
                comment: 'A atração é legal, mas poderia ser melhor. Faltou um pouco de emoção.',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            },
            {
                nome: "Lucas",
                country: "Eua",
                comment: 'A atração é muito boa para famílias com crianças. Todo mundo se diverte.',
                date_of_comment: this.today,
                Like: false,
                reviewID: '11a24b90',
            },
            {
                nome: "Chang",
                country: "China",
                comment: 'Foi uma experiência única! Adorei cada minuto.',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            }
        ];
    }
    ReviewsController.prototype.addReview = function (name, country, comment, date, like, id) {
        var newReview = {
            nome: name,
            country: country,
            comment: comment,
            date_of_comment: date,
            Like: like,
            reviewID: id,
        };
        this.reviews.push(newReview);
    };
    ReviewsController.prototype.getAtractionReview = function (idReview) {
        return idReview;
    };
    ReviewsController.prototype.getAllReviews = function () {
        return this.reviews;
    };
    return ReviewsController;
}());
exports.ReviewsController = ReviewsController;
