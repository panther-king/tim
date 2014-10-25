(function() {
  'use strict';
  var vm = new Vue({
    el: '#container',
    data: {
      counter: 0,
      minutes: '00',
      seconds: '00',
      status: 'wait',
      timer: null
    },
    methods: {
      down: function(context) {
        if (context.status === 'wait') {
          context.counter -= 60;
        }
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
        if (context.status === 'wait') {
          context.counter = 0;
        }
      },
      second: function(value) {
        var minute = Math.floor(value / 60);
        return value - (minute * 60);
      },
      start: function(context) {
        if (context.status === 'wait') {
          context.timer = setInterval(function() {
            context.counter--;
          }, 1000);
          context.status = 'exec';
        }
      },
      stop: function(context) {
        if (context.status === 'exec') {
          clearInterval(context.timer);
          context.status = 'wait';
        }
      },
      up: function(context) {
        if (context.status === 'wait') {
          context.counter += 60;
        }
      }
    }
  });

  vm.$watch('counter', function(value, mutation) {
    this.minutes = this.render(this.minute(value));
    this.seconds = this.render(this.second(value));
  });
})();
