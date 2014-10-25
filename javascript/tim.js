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
      reset: function(context) {
        context.counter = 0;
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
    console.log(value);
  });
})();
