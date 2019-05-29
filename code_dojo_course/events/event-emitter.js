// Эмулируем класс EventEmitter для лучшего понимания его работы
class EventEmitter {
  constructor() {
    // В таком виде храняться обработчики событий
    // this.events = {
    //   start: [fn, fn, fn],
    //   ....
    // };

    this.events = {};
  }

  //  подписка на событие
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  // вызов события
  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg));
    }
  }
}

module.exports = EventEmitter;