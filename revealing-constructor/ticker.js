const Roee = require('./read-only-event-emitter');
const ticker = new Roee((emit) => {
  let tickCount = 0;
  setInterval(() => emit('tick', tickCount++), 1000);
});
module.exports = ticker;