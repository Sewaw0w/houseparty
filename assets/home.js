// Lottie Animations

lottie.loadAnimation({
	container: document.getElementById("wave-animation").children[0],
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  path: './assets/animation/wave.json'
});

lottie.loadAnimation({
	  container: document.getElementById("values-animation").children[0],
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  path: './assets/animation/values.json'
});

// Platform Specific Stuff

var linkMailForm = document.getElementById("link-mail-form-wrapper")
var ctaButton = document.getElementById("cta-button")

if (platform.os.family == "OS X") {
	linkMailForm.style.display = "none"
	
	if (parseInt(platform.os.version.split(".")[1]) < 11) {
		document.getElementById("old-os-warning").style.display = "block"
	}
	
} else {
	linkMailForm.style.display = "flex"
	ctaButton.href = "https://get.houseparty.com/lVXXYvMcDO"
}
