const snake = new Snake('app', 100)
snake.render();

snake.canvas.addEventListener('click', (e) => {
    const { clientX, clientY } = e;

    snake.coordBerry = {
        x: Math.floor(clientX / snake.sizeChank),
        y: Math.floor(clientY / snake.sizeChank),
    }

    snake.render();
    runSnake(snake);
});

function runSnake(snakeState) {
    let path = findRoute(snakeState.coordPart[0], snakeState.coordBerry).slice(1);

    const timerId =  setInterval(() => {
        snakeState.move(path[0]);
        snakeState.render();
        path = path.slice(1);
        if (path.length === 0) clearInterval(timerId);
    }, 100);
}