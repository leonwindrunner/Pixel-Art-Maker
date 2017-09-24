//创建三个全局变量canvasWidth, canvasHeight, canvasTable
var canvasWidth, canvasHeight, canvasTable;

//函数：创建格子并添加事件监听
function makeGrid() {
  canvasWidth = Number($("#input_width").val()); //取得格子宽度
  canvasHeight = Number($("#input_height").val()); //取得格子高度
  canvasTable = document.getElementById("pixel_canvas");
  var boxColor;

  // 循环创建盒子
  function createTable() {
    for (let r = 0; r < canvasHeight; r++) {
      var row = canvasTable.insertRow(r); //添加行
      for (let c = 0; c < canvasWidth; c++) {
        var cell = row.insertCell(c); //添加单个格子
        // 设置事件监听，点击单个格子时，修改其颜色
        cell.addEventListener('click', function() {
          boxColor = $("#colorPicker").val();
          $(this).css("backgroundColor", boxColor);
        })
      }
    }
  }

  createTable();
}

//点击Submit时更改格子大小
var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
  e.preventDefault(); //取消默认事件
  $("#pixel_canvas").empty(); //清空格子
  makeGrid(); //创建新的格子
});

$(document).ready(makeGrid());