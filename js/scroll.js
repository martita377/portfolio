$(function() {
	if (screen.width > 768) {
		$("#about-title").addClass("animated");
		$("#portfolio-title").addClass("animated");
		$("#contact").addClass("animated");
		window.sr = ScrollReveal({ reset: true }); 
		sr.reveal('.animated');
	} else {
		$("#about-title").removeClass("animated");
		$("#portfolio-title").removeClass("animated");
		$("#contact").removeClass("animated");
	}
});