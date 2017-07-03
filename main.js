var count = 0;
var list = ['001.png', '002.png'];
setIterval(function() {
  $("div.photos").html($("<img>").attr("src", "images/001.png"));
}, 1000);

list[count]
