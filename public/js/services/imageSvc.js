angular.module('myApp')
  .service('imageSvc', function() {
    this.images = [
      {title: 'ammo.io', url: 'images/square/ammo_square.png'},
      {title: 'Acompli Dashboard', url: 'images/square/acompli_square.png'},
      {title: 'Hack Reactor Connect', url: 'images/square/hrConnect_square.png'},
      {title: 'veronicacastellucci.com', url: 'images/square/vc_square.png'},
      {title: 'Uptime', url: 'images/square/uptime_square.png'},
      {title: 'Rotating D3 Globe', url: 'images/square/earth_square.png'},
      {title: 'D3 data structures', url: 'images/square/stack_queue_square.png'}
    ];
  });