
function khungModal(tknv,name,email,password,datepicker,luongCB,chucVu,gioLam) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.salary = function() {
        if (this.chucVu === "Giám đốc") {
            return this.luongCB * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            return this.luongCB * 2;
        } else {
            return this.luongCB * 1;
        }
    };
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