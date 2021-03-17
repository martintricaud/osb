paper.install(window);
	window.onload = function() {
		paper.setup('myCanvas');

		//UTILITIES
		const lineWidget = function(anchor, vect){
			return new paper.Path.Line({
				from: anchor,
				to: anchor.add(vect),
				strokeColor:'black',
				strokeWeight:4
			})
		
		}


		const point = new paper.Point(100, 100);
		const horizontals = [1,2,3].map(x=>{
			let p = new paper.Point(100,100*x);
			return lineWidget(p,[300,0]);
		}) ;

		//initalize the horizontal lines
		// Create a simple drawing tool:
		var tool = new Tool();
		var path;

		// Define a mousedown and mousedrag handler
		tool.onMouseDown = function(event) {
			path = new Path();
			path.strokeColor = 'black';
			path.add(event.point);
		}

		tool.onMouseDrag = function(event) {
			path.add(event.point);
		}
	}

// const slider = function(widget, interval){
// 	return function(x){
// 		return (x-widget.min) * (interval.max - interval.min) / (widget.max - widget.min)
// 	}
// }

// const osc = function(params, shape){
// 	return function(t){
// 		return params[0]+params[1]*shape(params[2]*t+params[3]);
// 	}
// }
