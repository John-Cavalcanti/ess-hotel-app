"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_review = void 0;
var User_review = /** @class */ (function () {
    function User_review(name, country, comment, date, like, reviewid) {
        this.nome = name;
        this.country = country;
        this.comment = comment;
        this.date_of_comment = date;
        this.Like = like;
        this.reviewID = reviewid;
    }
    return User_review;
}());
exports.User_review = User_review;
