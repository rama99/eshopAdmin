using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using A9.BAL;
using A9.ViewModels;

namespace A9.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Category
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult All()
        {
            return View();
        }

        public ActionResult Add()
        {
            return View();
        }

        public ActionResult GetCategories()
        {
           List<A9.ViewModels.Category> categories = A9.BAL.Category.GetCategories();
            return Json(categories , JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddCategory(A9.ViewModels.Category category)
        {
            A9.BAL.Category.PostCategory(category);
            return Json(category, JsonRequestBehavior.AllowGet);
        }
    }
}