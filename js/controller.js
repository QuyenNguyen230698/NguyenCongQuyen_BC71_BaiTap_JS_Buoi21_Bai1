
function getInfor() {
  var tknv = domID("tknv").value;
  var name = domID("name").value;
  var email = domID("email").value;
  var password = domID("password").value;
  var datepicker = domID('datepicker').value;
  var luongCB = domID("luongCB").value * 1;
  var chucVu = domID("chucVu").value;
  var gioLam = domID("gioLam").value * 1;

  // var nv = {
  //   tknv: tknv,
  //   name: name,
  //   email: email,
  //   password: password,
  //   datepicker: datepicker,
  //   luongCB: luongCB,
  //   chucVu: chucVu,
  //   gioLam: gioLam,
  // };
  
  var nv = new khungModal(tknv,name,email,password,datepicker,luongCB,chucVu,gioLam);

  return nv;
}