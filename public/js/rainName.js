angular.module('myApp')
  .directive('rainName', function() {
    return {
      restrict: 'E',
      scope: {
        title: '=',
        dropSize: '=',
        dropCount: '='
      },
      link: function(scope, element) {
        var w = element[0].parentNode.clientWidth;
        var h = element[0].parentNode.clientHeight;
        var dropSize = scope.dropSize || 3;
        var dropCount = scope.dropCount || 200;
        var title = scope.title || 'pass in text';
        var data = d3.range(dropCount);

        var svg = d3.select(element[0]).append('svg')
          .attr('height', h)
          .attr('width', w);

        var g = svg.append('g');

        var text = svg.append('text')
          .attr('x', 15)
          .attr('y', h-5)
          .attr('font-size', w/10)
          .attr('fill', 'black')
          .text(title); 

        var render = function(h,w) {
          g.selectAll('circle').remove(); //for resizing
          var drops = g.selectAll('.drops').data(data);

          drops.enter().append('circle')
            .attr('cx', function(d,i) { return Math.random() * w })
            .attr('cy', 0)
            .attr('r', dropSize)
            .attr('fill', 'rgb(6,120,155)');

          drops.each(function(d,i) {
            d3.select(this).transition()
              .duration(2000)
              .delay(Math.random() * 4000).ease(bounce(Math.random()/4))
              .attr("cy", h);
          });

          text.transition().duration(10000)
            .attr("fill", "white");
        };

        render(h,w);

        var resize = function() {
          var w = element[0].parentNode.clientWidth;
          var h = element[0].parentNode.clientHeight;

          svg
            .attr('height', h)
            .attr('width', w);

          text
            .attr('y', h-5)
            .attr('font-size', w/10);

          render(h,w);
        };

        window.onresize = resize;

        //USED MIKE BOSTOCK'S CUSTOM VARIABLE BOUNCE FUNCTION FROM: 
        //http://bl.ocks.org/mbostock/5743979/e5775a5251d93c73a8491cb7fca825b0a07792cf
        function bounce(h) {
          if (!arguments.length) h = 0.25;
          var b0 = 1 - h,
              b1 = b0 * (1 - b0) + b0,
              b2 = b0 * (1 - b1) + b1,
              x0 = 2 * Math.sqrt(h),
              x1 = x0 * Math.sqrt(h),
              x2 = x1 * Math.sqrt(h),
              t0 = 1 / (1 + x0 + x1 + x2),
              t1 = t0 + t0 * x0,
              t2 = t1 + t0 * x1,
              m0 = t0 + t0 * x0 / 2,
              m1 = t1 + t0 * x1 / 2,
              m2 = t2 + t0 * x2 / 2,
              a = 1 / (t0 * t0);
          return function(t) {
            return t >= 1 ? 1
                : t < t0 ? a * t * t
                : t < t1 ? a * (t -= m0) * t + b0
                : t < t2 ? a * (t -= m1) * t + b1
                : a * (t -= m2) * t + b2;
          };
        };
      }
    };
  });
