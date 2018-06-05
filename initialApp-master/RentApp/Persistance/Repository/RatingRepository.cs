﻿using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace RentApp.Persistance.Repository
{
    public class RatingRepository : Repository<Rating, int>, IRatingRepository
    {
        public RatingRepository(DbContext context) : base(context)
        {
        }

        public IEnumerable<Rating> GetAll(int pageIndex, int pageSize)
        {
            return RADBContext.Ratings.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }

        protected RADBContext RADBContext { get { return context as RADBContext; } }
    }
}