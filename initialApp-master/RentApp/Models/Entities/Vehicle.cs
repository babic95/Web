﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    [Table("Vehicles", Schema = "dbo")]
    public class Vehicle
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public string TypeVehicle { get; set; }
        public string Producer { get; set; }
        public string Model { get; set; }

        [Column("ProductionDate", TypeName = "datetime2")]
        public DateTime ProductionDate { get; set; }
        public List<string> Pictures { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public bool Available { get; set; }

    }
}