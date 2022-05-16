export class Product {
    sanPhamId: number = 0;
    sanPhamName: string = "";
    sanPhamDescription: string = "";
    sanPhamPrice: number = 0;
    sanPhamPriceSale: number = 0;
    saleKey: boolean = false;
    mainImg: string = "";
    img1: string = "";
    img2: string = "";
    img3: string = "";
    img4: string = "";
    typeSanPhamId: number = 0;
    sanPhamDetailId: number = 0;
    soLuong: number = 1;
    stringPrice: string = "";
    size: string = "";

    constructor() {
        this.sanPhamId = 0;
        this.sanPhamName = "";
        this.sanPhamDescription = "";
        this.sanPhamPrice = 0;
        this.sanPhamPriceSale = 0;
        this.saleKey = false;
        this.img1 = "";
        this.img2 = "";
        this.img3 = "";
        this.img4 = "";
        this.typeSanPhamId = 0;
        this.sanPhamDetailId = 0;
        this.soLuong = 0;
        this.stringPrice = "";
        this.size = "";

    }
}