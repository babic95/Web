using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    [Table("AppUsers", Schema = "dbo")]
    public class AppUser
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        [Column("BirthDate", TypeName ="datetime2")]
        public DateTime? BirthDate { get; set; }
        public string Picture { get; set; }
        public bool CenMakeRezervation { get; set; }
        public bool CanAddSercvice { get; set; }
    }
}