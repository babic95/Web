﻿using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Repository
{
    public interface IRatingRepository : IRepository<Rating, int>
    {
        IEnumerable<Rating> GetAll(int pageIndex, int pageSize);

        Rating GetRatingUser(int userId, int serviceId);
        IEnumerable<Rating> GetRating(int serviceId);
    }
}
