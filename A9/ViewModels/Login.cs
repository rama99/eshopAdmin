using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace A9.ViewModels
{
    public class Login
    {       
        public string userName { get; set; }
        public string errorMessage { get; set; }
        public Boolean authenticated { get; set; }
    }
}