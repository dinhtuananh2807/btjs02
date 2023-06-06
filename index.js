//Bài tập tuyển sinh

document.getElementById("btnKiemTra").onclick = function(){
    var diemToan = document.getElementById("txtDiemToan").value*1;
    var diemVan = document.getElementById("txtDiemVan").value*1;
    var diemAnh = document.getElementById("txtDiemAnh").value*1;
    var diemChuan = document.getElementById("txtDiemChuan").value*1;
    var khuVuc = document.getElementById("txtKhuVuc").value;
    var doiTuong = document.getElementById("txtDoiTuong").value*1;

    if (khuVuc == 'A') {
        var diemKhuVuc = 2;
    }else if (khuVuc == 'B') {
        var diemKhuVuc = 1;
    }else if (khuVuc == 'C') {
        var diemKhuVuc = 0.5;
    }else {
        diemKhuVuc = 0;
    }

    if(doiTuong == 1){
        var diemDoiTuong = 2.5;
    }else if (doiTuong == 2){
        var diemDoiTuong = 1.5;
    }else if (doiTuong == 3){
        var diemDoiTuong = 1;
    }else {
        var diemDoiTuong = 0;
    }

    var diemTrungBinh = (diemToan + diemAnh + diemVan)/3;
    var diemUuTien = diemDoiTuong + diemKhuVuc;

    var diemTongKet = diemTrungBinh + diemUuTien;

    document.getElementById("ketQua").innerHTML = `Kết quả tổng điểm 3 môn của thí sinh là: ${diemTrungBinh} và điểm ưu tiên là: ${diemUuTien}`;

    if ((diemAnh > 0 && diemVan > 0 && diemToan > 0)&& diemTongKet >= diemChuan){
        document.getElementById("ketQua").innerHTML = `<br> Thí sinh  đã đậu và tổng điểm là: ${diemTongKet}`;
    }else {
        document.getElementById("ketQua").innerHTML = `<br> Thí sinh  đã trượt và tổng điểm là: ${diemTongKet}`;
    }
}


//-----------------Bài tập số 2---------------------

/*
Đầu vào:
    - Họ và tên
    - Số Kw
Xử lý:
    TH <= 50 = 500*soKW
    TH > 50 && <= 100 = 50*500 + (soKM-50)*650;
    TH > 100 && <= 200 = 50*500 + 50*650 + (soKM-100)*850
    TH > 200 && <= 350 = 50*500 + 50*650 + 100*850 + (soKM-200)*1100;
    TH > 350 = 50*500 + 50*650 + 100*850 + 150*1100 + (soKM - 350)&1300;
Đầu ra
    - Họ và tên
    - Số tiền phải trả
*/

document.getElementById("btnTinhToan").onclick = function (){
    const dien50KWDauTien = 500;
    const dien50KWKeTiep = 650;
    const dien100KWKeTiep = 800;
    const dien150KWKeTiep = 1100;
    const dien350KWTroLen = 1300;

    var hoTen = document.getElementById("txtTen").value;
    var luongDienTieuThu = document.getElementById("txtLuongDien").value*1;

    if (luongDienTieuThu <= 50){
        var tienDien = 500*luongDienTieuThu;
    }else if (luongDienTieuThu > 50 && luongDienTieuThu <= 100) {
        var tienDien = 50*500 + (luongDienTieuThu-50)*650;
    }else if (luongDienTieuThu > 100 && luongDienTieuThu <= 200){
        var tienDien = 50*500 + 50*650 + (luongDienTieuThu-100)*850;
    }else if (luongDienTieuThu > 200 && luongDienTieuThu <= 350){
        var tienDien =  50*500 + 50*650 + 100*850 + (luongDienTieuThu-200)*1100;
    }else {
        var tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (luongDienTieuThu - 350)&1300;
    }

    document.getElementById("ketQuaTinh").innerHTML = `Số tiền điện phải trả của khách hàng ${hoTen} là ${tienDien}`;

}

//------------------------BÀI TẬP TÍNH THUẾ---------------------------
/*
Đầu vào:
    - Họ tên
    - Tổng thu nhập
    - Số người phụ thuộc
Xử lý
    Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr.
    Thuế xuất:
    TH1: ThuNhapChiuThue <= 60 => thuế 5%
    .....

    Tiền phải trả thuế = ThuNhapChiuThue * ThueSuat;
Đầu ra
    - Thu nhập phải chịu thuế
*/



document.getElementById("btnTinhThue").onclick = function () {
    var hoTen = document.getElementById("txtHoTen").value;
    var soNguoiPhuThuoc = document.getElementById("txtNguoiPhuThuoc").value*1;
    var tongThuNhapNam = document.getElementById("txtTongThuNhap").value*1;
    var thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc*1.6;

    if (thuNhapChiuThue <= 60) {
        var thueSuat = 5;
    }else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120){
        var thueSuat = 10;
    }else if (thuNhapChiuThue > 120 &&thuNhapChiuThue <= 210){
        var thueSuat = 15;
    }else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384){
        var thueSuat = 20;
    }else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624){
        var thueSuat = 25;
    }else if (thuNhapChiuThue > 624 && thuNhapChiuThue < 960){
        var thueSuat = 30;
    }else {
        var thueSuat = 35;
    }

    var thueThuNhapCaNhan = thuNhapChiuThue*thueSuat/100;

    document.getElementById("ketQuaThue").innerHTML = `Tổng thu nhập năm của ${hoTen} là: ${tongThuNhapNam}. <br> Số tiền thuế phải chịu là: ${thueThuNhapCaNhan}`;


}

//---------------------------BÀI TẬP NỘP TÍNH TIỀN CAP------------------------------
/*
Đầu vào
    - Loại khách hàng
    - Mã khách hàng
Xử lý
    - Phân loại nhà dân hay doanh nghiệp
    - Tính toán chi phí
    - Thêm thuộc tính disable nếu chọn là DN.
Đầu ra

*/

document.getElementById("txtLoaiKhachHang").onclick = function(){
    var loaiKhachHang = document.getElementsByTagName("option").value;
    console.log(loaiKhachHang);
}