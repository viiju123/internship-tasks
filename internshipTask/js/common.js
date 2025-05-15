window.addEventListener("DOMContentLoaded", function () {
  const internship = document.getElementById("internship");
  const about = document.getElementById("about");
  const courses = document.getElementById("courses");
  const home = document.getElementById("home");
  const btn3 = document.getElementById("btn-3");
  const back = document.getElementById("back1-button");
  const contact = document.getElementById("contact");
  
  if (internship) internship.onclick = () => window.location.href = "../html/internships.html";
  if (about) about.onclick = () => window.location.href = "../html/about.html";
  if (courses) courses.onclick = () => window.location.href = "../html/courses.html";
  if (home) home.onclick = () => window.location.href = "../html/landingpage.html";
  if (btn3) btn3.onclick = () => window.location.href = "../html/coursedetails.html";
  if (back) back.onclick = () => {
    window.location.href = "../html/courses.html";
  };
  window.onload = () => {
    const contactBtn = document.getElementById("contact");
    const footer = document.getElementById("contact-section");
    const phone = document.querySelector(".phone p");
    const email = document.querySelector(".email p");
  
    if (!contactBtn || !footer || !phone || !email) return;
  
    contactBtn.onclick = () => {
      // Scroll smoothly
      footer.scrollIntoView({ behavior: "smooth" });
        [phone, email].forEach(el => {
        el.style.color = "#fff";
        el.style.textShadow = "0 0 8px #00ffcc, 0 0 12px #00ffcc";
      });
  
      
      setTimeout(() => {
        [phone, email].forEach(el => {
          el.style.textShadow = "none";
        });
      }, 2000);
    };
  };
  
});
  // zoom animation
	const observer3 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			console.log(entries);
			if (entry.isIntersecting) {
				entry.target.classList.add("zoomIn");
				entry.target.classList.remove("no_animate_zoom");
			} else {
				entry.target.classList.remove("zoomIn");
				entry.target.classList.add("no_animate_zoom");
			}
		});
	}, { threshold: 0.5 });
	let animatableZoom = document.querySelectorAll(".no_animate_zoom");
	animatableZoom.forEach(element => {
		observer3.observe(element);
	});




	// fade left animation
const observer4 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate_right");
			} else {
				// entry.target.classList.remove("animate_right");
			}
		});
	}, { threshold: 0.5 });

	let animatableRight = document.querySelectorAll(".no_animate_right");
	animatableRight.forEach(element => {
		observer4.observe(element);
	});
 $(document).ready(function () {
    // Initially hide dropdown content
    $(".text-lists").hide();

    // Toggle when arrow is clicked
    $(".dfss .up-icon").click(function () {
      const dropdown = $(this).closest(".dfss").next(".text-lists");

      // Toggle dropdown with slide
      dropdown.slideToggle(200);

      // Rotate the icon
      $(this).find("img").toggleClass("rotated");
    });
  });

	
	

	
  