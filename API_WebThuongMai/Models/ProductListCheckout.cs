using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class ProductListCheckout
    {
        public int ProductListCheckoutId { get; set; }
        public int? DonHangId { get; set; }
        public int? SanPhamId { get; set; }
        public int? SoLuong { get; set; }
        public string Size { get; set; }
        public int? Price { get; set; }
        public string StringPrice { get; set; }

        public virtual DonHang DonHang { get; set; }
        /*public virtual SanPham SanPham { get; set; }*/
    }
}
