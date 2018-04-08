$("#container").mousemove(function(event) {
  moveItemTo(event, ".one", -300);
  moveItemTo(event, ".two", -150);
  moveItemTo(event, ".three", -100);
  moveItemTo(event, "img", -30);
  moveItemTo(event, ".text-quote", -30);
});

function moveItemTo(event, target, movement) {
  var $this = $("#container");
  var relX = event.pageX - $this.offset().left;
  var relY = event.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
