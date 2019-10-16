// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	
	function setColor() {
		
		var color = document.getElementById("colorPicker").value;
   		this.style.background = color;
	}

    var height = document.getElementById("input_height").value;
    var width = document.getElementById("input_width").value;
    var pixelCanvas = document.getElementById("pixel_canvas"); 
    
    for (let h=0; h<height; h++) {
        var row = pixelCanvas.insertRow(); 
        	for (let w=0; w<width; w++) {
            	var cell = row.insertCell(); 
            	cell.onclick = setColor ;
        	}
    }
    event.preventDefault();
}