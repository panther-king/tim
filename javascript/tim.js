(function() {
  'use strict';
  var vm = new Vue({
    el: '#container',
    data: {
      counter: 0,
      minutes: '00',
      seconds: '00',
      timer: null
    },
    methods: {
      down: function(context) {
        context.counter -= 60;
      },
      minute: function(value) {
        if (value === 60) {
          return 1;
        } else if (value < 60) {
          return 0;
        } else {
          return Math.floor(value / 60);
        }
      },
      render: function(value) {
        if (value === 0) {
          return '00';
        } else if (value < 10) {
          return '0' + value.toString();
        } else {
          return value.toString();
        }
      },
      reset: function(context) {
        context.counter = 0;
      },
      second: function(value) {
        var minute = Math.floor(value / 60);
        return value - (minute * 60);
      },
      start: function(context) {
        context.timer = setInterval(function() {
          context.counter--;
        }, 1000);
      },
      stop: function(context) {
        clearInterval(context.timer);
      },
      up: function(context) {
        context.counter += 60;
      }
    }
  });

  vm.$watch('counter', function(value, mutation) {
    this.minutes = this.render(this.minute(value));
    this.seconds = this.render(this.second(value));
  });
})();
