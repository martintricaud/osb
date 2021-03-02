const sliderProps = [{
    min:0,
    max:100,
    center:50,
},{
    min:0,
    max:100,
    center:50,
}]


class Slider{
    constructor(min,max,val){
        this.min=min;
        this.max=max;
        this.val=val;
    }
    setVal(v){
        this.val=v;
    }
    
    render(anchor){
        //render the slider at anchor position
        //add option to 
    }
}

class Oscillator{
    constructor(m,fre,amp){
        this.m=m;
        this.fre=fre;
        this.amp=amp;
    }
    eval(t){
        return this.amp*Math.sin(2*Math.PI*this.fre*t);
    }
}

function initializePath() {
	path.segments = [];
	//path.add(add point here);
}


window.onload = function() {
    init();
    const slider1 = new Slider(0,100,50);
    const slider2 = new Slider(0,100,50);
    const osc = new Oscillator(5,10,5);

    doSomethingElse();
};

var path = new Path();

initializePath();

//--------------------- main ---------------------


function onFrame(event){
}