using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class TypeSanPham
    {
       /* public TypeSanPham()
        {
            SanPham = new HashSet<SanPham>();
        }*/

        public int TypeSanPhamId { get; set; }
        public string TypeName { get; set; }

        /*public virtual ICollection<SanPham> SanPham { get; set; }*/
    }
}
