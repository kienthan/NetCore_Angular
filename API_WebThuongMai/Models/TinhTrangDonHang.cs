using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class TinhTrangDonHang
    {
        public TinhTrangDonHang()
        {
            DonHang = new HashSet<DonHang>();
        }

        public int TinhTrangDonHangId { get; set; }
        public string TinhTrangDonHangName { get; set; }

        public virtual ICollection<DonHang> DonHang { get; set; }
    }
}
