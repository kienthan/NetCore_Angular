import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://localhost:44305/api/"
  constructor(private httpCLient: HttpClient) { }

  // getProducts(): Observable<any> {
  //   return this.httpCLient.get<any>(this.url + 'SanPhams');
  // }

  Product: any = [
    {
      "sanPhamId": 41,
      "sanPhamName": "Túi Mini Nebulus",
      "sanPhamDescription": "Túi NEBULUS chính hãng từ bộ sưu tập hoàn toàn mới. Túi lớn, bền - thời trang và tiện dụng. Với 2 ngăn chính lớn và khóa kéo zip. Với dây đeo có thể điều chỉnh độ dài và đóng kẹp. Rất nhiều không gian lưu trữ cho tất cả các loại! Chất liệu không thấm nước, có nhiều chi tiết phức tạp khiến chiếc túi bum này trở thành phụ kiện lý tưởng cho mọi dịp.",
      "sanPhamPrice": 300000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/bag1.jpg",
      "img1": "./assets/img/1.jpg",
      "img2": "./assets/img/2.jpg",
      "img3": "./assets/img/3.jpg",
      "img4": "./assets/img/4.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 31,
      "soLuong": 4,
      "stringPrice": "300.000đ"
    },
    {
      "sanPhamId": 43,
      "sanPhamName": "Túi Mini Crossbag",
      "sanPhamDescription": "Chất liệu: Vải Canvas cao cấp chống trượt nước\r\nKích thước: 20 x 15 x 5 cm\r\nNgăn chống sốc đựng vừa tất cả các dòng điện thoại\r\nQuai đeo có thể tháo rời",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/a1.jpg",
      "img1": "./assets/img/a2.jpg",
      "img2": "./assets/img/a3.jpg",
      "img3": "./assets/img/a4.jpg",
      "img4": "./assets/img/a5.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 33,
      "soLuong": 4,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 45,
      "sanPhamName": "Balo chống nước Kyt Airspace",
      "sanPhamDescription": "Chất liệu bên ngoài chống nước tuyệt đối\r\nTất cả khóa gài đều dễ dàng tăng giảm độ dài\r\nCó khóa gài ngang ngực\r\nĐệm balo thoáng khí giúp đeo lâu thoải mái\r\nCó các túi hộp khóa kéo zip đa năng\r\nKích thước xấp xỉ: 28cm x 16cm x 53cm",
      "sanPhamPrice": 950000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/a6.jpg",
      "img1": "./assets/img/a8.jpg",
      "img2": "./assets/img/a9.jpg",
      "img3": "./assets/img/a10.jpg",
      "img4": "./assets/img/a11.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 34,
      "soLuong": 1,
      "stringPrice": "950.000đ"
    },
    {
      "sanPhamId": 46,
      "sanPhamName": "Balo Adidas Ops 30L Rusksack",
      "sanPhamDescription": "Chất liệu Nylon E Polyester Outer: Polyester chống nước s\r\nKích thước: 58 x 30 x 18cm (30 lít)\r\nLaptop : 15.6 inch \r\nCó ngăn giày riêng\r\n",
      "sanPhamPrice": 650000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/b1.jpg",
      "img1": "./assets/img/b5.jpg",
      "img2": "./assets/img/b2.jpg",
      "img3": "./assets/img/b3.jpg",
      "img4": "./assets/img/b4.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 35,
      "soLuong": 4,
      "stringPrice": "650.000đ"
    },
    {
      "sanPhamId": 47,
      "sanPhamName": "Mũ Cappie",
      "sanPhamDescription": "Chất liệu: Cotton chất lượng cao\r\nKích cỡ: Freesize, điều chỉnh bằng khóa kim loại sau mũ",
      "sanPhamPrice": 95000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/b6.jpg",
      "img1": "./assets/img/b7.jpg",
      "img2": "./assets/img/b8.jpg",
      "img3": "./assets/img/b9.jpg",
      "img4": "./assets/img/b10.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 36,
      "soLuong": 2,
      "stringPrice": "95.000đ"
    },
    {
      "sanPhamId": 48,
      "sanPhamName": "Mũ Bucket MLB",
      "sanPhamDescription": "Chất liệu: 100% Nylon. Sau: 100% Polyester. Lớp lót: 65% Polyester, 35% Cotton \r\nKiểu dáng nón bucket hiện đại\r\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\r\nChi tiết logo bóng chày thêu nổi bật phía trước\r\nHọa tiết monogram nổi bật\r\nChất vải mềm mịn, thấm hút tốt",
      "sanPhamPrice": 1290000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/c1.jpg",
      "img1": "./assets/img/c2.jpg",
      "img2": "./assets/img/c3.jpg",
      "img3": "./assets/img/c5.jpg",
      "img4": "./assets/img/c4.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 37,
      "soLuong": 3,
      "stringPrice": "1.290.000đ"
    },
    {
      "sanPhamId": 52,
      "sanPhamName": "Kính Gucci",
      "sanPhamDescription": "Gọng kính kim loại tổng hợp chống gỉ sét. An toàn tuyệt đối.\r\nĐộ bền màu và tính đàn hồi cao. Ốc vặn được gia công kỹ lưỡng và cẩn thận.\r\nĐệm mũi êm ái, tạo cảm giác dễ chịu khi đeo, cân đối giữa hai bên thái dương, mắt và sóng mũi.\r\nCàng kính chắc chắn, không gây ra vết hằn khó chịu trên da.\r\nDễ phối đồ với nhiều phong cách khác nhau",
      "sanPhamPrice": 850000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/d5.jpg",
      "img1": "./assets/img/d1.jpg",
      "img2": "./assets/img/d2.jpg",
      "img3": "./assets/img/d3.jpg",
      "img4": "./assets/img/d4.jpg",
      "typeSanPhamId": 4,
      "sanPhamDetailId": 41,
      "soLuong": 2,
      "stringPrice": "850.000đ"
    },
    {
      "sanPhamId": 55,
      "sanPhamName": "Kính Ray-Ban",
      "sanPhamDescription": "Chất liệu mắt: Thủy tinh\r\nChất liệu gọng: Metal\r\nMàu mắt: Xanh Green\r\nMàu Gọng: Vàng\r\nLọc UV400: Có",
      "sanPhamPrice": 900000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/e1.jpg",
      "img1": "./assets/img/e2.jpg",
      "img2": "./assets/img/e3.jpg",
      "img3": "./assets/img/e4.jpg",
      "img4": "./assets/img/e5.jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 44,
      "soLuong": 2,
      "stringPrice": "900.000đ"
    },
    {
      "sanPhamId": 56,
      "sanPhamName": "Levent Velvet",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/r1.jpg",
      "img1": "./assets/img/r2.jpg",
      "img2": "./assets/img/r3.jpg",
      "img3": "./assets/img/r4.jpg",
      "img4": "./assets/img/r5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 45,
      "soLuong": 27,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 57,
      "sanPhamName": "Levent Dark Grey",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/r6.jpg",
      "img1": "./assets/img/r7.jpg",
      "img2": "./assets/img/r8.jpg",
      "img3": "./assets/img/r9.jpg",
      "img4": "./assets/img/r10.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 46,
      "soLuong": 36,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 58,
      "sanPhamName": "Levent Black",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/t1.jpg",
      "img1": "./assets/img/t2.jpg",
      "img2": "./assets/img/t3.jpg",
      "img3": "./assets/img/t4.jpg",
      "img4": "./assets/img/t5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 47,
      "soLuong": 30,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 59,
      "sanPhamName": "Levent White",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/t6.jpg",
      "img1": "./assets/img/t7.jpg",
      "img2": "./assets/img/t8.jpg",
      "img3": "./assets/img/t9.jpg",
      "img4": "./assets/img/t10.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 48,
      "soLuong": 0,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 60,
      "sanPhamName": "Levent Bear",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/z1.jpg",
      "img1": "./assets/img/z2.jpg",
      "img2": "./assets/img/z3.jpg",
      "img3": "./assets/img/z4.jpg",
      "img4": "./assets/img/z5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 49,
      "soLuong": 26,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 61,
      "sanPhamName": "Levent Tiger",
      "sanPhamDescription": "Chất liệu: 100% Cotton",
      "sanPhamPrice": 370000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/z6.jpg",
      "img1": "./assets/img/z7.jpg",
      "img2": "./assets/img/z8.jpg",
      "img3": "./assets/img/z9.jpg",
      "img4": "./assets/img/z10.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 50,
      "soLuong": 0,
      "stringPrice": "370.000đ"
    },
    {
      "sanPhamId": 62,
      "sanPhamName": "Oid Salor Black",
      "sanPhamDescription": "Chất liệu 100% Cotton \r\nThấm mồ hôi tốt, để bạn luôn thoải mái khi mặc\r\nNhẹ và độ bền vải cao dễ dàng sử dụng",
      "sanPhamPrice": 295000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/aa1.jpg",
      "img1": "./assets/img/aa2.jpg",
      "img2": "./assets/img/aa3.jpg",
      "img3": "./assets/img/aa4.jpg",
      "img4": "./assets/img/aa5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 51,
      "soLuong": 42,
      "stringPrice": "295.000đ"
    },
    {
      "sanPhamId": 63,
      "sanPhamName": "Oid Salor White",
      "sanPhamDescription": "Chất liệu 100% Cotton tạo sự mềm mại ngay lần đầu chạm\r\nThấm mồ hôi tốt, để bạn luôn thoải mái khi mặc\r\nNhẹ và độ bền vải cao dễ dàng sử dụng",
      "sanPhamPrice": 295000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/p1.jpg",
      "img1": "./assets/img/p2.jpg",
      "img2": "./assets/img/p3.jpg",
      "img3": "./assets/img/p4.jpg",
      "img4": "./assets/img/p5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 52,
      "soLuong": 31,
      "stringPrice": "295.000đ"
    },
    {
      "sanPhamId": 64,
      "sanPhamName": "Polo LCSTE White",
      "sanPhamDescription": "100% sợi bông cotton \r\nBay hơi nhanh \r\nThấm hút tốt\r\nCo giãn tốt \r\nĐộ bền cao.",
      "sanPhamPrice": 590000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/k1.jpeg",
      "img1": "./assets/img/k2.jpeg",
      "img2": "./assets/img/k3.jpeg",
      "img3": "./assets/img/k5.jpeg",
      "img4": "./assets/img/k4.jpeg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 53,
      "soLuong": 52,
      "stringPrice": "590.000đ"
    },
    {
      "sanPhamId": 65,
      "sanPhamName": "Polo Ranger Black",
      "sanPhamDescription": "Chất liệu áo sơ mi:  Pique\r\nKiểu form: Basic",
      "sanPhamPrice": 350000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/n1.jpg",
      "img1": "./assets/img/n2.jpg",
      "img2": "./assets/img/n3.jpg",
      "img3": "./assets/img/n4.jpg",
      "img4": "./assets/img/n5.jpg",
      "typeSanPhamId": 1,
      "sanPhamDetailId": 54,
      "soLuong": 42,
      "stringPrice": "350.000đ"
    },
    {
      "sanPhamId": 66,
      "sanPhamName": "Hoodie Cream",
      "sanPhamDescription": "Chất liệu: 100% Cotton\r\nThân thiện\r\nThấm hút thoát ẩm\r\nMềm mại\r\nKiểm soát mùi\r\nĐiều hòa nhiệt",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/10122021071256_ao_hodie_nam_U1AKH12101BONHT_toto_shop__12_.jpg",
      "img1": "./assets/img/AO_KHOAC_U1AKH12101BONHT_(ao_hodie_nam_u1akh12101bonht_toto_shop_(2)).jpg",
      "img2": "./assets/img/AO_KHOAC_U1AKH12101BONHT_(ao_hodie_nam_u1akh12101bonht_toto_shop_(3)).jpg",
      "img3": "./assets/img/AO_KHOAC_U1AKH12101BONHT_(ao_hodie_nam_u1akh12101bonht_toto_shop_(7)).jpg",
      "img4": "./assets/img/AO_KHOAC_U1AKH12101BONHT_(ao_hodie_nam_u1akh12101bonht_toto_shop_(8)).jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 55,
      "soLuong": 9,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 67,
      "sanPhamName": "Hoodie Black",
      "sanPhamDescription": "Chất liệu: 100% Cotton\r\nThân thiện\r\nThấm hút thoát ẩm\r\nMềm mại\r\nKiểm soát mùi\r\nĐiều hòa nhiệt",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/19112021051107_ao_hodie_nam_U1AKH11101SONHT_toto_shop__13_.jpg",
      "img1": "./assets/img/AO_HOODIE_U1AKH11101SONHT_(ao_hodie_nam_u1akh11101sonht_toto_shop_(2)).jpg",
      "img2": "./assets/img/AO_HOODIE_U1AKH11101SONHT_(ao_hodie_nam_u1akh11101sonht_toto_shop_(3)).jpg",
      "img3": "./assets/img/AO_HOODIE_U1AKH11101SONHT_(ao_hodie_nam_u1akh11101sonht_toto_shop_(7)).jpg",
      "img4": "./assets/img/AO_HOODIE_U1AKH11101SONHT_(ao_hodie_nam_u1akh11101sonht_toto_shop_(9)).jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 56,
      "soLuong": 29,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 69,
      "sanPhamName": "Mũ Bucket MLB Shadow",
      "sanPhamDescription": "Chất liệu: 53% Nylon, 47% Cotton. Lớp lót: 81% Polyester, 19% Cotton\r\nKiểu dáng nón bucket hiện đại\r\nThiết kế lấy cảm hứng từ hiệp hội bóng chày MLB\r\nCộng hưởng cùng chi tiết logo thêu nổi bật\r\nChất vải mềm mịn, thấm hút tốt\r\nGam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện",
      "sanPhamPrice": 1100000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/c6.jpg",
      "img1": "./assets/img/c7.jpg",
      "img2": "./assets/img/c8.jpg",
      "img3": "./assets/img/c9.jpg",
      "img4": "./assets/img/c10.jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 58,
      "soLuong": 6,
      "stringPrice": "1.100.000đ"
    },
    {
      "sanPhamId": 70,
      "sanPhamName": "Hoodie White",
      "sanPhamDescription": "Chất liệu: 100% Cotton\r\nThân thiện\r\nThấm hút thoát ẩm\r\nMềm mại\r\nKiểm soát mùi\r\nĐiều hòa nhiệt",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/14052021100522_IMG_8433.jpg",
      "img1": "./assets/img/AO_HOODIE_U1AKH2041001_(Don_1).jpg",
      "img2": "./assets/img/AO_HOODIE_U1AKH2041001_(Don_2).jpg",
      "img3": "./assets/img/AO_HOODIE_U1AKH2041001_(Don_5).jpg",
      "img4": "./assets/img/AO_HOODIE_U1AKH2041001_(Don_8).jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 59,
      "soLuong": 17,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 71,
      "sanPhamName": "Hoodie Red",
      "sanPhamDescription": "Chất liệu: 100% Cotton\r\nThân thiện\r\nThấm hút thoát ẩm\r\nMềm mại\r\nKiểm soát mùi\r\nĐiều hòa nhiệt",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/img_3516_ea41aa420b8b4f2191729f99e6e6e7e4_master.jpg",
      "img1": "./assets/img/img_3517_223a8459de5c4c549ea57a6c111c74a7_master.jpg",
      "img2": "./assets/img/86a8dfeea970602e396165_cab18b21bad640f1ab7df1356b1d2b5a_master.jpg",
      "img3": "./assets/img/4d632d4a5b479319ca5638_bbd328ff81cf4564be21b4286cba6eed_master.jpg",
      "img4": "./assets/img/1d71a23ad4a41dfa44b564_4c29d777c70c41faa8f5913c997582ca_master.jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 60,
      "soLuong": 19,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 72,
      "sanPhamName": "Hoodie Green",
      "sanPhamDescription": "Chất liệu: 100% Cotton\r\nThân thiện\r\nThấm hút thoát ẩm\r\nMềm mại\r\nKiểm soát mùi\r\nĐiều hòa nhiệt",
      "sanPhamPrice": 280000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/img_3522_31421a37635c44b3aea428f481dd5007_master.jpg",
      "img1": "./assets/img/91dd47494112894cd00350_1812d9d5fdd04b9499bcfdd9d647647b_master.jpg",
      "img2": "./assets/img/9a1d114e5d22957ccc3348_323924abb35041cb9746b5ca27423a88_master.jpg",
      "img3": "./assets/img/bdd05671502a9874c13b53_b8d8c33477f84ba88dd251ae4c3aedf0_master.jpg",
      "img4": "./assets/img/e4a59ff6d39a1bc4428b46_c0b3d0b8c7944435baad966f41a27ca9_master.jpg",
      "typeSanPhamId": 3,
      "sanPhamDetailId": 61,
      "soLuong": 25,
      "stringPrice": "280.000đ"
    },
    {
      "sanPhamId": 73,
      "sanPhamName": "Jogger Black",
      "sanPhamDescription": "Chất liệu: dòng vải linen\r\nMặc vào người sẽ cảm thấy thoáng mát, dịu nhẹ, và thiết kế mới cải tiến này sẽ vẫn mang đến cho bạn vẻ ngoài năng động, pha một chút thanh lịch.",
      "sanPhamPrice": 425000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/j1.jpg",
      "img1": "./assets/img/j2.jpg",
      "img2": "./assets/img/j3.jpg",
      "img3": "./assets/img/j4.jpg",
      "img4": "./assets/img/j5.jpg",
      "typeSanPhamId": 2,
      "sanPhamDetailId": 62,
      "soLuong": 56,
      "stringPrice": "425.000đ"
    },
    {
      "sanPhamId": 74,
      "sanPhamName": "Jogger Black kéo dây",
      "sanPhamDescription": "Chất liệu: 100% cotton\r\nMặc vào người sẽ cảm thấy thoáng mát, dịu nhẹ, và thiết kế mới cải tiến này sẽ vẫn mang đến cho bạn vẻ ngoài năng động, pha một chút thanh lịch.",
      "sanPhamPrice": 425000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/j6.jpg",
      "img1": "./assets/img/j7.jpg",
      "img2": "./assets/img/j8.jpg",
      "img3": "./assets/img/j9.jpg",
      "img4": "./assets/img/j10.jpg",
      "typeSanPhamId": 2,
      "sanPhamDetailId": 63,
      "soLuong": 0,
      "stringPrice": "425.000đ"
    },
    {
      "sanPhamId": 75,
      "sanPhamName": "Jogger Grey",
      "sanPhamDescription": "Chất liệu: 100% cotton\r\nMặc vào người sẽ cảm thấy thoáng mát, dịu nhẹ, và thiết kế mới cải tiến này sẽ vẫn mang đến cho bạn vẻ ngoài năng động, pha một chút thanh lịch.",
      "sanPhamPrice": 425000,
      "sanPhamPriceSale": 0,
      "saleKey": false,
      "mainImg": "./assets/img/j11.jpg",
      "img1": "./assets/img/j12.jpg",
      "img2": "./assets/img/j13.jpg",
      "img3": "./assets/img/j14.jpg",
      "img4": "./assets/img/j15.jpg",
      "typeSanPhamId": 2,
      "sanPhamDetailId": 64,
      "soLuong": 0,
      "stringPrice": "425.000đ"
    }
  ];

  public cartItemlist: any[] = [];
  public productList = new BehaviorSubject<any>([]);
  public grandTotal: number = 0;

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    const check = this.cartItemlist.every(item => {
      return item.mamh !== product.mamh;
    })
    if (check) {
      this.cartItemlist.push(product);
      this.productList.next(this.cartItemlist);
      this.getTotalPrice();
    }
    else {
      this.increase(product);
    }
  }

  decrease(product: any) {
    this.cartItemlist.forEach(item => {
      if (item.mamh === product.mamh) {
        item.count === 1 ? item.count === 1 : item.count--;
      }
    })
    this.getTotalPrice();
  }

  increase(product: any) {
    this.cartItemlist.forEach(item => {
      if (item.mamh === product.mamh) {
        item.count === 10 ? item.count === 10 : item.count++;
      }
    })
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    // this.cartItemlist.map((a: any) => {
    //   grandTotal += (a.price * a.count);
    // })

    const res = this.cartItemlist.reduce((prev, item) => {
      return prev + (item.price * item.count);
    }, 0)
    this.grandTotal = res;
    return this.grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.mamh === a.mamh) {
        this.cartItemlist.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
  }
  removeAllCart() {
    this.cartItemlist = [];
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
  }
}
