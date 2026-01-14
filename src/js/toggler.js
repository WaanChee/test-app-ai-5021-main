import $ from "jquery";

$(document).ready(function () {
  $("#hide_para").click(function () {
    $("p").slideToggle();
  });
});
