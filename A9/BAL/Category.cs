using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using A9.ViewModels;
using A9.Models;

namespace A9.BAL
{
    public class Category
    {
        public static List<A9.ViewModels.Category> GetCategories()
        {
            using (A9.Models.DB_ESHOPEntities entity = new DB_ESHOPEntities())
            {
              return  entity.categories.Where(category => category.is_active == true)
                                 .Select(category => new A9.ViewModels.Category() { id = category.id, name = category.name, description = category.description, image_url = category.image_url }).ToList();
            }
        }

        public static void PostCategory(A9.ViewModels.Category objCategory)
        {
            A9.Models.category category = new category();

            using (A9.Models.DB_ESHOPEntities entity = new DB_ESHOPEntities())
            {
                category.name = objCategory.name;
                category.description = objCategory.description;
                category.image_url = objCategory.image_url;
                category.is_active = true;

                entity.categories.Add(category);
                entity.SaveChanges();
            }
        }
    }
}