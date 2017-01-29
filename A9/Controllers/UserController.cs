using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using A9.ViewModels;
using A9.BAL;

namespace A9.Controllers
{
    public class UserController : Controller
    {
        // GET: Login
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(A9.ViewModels.User objUser)
        {
            A9.ViewModels.Login login = A9.BAL.User.GetUser(objUser);

            if(login == null)
            {               
                login = new ViewModels.Login() { authenticated = false, errorMessage = "Invalid UserName/Password", userName = objUser.userName };
            }
            else
            {
                Session["isValid"] = true;
            }
            
            return Json(login , JsonRequestBehavior.AllowGet);
        }

        public ActionResult LogOut()
        {
            A9.ViewModels.Login login = new ViewModels.Login() { authenticated = false, errorMessage = "", userName = "" };
            Session.Remove("isValid");
            return Json(login, JsonRequestBehavior.AllowGet);
        }

        public ActionResult IsValidUser()
        {
            A9.ViewModels.Login login =  new ViewModels.Login() { authenticated = Session["isValid"] == null ? false : true, errorMessage = "" };
            return Json(login, JsonRequestBehavior.AllowGet);
        }
    }
}