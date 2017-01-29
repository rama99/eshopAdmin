using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace A9.ViewModels
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public string title { get; set; }
        public string imageurl { get; set; }
        public string description { get; set; }
        public int category_id { get; set; }
    }
}