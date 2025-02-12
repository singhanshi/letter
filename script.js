$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    $(".flower").css("opacity", "1"); // Show flowers
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    $(".flower").css("opacity", "0"); // Hide flowers
  }
});