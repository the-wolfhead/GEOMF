var i = 0;
function change() {
  var doc = document.getElementById("button");
  var color = ["#FB3640", "#247BA0", "#CBFF8C", "#F2AF29"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);