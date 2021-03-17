
// //p0 is the mean, p1 is the amplitude, p2 is the frequency, p3 is the phase

// const p1 = [1,2,3,4];
// const p2 = [1,2,3,4];
// const osc1 = osc(p1);
// const osc2 = osc(p2);

// Adapted from the following Processing example:
http://processing.org/learning/topics/follow3.html


// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

// var path = new Path({
// 	strokeColor: '#E4141B',
// 	strokeWidth: 20,
// 	strokeCap: 'round'
// });

//var start = view.center / [10, 1];
// for (var i = 0; i < points; i++)
// 	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	// path.firstSegment.point = event.point;
	// for (var i = 0; i < points - 1; i++) {
	// 	var segment = path.segments[i];
	// 	var nextSegment = segment.next;
	// 	var vector = segment.point - nextSegment.point;
	// 	vector.length = length;
	// 	nextSegment.point = segment.point - vector;
	// }
	// path.smooth({ type: 'continuous' });
}

// function onMouseDown(event) {
// 	//range selector starts oscillating
// 	path.fullySelected = true;
// 	path.strokeColor = '#e08285';
// }

function onMouseUp(event) {
	//range selector stops oscillating
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}

function cursor(pos){
	return new Path.Line({
		from: pos,
		to: pos +[0,50],
		strokeColor:'black',
		strokeWeight:4
	})
}

function slider(anchor,l){
	return new Path.Rectangle({
	from: anchor,
	to: anchor + l + [0,50],
	strokeColor:'black',
	fillColor:'white',
	opacity:0.5,
})
};


var inOrOut = true;
var a = new Point(50,50);
var l = new Point(450,0);
var offset = new Point(0,100);
var sliderState = new Map[[slider(a,l), false],[slider(a+offset,l),false]];

cursor1 = cursor(a);
cursor2 = cursor(a+offset);

for (const [key, value] of sliderState) {
	key.onMouseEnter = function(event){
		value = true
		key.strokeColor = 'green'
	}
	key.onMouseLeave = function(event){
		value = false
		key.strokeColor = 'red'
	}
}




// slider2.onMouseDragged = function(event){
// 	if(inOrOut){
// 		cursor2.from += event.delta
// 	}
// }