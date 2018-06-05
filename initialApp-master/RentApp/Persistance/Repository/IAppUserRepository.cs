using RentApp.Models.Entities;
using RepoDemo.Persistance.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Reposity
{
    public interface IAppUserRepository : IRepository<AppUser, int>
    {
        IEnumerable<AppUser> GetAll(int pageIndex, int pageSize);
    }
}
