//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace A9.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class product
    {
        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string imageurl { get; set; }
        public int category_id { get; set; }
        public bool isactive { get; set; }
    
        public virtual category category { get; set; }
    }
}
