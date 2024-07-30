//3. Tạo đối tượng nhân viên
function khungModal(tknv,name,email,password,datepicker,luongCB,chucVu,gioLam) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    //5. phương thức tính tổng lương nhân viên
    this.salary = function() {
        if (this.chucVu === "Giám đốc") {
            return this.luongCB * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            return this.luongCB * 2;
        } else {
            return this.luongCB * 1;
        }
    };
    //6. phương thức xếp loại nhân viên
    this.xepLoaiNV = function() {
        if (this.gioLam >= 192) {
            return "Xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Giỏi";
        } else if (this.gioLam >= 160) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    };    
}