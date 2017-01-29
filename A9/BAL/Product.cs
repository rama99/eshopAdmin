using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using A9.ViewModels;
using A9.Models;

namespace A9.BAL
{
    public class Product
    {

        public static void AddProduct(A9.ViewModels.Product objProduct)
        {
            A9.Models.product product = new product();

            using (A9.Models.DB_ESHOPEntities entity = new DB_ESHOPEntities())
            {
                product.name = objProduct.name;
                product.title = objProduct.title;
                product.description = objProduct.description;
                product.price = objProduct.price;
                product.imageurl = objProduct.imageurl;
                product.category_id = objProduct.category_id;

                entity.products.Add(product);
                entity.SaveChanges();
            }
        }

        public static List<A9.ViewModels.Product> GetProductsByCategoryID(int CategoryID)
        {
            using (A9.Models.DB_ESHOPEntities entity = new DB_ESHOPEntities())
            {
                return entity.products
                             .Where(product => product.category_id == CategoryID)
                             .Select(product => new A9.ViewModels.Product() { category_id = product.category_id, description = product.description, id = product.id, imageurl = product.imageurl, name = product.imageurl, price = product.price, title = product.title })
                             .ToList();
            }
        }

    }
}