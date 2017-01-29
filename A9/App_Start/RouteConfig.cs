using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace A9
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
              name: "Default1",
              url: "categories",
              defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
              name: "Default2",
              url: "categories/add",
              defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
              name: "Default3",
              url: "products",
              defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "Default4",
             url: "products/add",
             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
         );

            routes.MapRoute(
             name: "Default5",
             url: "about",
             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
         );

            routes.MapRoute(
                name: "Default6",
                url: "login",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

          
        }
    }
}
