using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_csharp.src.models
{
    public class Review(string? nome, string? country, string? comment, IDate? date, bool like, string? reviewID)
    {
        public string? Nome { get; set; } = nome;
        public string? Country { get; set; } = country;
        public string? Comment { get; set; } = comment;
        public IDate? Date { get; set; } = date;
        public bool Like { get; set; } = like;
        public string? ReviewID { get; set; } = reviewID;
    }

    public interface IDate
    {
        public int Day { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
    }
}