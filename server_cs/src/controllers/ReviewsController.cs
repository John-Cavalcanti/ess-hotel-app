using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server_cs.src.models;

namespace server_cs.src.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly Date Today = new(8,"april",2022);
        private readonly Review[] Reviews;

        public ReviewsController()
        {
            Reviews = [
                new(
                    name: "João",
                    country: "Brazil",
                    comment: "Amei a atração! Super divertida e emocionante!",
                    rdate: Today,
                    like: true,
                    reviewId: "11a24b90"
                ),
                new(
                    name: "Ana",
                    country: "Argentina",
                    comment: "A atração é legal, mas poderia ser melhor. Faltou um pouco de emoção.",
                    rdate: Today,
                    like: true,
                    reviewId: "11a24b90"
                ),
                new(
                    name: "Lucas",
                    country: "Eua",
                    comment: "A atração é muito boa para famílias com crianças. Todo mundo se diverte.",
                    rdate: Today,
                    like: false,
                    reviewId: "11a24b90"
                ),
                new(
                    name: "Chang",
                    country: "China",
                    comment: "Foi uma experiência única! Adorei cada minuto.",
                    rdate: Today,
                    like: true,
                    reviewId: "11a24b90"
                )
            ];
        }

        // todo
        public void AddReview() {}

        public Review[] GetAllReviews()
        {
            return Reviews;
        }

        // todo
        // necessario criar mais reviews para cada atracao e retornar neste metodo apenas a selecionada por atracao especifica
        public Review[] GetAtractionReviewById(string id)
        {
            return Reviews;
        }

    }
}