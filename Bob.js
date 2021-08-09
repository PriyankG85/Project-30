class Bob {
	constructor(x, y, r) {
		var options = {
			isStatic: false,
			restitution: 1.2,
			friction: 0,
			density: 1
		}
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, (this.r) / 2, options)
		World.add(world, this.body);

	}
	display() {

		var paperpos = this.body.position;

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		noStroke();
		fill('red');
		ellipse(0, 0, this.r, this.r);
		fill('black');
		ellipse(0, 0, (this.r + 20) / 2, (this.r + 20) / 2);
		fill('aliceblue');
		ellipse(0, 0, this.r / 3, this.r / 3);
		pop()

	}

}