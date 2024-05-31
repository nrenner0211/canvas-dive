window.onload = function(){
    const canvas = document.getElementById('canvasEl');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

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
        this.#draw(100, 100);
        // important to bind the animate function to the class instance
        requestAnimationFrame(this.animate.bind(this));
        console.log('animate');
    }
}