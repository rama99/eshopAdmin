using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using A9.ViewModels;
using A9.Models;

namespace A9.BAL
{
    public class User
    {
        public static A9.ViewModels.Login GetUser(A9.ViewModels.User objUser)
        {
            using(A9.Models.DB_ESHOPEntities entity = new DB_ESHOPEntities())
            {
               return entity.users.Where(user => user.userName == objUser.userName && user.password == objUser.password)
                            .Select(user => new A9.ViewModels.Login() { userName = user.userName , authenticated = true , errorMessage = "" })
                            .FirstOrDefault();
            }
        }
    }
}