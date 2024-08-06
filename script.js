let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function(){
    canvas = document.getElementById('canvasEl');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

// resizes window
window.addEventListener('resize', function(){
    this.cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
});

const mouse = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', function(e){
    console.log(e)
})

class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'blue';
        this.#width = width;
        this.#height = height;
    }
    #draw(x, y){
        const length = 300;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }
    animate(){
        this.angle += 0.1;
        // clears old animations
        this.#ctx.clearRect(0, 0, this.#width, this.#height);

        // draws new animations
        // this.#draw(this.#width/2 + Math.sin(this.angle) * 100, this.#height/2 + Math.sin(this.angle) * 100);

        // important to bind the animate function to the class instance
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
        // console.log('Animating...');
    }
}