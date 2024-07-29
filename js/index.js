function domID(id) {
  return document.getElementById(id);
}

var DSNV = [];

var data = localStorage.getItem("DSNV_JSON");
var nvArr = JSON.parse(data);

for (var i = 0; i < nvArr.length; i++) {
  var data = nvArr[i];
  var nv = new khungModal(
    data.tknv,
    data.name,
    data.email,
    data.password,
    data.datepicker,
    data.luongCB,
    data.chucVu,
    data.gioLam,
    data.salary,
    data.xepLoaiNV
  );
  DSNV.push(nv);
}
console.log(DSNV);

renderDSNV();

function renderDSNV() {
  var contentHTML = "";
  for (var i = 0; i < DSNV.length; i++) {
    var nv = DSNV[i];
    var string = `<tr>
        <td>${nv.tknv}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.datepicker}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.salary()}</td>
        <td>${nv.xepLoaiNV()}</td>
        <td style="white-space: nowrap;"><button class="btn btn-danger" onclick="xoaNV('${
          nv.tknv
        }')" id="btnXoa">Xoá</button><button class="btn btn-warning" onclick="suaNV('${
      nv.tknv
    }')" id="btnSua" data-toggle="modal"
        data-target="#myModal">Sửa</button></td>
    </tr>`;
    contentHTML += string;
  }
  domID("tableDanhSach").innerHTML = contentHTML;
}

function themNV() {
  var nv = getInfor();

  var isValid =
    checkTKNV(nv.tknv, "tbTKNV") &
    checkName(nv.name, "tbTen") &
    checkEmail(nv.email) &
    checkPassword(nv.password) &
    checkDate(nv.datepicker) &
    checkLuongCB(nv.luongCB) &
    checkChucVu(nv.chucVu) &
    checkGioLam(nv.gioLam);
  if (!isValid) return false;

  DSNV.push(nv);
  console.log(DSNV);

  // chuyen doi DSNV thanh chuoi JSON
  var DSNVJSON = JSON.stringify(DSNV);
  // luu xuong local storage
  localStorage.setItem("DSNV_JSON", DSNVJSON);

  renderDSNV();
}

function xoaNV(tknv) {
  var viTri = DSNV.findIndex(function (item) {
    return item.tknv === tknv;
  });
  if (viTri !== -1) {
    DSNV.splice(viTri, 1);

    var xoaJSON = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_JSON", xoaJSON);

    renderDSNV();
  }
}

function suaNV(tknv) {
  var viTri = DSNV.findIndex(function (item) {
    return item.tknv === tknv;
  });
  console.log(tknv);
  if (viTri !== -1) {
    var nv = DSNV[viTri];
    domID("tknv").value = nv.tknv;
    domID("name").value = nv.name;
    domID("email").value = nv.email;
    domID("password").value = nv.password;
    domID("datepicker").value = nv.datepicker;
    domID("luongCB").value = nv.luongCB;
    domID("chucVu").value = nv.chucVu;
    domID("gioLam").value = nv.gioLam;

    domID("tknv").setAttribute("readonly", "true");
  }
}

domID("btnCapNhat").onclick = function () {
  var nv = getInfor();
  console.log(nv);

  var isValid =
    checkTKNV(nv.tknv, "tbTKNV") &
    checkName(nv.name, "tbTen") &
    checkEmail(nv.email) &
    checkPassword(nv.password) &
    checkDate(nv.datepicker) &
    checkLuongCB(nv.luongCB) &
    checkChucVu(nv.chucVu) &
    checkGioLam(nv.gioLam);
  if (!isValid) return false;

  var viTri = DSNV.findIndex(function (item) {
    return item.tknv === nv.tknv;
  });
  DSNV[viTri] = nv;

  var capNhatJSON = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", capNhatJSON);

  renderDSNV();
};

function displayEmployees(category) {
    var employeeList = document.getElementById('tableDanhSach');
    employeeList.innerHTML = ''; // Xóa nội dung cũ

    var filteredEmployees = DSNV.filter(function(employee) {
        return employee.xepLoaiNV() === category;
    });
    
    if (filteredEmployees.length > 0) {
        var contentHTML = "";
  for (var i = 0; i < filteredEmployees.length; i++) {
    var nv = filteredEmployees[i];
    var string = `<tr>
        <td>${nv.tknv}</td>
        <td>${nv.name}</td>
        <td>${nv.email}</td>
        <td>${nv.datepicker}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.salary()}</td>
        <td>${nv.xepLoaiNV()}</td>
        <td style="white-space: nowrap;"><button class="btn btn-danger" onclick="xoaNV('${
          nv.tknv
        }')" id="btnXoa">Xoá</button><button class="btn btn-warning" onclick="suaNV('${
      nv.tknv
    }')" id="btnSua" data-toggle="modal"
        data-target="#myModal">Sửa</button></td>
    </tr>`;
    contentHTML += string;
  }
  domID("tableDanhSach").innerHTML = contentHTML;
    } else {
        domID("tableDanhSach").innerHTML = '<p>Không có nhân viên nào ( Nhập Xuất sắc, Giỏi, Khá, Trung bình ).</p>';
    }
}

// Hàm xử lý sự kiện tìm kiếm
function searchEmployees() {
    var searchName = document.getElementById('searchName').value.trim();
    displayEmployees(searchName);
}

// Lắng nghe sự kiện nhấn nút tìm kiếm
document.getElementById('btnTimNV').addEventListener('click', function() {
    searchEmployees();
});
