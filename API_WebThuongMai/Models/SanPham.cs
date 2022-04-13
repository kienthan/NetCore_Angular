using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class SanPham
    {
       /* public SanPham()
        {
            ProductListCheckout = new HashSet<ProductListCheckout>();
        }*/

        public int SanPhamId { get; set; }
        public string SanPhamName { get; set; }
        public string SanPhamDescription { get; set; }
        public int? SanPhamPrice { get; set; }
        public int? SanPhamPriceSale { get; set; }
        public bool? SaleKey { get; set; }
        public string MainImg { get; set; }
        public string Img1 { get; set; }
        public string Img2 { get; set; }
        public string Img3 { get; set; }
        public string Img4 { get; set; }
        public int? TypeSanPhamId { get; set; }
        public int? SanPhamDetailId { get; set; }
        public int? SoLuong { get; set; }
        public string StringPrice { get; set; }

        /*public virtual SanPhamDetail SanPhamDetail { get; set; }
        public virtual TypeSanPham TypeSanPham { get; set; }
        public virtual ICollection<ProductListCheckout> ProductListCheckout { get; set; }*/
    }
}
