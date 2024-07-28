

function checkTKNV(value) {
    const regex = /^[a-zA-Z0-9]{4,6}$/;
    if (value == '') {
        domID('tbTKNV').innerText = "Trường này không được để trống !";
        domID('tbTKNV').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbTKNV').innerText = '';
        return true;
    } else {
        domID('tbTKNV').innerText = 'Tài khoản phải từ 4 đến 6 ký số !';
        domID('tbTKNV').style.display = 'block';
        return false;
    }
}

function checkName(value) {
    const regex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỂưăạảấầẩẫậắằẳẵặẹẻẽềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
    if (value == '') {
        domID('tbTen').innerText = "Trường này không được để trống !";
        domID('tbTen').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbTen').innerText = '';
        return true;
    } else {
        domID('tbTen').innerText = 'Tên phải là chữ !';
        domID('tbTen').style.display = 'block';
        return false;
    }
}

function checkEmail(value) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    if (value == '') {
        domID('tbEmail').innerText = "Trường này không được để trống !";
        domID('tbEmail').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbEmail').innerText = '';
        return true;
    } else {
        domID('tbEmail').innerText = "Error email !";
        domID('tbEmail').style.display = 'block';
        return false;
    }
}

function checkPassword(value) {
    var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (value == '') {
        domID('tbMatKhau').innerText = "Trường này không được để trống !";
        domID('tbMatKhau').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbMatKhau').innerText = '';
        return true;
    } else {
        domID('tbMatKhau').innerText = "Mật Khẩu từ 6-10 ký tự !";
        domID('tbMatKhau').style.display = 'block';
        return false;
    }
}

function checkDate(value) {
    var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (value == '') {
        domID('tbNgay').innerText = "Trường này không được để trống !";
        domID('tbNgay').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbNgay').innerText = '';
        return true;
    } else {
        domID('tbNgay').innerText = "Không đúng định dạng !";
        domID('tbNgay').style.display = 'block';
        return false;
    }
}

function checkLuongCB(value) {
    var regex = /^[0-9]{6,8}$/;
    if (value == '') {
        domID('tbLuongCB').innerText = "Trường này không được để trống !";
        domID('tbLuongCB').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbLuongCB').innerText = '';
        return true;
    } else {
        domID('tbLuongCB').innerText = "Không đúng định dạng !";
        domID('tbLuongCB').style.display = 'block';
        return false;
    }
}

function checkChucVu(value) {
    if (value == 'Chọn chức vụ') {
        domID('tbChucVu').innerText = "Trường này không được để trống !";
        domID('tbChucVu').style.display = "block";
        return false;
    } else {
        domID('tbChucVu').innerText = '';
        return true;
    }
}

function checkGioLam(value) {
    if (value == '') {
        domID('tbGiolam').innerText = "Trường này không được để trống !";
        domID('tbGiolam').style.display = "block";
        return false;
    } else if (value < 200 && value > 80) {
        domID('tbGiolam').innerText = '';
        return true;
    } else {
        domID('tbGiolam').innerText = "Không hợp lệ !";
        domID('tbGiolam').style.display = 'block';
        return false;
    }
}