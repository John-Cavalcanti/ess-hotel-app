using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_cs.src.models
{
    public class Atracao(string? id, string? name, IImage[]? images, string? title, string[]? descriptions, string? location, string? day, string? hour, double? ticketPrice)
    {
        public string? Id { get; set; } = id;
        public string? Name { get; set; } = name;
        public IImage[]? Images { get; set; } = images;
        public string? Title { get; set; } = title;
        public string[]? Descriptions { get; set; } = descriptions;
        public string? Location { get; set; } = location;
        public string? Day { get; set; } = day;
        public string? Hour { get; set; } = hour;
        public double? TicketPrice { get; set; } = ticketPrice;

    }

    public class IImage(string url, string alt)
    {
        public string Url { get; set; } = url;
        public string Alt { get; set; } = alt;
    }
}