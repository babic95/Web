using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace RentApp.Persistance.Repository
{
    public class BranchOfficeRepository : Repository<BranchOffice, int>, IBranchOfficeRepository
    {
        public BranchOfficeRepository(DbContext context) : base(context)
        {
        }

        public IEnumerable<BranchOffice> GetAll(int idService)
        {
            return RADBContext.BranchOffices.Where<BranchOffice>(v => v.ServiceId == idService).OrderBy(v => v.Addres);
        }

        protected RADBContext RADBContext { get { return context as RADBContext; } }
    }
}