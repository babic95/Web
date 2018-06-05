using RentApp.Models.Entities;
using RepoDemo.Persistance.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Reposity
{
    public interface IItemRepository : IRepository<Item, int>
    {
        IEnumerable<Item> GetAll(int pageIndex, int pageSize);
    }
}
