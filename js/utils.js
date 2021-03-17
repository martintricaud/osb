// Math utility that returns an evaluable signal of given shape


const osc = function(params, shape){
	return function(t){
		return params[0]+params[1]*shape(params[2]*t+params[3]);
	}
}

const LineWidget = function(anchor, vect){
    return new paper.Path.Line({
        from: anchor,
        to: anchor.add(vect),
        strokeColor:'black',
        strokeWeight:4
    })

}
export {LineWidget}