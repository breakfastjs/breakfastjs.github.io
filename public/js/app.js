var $burger = $('#burger');
var $menu = $('#menu');

$burger.on('click', function() {
	$menu.toggle();
});