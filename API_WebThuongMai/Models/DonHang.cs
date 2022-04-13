using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class DonHang
    {
        public DonHang()
        {
            ProductListCheckout = new HashSet<ProductListCheckout>();
        }

        public int DonHangId { get; set; }
        public int? AccountId { get; set; }
        public DateTime? NgayGio { get; set; }
        public int? TinhTrangDonHangId { get; set; }
        public string PhuongThucThanhToan { get; set; }
        public string TinhTrangThanhToan { get; set; }
        public int? Total { get; set; }
        public int? DonHangInforId { get; set; }

        public virtual Account Account { get; set; }
        public virtual DonHangInfor DonHangInfor { get; set; }
        public virtual TinhTrangDonHang TinhTrangDonHang { get; set; }
        public virtual ICollection<ProductListCheckout> ProductListCheckout { get; set; }
    }
}
