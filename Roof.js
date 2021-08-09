class Roof {
    constructor(x, y, w) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, 10, options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.w = w;
    }
    display() {
        var groundPos = this.body.position;
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        noStroke();
        fill('brown')
        rect(0, 0, this.w, 20);
        pop()
    }
}