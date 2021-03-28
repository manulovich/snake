function findRoute(from, to) {
    let path = [from];
    const getLastVal = c => path[path.length - 1][c];

    while ((getLastVal('x') !== to.x) || (getLastVal('y') !== to.y)) {
        let coord = {
            get x() { return getLastVal('x') },
            get y() { return getLastVal('y') }
        };

        if (coord.x !== to.x) {
            path.push({
                x: coord.x < to.x ? (coord.x + 1) : (coord.x - 1),
                y: coord.y
            })
        }

        if (coord.y !== to.y) {
            path.push({
                x: coord.x,
                y: coord.y < to.y ? (coord.y + 1) : (coord.y - 1)
            });
        }
    }

    return path;
}