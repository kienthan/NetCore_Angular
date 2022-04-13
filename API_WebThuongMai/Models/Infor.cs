using System;
using System.Collections.Generic;

namespace API_WebThuongMai.Models
{
    public partial class Infor
    {
        public int InforId { get; set; }
        public int? AccountId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string DiaChi { get; set; }
        public string TinhThanh { get; set; }
        public string QuanHuyen { get; set; }
        public string PhuongXa { get; set; }
        public string BuyHistory { get; set; }

        public virtual Account Account { get; set; }
    }
}
