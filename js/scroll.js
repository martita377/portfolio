$(function() {
	if (screen.width > 768) {
		$("#about-title").addClass("animated");
		$(".all-icons").addClass("animated");
		$("#portfolio-title").addClass("animated");
		$("#carousel-example-generic").addClass("animated");
		$("#contact").addClass("animated");
		window.sr = ScrollReveal({ reset: true }); 
		sr.reveal('.animated');
	} else {
		$("#about-title").removeClass("animated");
		$(".all-icons").removeClass("animated");
		$("#portfolio-title").removeClass("animated");
		$("#carousel-example-generic").removeClass("animated");
		$("#contact").removeClass("animated");
	}
});