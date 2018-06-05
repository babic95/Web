using RentApp.Models.Entities;
using RepoDemo.Persistance.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Reposity
{
    interface IRatingRepository : IRepository<Rating, int>
    {
        IEnumerable<Rating> GetAll(int pageIndex, int pageSize);
    }
}
