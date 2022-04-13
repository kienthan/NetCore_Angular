using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class SanPhamDetail
    {
        /*public SanPhamDetail()
        {
            SanPham = new HashSet<SanPham>();
        }*/

        public int SanPhamDetailId { get; set; }
        public int? S { get; set; }
        public int? M { get; set; }
        public int? L { get; set; }
        public int? Xl { get; set; }
        public int? Xxl { get; set; }

        /*public virtual ICollection<SanPham> SanPham { get; set; }*/
    }
}
