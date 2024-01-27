using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_cs.src.models
{
    public class Review(string name, string country, string comment, Date rdate, bool like, string reviewId)
    {
        public string Name { get; set; } = name;
        public string Country { get; set; } = country;
        public string Comment { get; set; } = comment;
        public Date Rdate { get; set; } = rdate;
        public bool Like { get; set; } = like;
        public string ReviewId { get; set; } = reviewId;
    }

    public class Date(int day, string month, int year)
    {
        public int Day { get; set; } = day;
        public string Month { get; set; } = month;
        public int Year { get; set; } = year;
    }
}