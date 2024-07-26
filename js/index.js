function domID(id) {
  return document.getElementById(id);
}

var DSNV = [];

var data = localStorage.getItem("DSNV_JSON");
DSNV = JSON.parse(data);

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
        <td>${nv.luongCB}</td>
        <td>0</td>
        <td style="white-space: nowrap;"><button class="btn btn-danger" onclick="xoaNV('${nv.tknv}')" id="btnXoa">Xoá</button><button class="btn btn-warning" id="btnSua" data-toggle="modal"
        data-target="#myModal">Sửa</button></td>
    </tr>`;
    contentHTML += string;
  }
  domID("tableDanhSach").innerHTML = contentHTML;
}

function themNV() {

    var nv = getInfor();

  DSNV.push(nv);
  console.log(DSNV);

  // chuyen doi DSNV thanh chuoi JSON
  var DSNVJSON = JSON.stringify(DSNV);
  // luu xuong local storage
  localStorage.setItem("DSNV_JSON", DSNVJSON);

  renderDSNV();
}

function xoaNV(ma) {
    var viTri = DSNV.findIndex(function(item) {
        return item.tknv === ma;
    })
    if (viTri !== -1) {
        DSNV.splice(viTri,1);

        var xoaJSON = JSON.stringify(DSNV);
        localStorage.setItem("DSNV_JSON", xoaJSON);

        renderDSNV();
    }
}

function capNhatNV() {}
