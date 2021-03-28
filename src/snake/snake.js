class Snake {
    constructor(id, countChank) {
        this.node = document.getElementById(id);
        this.coordPart = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
        this.coordBerry = { x: null, y: null };
        this.canvas = document.createElement('canvas');
        this.countChank = countChank;
        this.sizeChank = this.node.offsetWidth / this.countChank;
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.node.offsetWidth;
        this.canvas.height = this.node.offsetWidth;

        this.node.appendChild(this.canvas);
    }

    _setColor(color) {
        this.ctx.fillStyle = color;
    }

    renderMap() {
        this._setColor('#000');
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    renderSnake() {
        this._setColor('green');

        this.coordPart.forEach(({ x, y }) => {
            this.ctx.fillRect(
                x * this.sizeChank,
                y * this.sizeChank,
                this.sizeChank,
                this.sizeChank
            );
        })
    }

    renderBerry() {
        if (this.coordBerry.x === null) return;
        this._setColor('darkred');
        this.ctx.fillRect(
            this.coordBerry.x * this.sizeChank,
            this.coordBerry.y * this.sizeChank,
            this.sizeChank,
            this.sizeChank
        );
    }

    move(coord) {
        this.coordPart.unshift(coord);
        const head = this.coordPart[0];

        if ((head.x !== this.coordBerry.x) || (head.y !== this.coordBerry.y))
            this.coordPart.pop();

        this.render();
    }

    render() {
        this.renderMap();
        this.renderBerry();
        this.renderSnake();
    }
}