using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class Account
    {
        public Account()
        {
            DonHang = new HashSet<DonHang>();
            Infor = new HashSet<Infor>();
        }

        public int Id { get; set; }
        public string AccountUser { get; set; }
        public string AccountPassword { get; set; }
        public int? AccountRoleId { get; set; }

        public virtual AccountRole AccountRole { get; set; }
        public virtual ICollection<DonHang> DonHang { get; set; }
        public virtual ICollection<Infor> Infor { get; set; }
    }
}
