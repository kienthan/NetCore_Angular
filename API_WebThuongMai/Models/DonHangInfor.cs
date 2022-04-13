using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class DonHangInfor
    {
        public DonHangInfor()
        {
            DonHang = new HashSet<DonHang>();
        }

        public int DonHangInforId { get; set; }
        public string HoTen { get; set; }
        public string Email { get; set; }
        public string Sdt { get; set; }
        public string DiaChi { get; set; }
        public string TinhThanh { get; set; }
        public string QuanHuyen { get; set; }
        public string PhuongXa { get; set; }

        public virtual ICollection<DonHang> DonHang { get; set; }
    }
}
