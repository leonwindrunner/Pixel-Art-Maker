function makeGrid() {	
	var canvasWidth=Number($("#input_width").val());
	var canvasHeight=Number($("#input_height").val());
	var canvasTable=$("#pixel_canvas");
	var boxColor;

	function createTable() {
		for(let r=0;r<canvasWidth;r++) {
			let row=$('<tr id="row-'+r+'"></tr>');
			canvasTable.append(row);
			for(let c=0;c<canvasHeight;c++) {
				let column=$("<td></td>");
				$("#row-"+r).append(column);
			}
		}
	}

	createTable();

	$("#pixel_canvas").on("click", "td", function() {
		boxColor=$("#colorPicker").val();
		$(this).css("backgroundColor",boxColor);
	});

	$("#submitBtn").click(function(e) {
		e.preventDefault();
		canvasWidth=Number($("#input_width").val());
		canvasHeight=Number($("#input_height").val());
		canvasTable.empty();
		createTable();
	});	
}

$(document).ready(makeGrid());
