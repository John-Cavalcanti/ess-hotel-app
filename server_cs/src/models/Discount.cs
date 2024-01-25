using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_csharp.src.models
{
    public class Discount(string id, string titulo, string text, string price, string realPrice, string imageUrl)
    {
        public string Id { get; set; } = id;
        public string Titulo { get; set; } = titulo;
        public string Text { get; set; } = text;
        public string Price { get; set; } = price;
        public string RealPrice { get; set; } = realPrice;
        public string ImageUrl { get; set; } = imageUrl;

    }
}