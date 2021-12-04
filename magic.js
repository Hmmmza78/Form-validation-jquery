console.log("Hello Dev");
$(document).ready(function () {
  $("#form").submit(function (e) {
    let err = $("#err");
    let success = $("#success");

    let name = $("#name").val();
    let uname = $("#uname").val();
    let email = $("#email").val();
    let pwd = $("#pwd").val();

    let messages = [];

    if (name.length < 8) {
      errM = "THis is a short name";
      $("#err").html(errM);
      $("#err").fadeIn();
      e.preventDefault();
    } else if (uname.length < 8) {
      errM = "This is a short Username";
      $("#err").html(errM);
      $("#err").fadeIn();
      e.preventDefault();
    } else if (pwd.length < 8) {
      errM = "Make a strong password";
      $("#err").html(errM);
      $("#err").fadeIn();
      e.preventDefault();
    } else if (!email.includes("@")) {
      errM = "This is not a correct email";
      $("#err").html(errM);
      $("#err").fadeIn();
      e.preventDefault();
    } else {
      $(success).html("Your Form Has been submitted");
    }
  });
});
