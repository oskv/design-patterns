const ticker = require('./ticker');
ticker.on('tick', (tickCount) => console.log(tickCount, 'TICK'));
// ticker.emit('something', {}); <-- Это вызовет ошибку