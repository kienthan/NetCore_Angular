namespace API_WebThuongMai.Models
{
    public class SanPham_API
    {
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
    }
}
