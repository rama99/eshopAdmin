using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using A9.BAL;

namespace A9.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Add(A9.ViewModels.Product objProduct)
        {
            return View();
        }

        public ActionResult All()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddProduct(A9.ViewModels.Product objProduct)
        {
            A9.BAL.Product.AddProduct(objProduct);
            return Json(objProduct, JsonRequestBehavior.AllowGet);
        }
        
     
        public ActionResult  GetProductsByCategoryID(int id)
        {
            List<A9.ViewModels.Product> products = A9.BAL.Product.GetProductsByCategoryID(id);
            return Json(products, JsonRequestBehavior.AllowGet);
        }
    }
}