var app = angular.module('website', []);

app.directive('smoothButton', function(){
	var linker = function (scope, element, attrs) {
		var tl = new TimelineLite();
		tl.add(TweenLite.to(element.find('.colormiddlest'), 0.4, {scaleX:1.8, scaleY:1.8, ease: Power2.easeout}));
		tl.add(TweenLite.to(element.find('.colormiddle'), 0.4, {scaleX:1.4, scaleY:1.4, ease: Power2.easeout}), '-=0.2');
		tl.add(TweenLite.to(element.find('.colorbottom'), 0.4, {scaleX:1.4, scaleY:1.4, ease: Power2.easeout}), '-=0.2');
		tl.stop();

		scope.play = function()	{
			tl.play();
		};

		scope.reverse = function() {
			tl.reverse();
		};
	};

	return {
		scope: true,
		link: linker,
		templateUrl: 'smooth-button.tmpl.html'
	}
});