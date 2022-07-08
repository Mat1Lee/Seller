class SanPham {
    constructor(name1, price, screen, backCamera, frontCamera, img, desc, type) {
        this.name1 = name1;
        this.price = price;
        this.screen = screen;
        this.backCamera = backCamera;
        this.frontCamera = frontCamera;
        this.desc = desc;
        this.type = type;
    }
    tinhTien() {
        this.price = this.price.split("$")
    }
}
export default SanPham;