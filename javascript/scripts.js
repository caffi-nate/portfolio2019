function loadProjectBackgrounds(){
    //const galleryItems = document.querySelectorAll('#projects > ul > li > .project-background');
	const galleryItems = document.querySelectorAll('.project > a > .project-background');
    for (i = 0; i < galleryItems.length; i++){
        galleryItems[i].style.backgroundImage = (`url("images/web-project-${i}.png")`);
    }
}

function calculateSectionProximity(e){
    //e.preventDefault(); // prevent scrolling behavior
	const sections = document.querySelectorAll('.section-container');
	const screen_height = window.innerHeight;
    //console.log(screen_height);
	const window_midpoint = window.pageYOffset + screen_height * 0.5;
	const window_top = window.pageYOffset;
	let bodyRect = document.body.getBoundingClientRect();
	for (i = 0; i < sections.length; i++){
    //for (i = 0; i < 1; i++){
		let section = sections[i];
		let boundingBox = section.getBoundingClientRect();
		let section_midPoint = (boundingBox.top-bodyRect.top + boundingBox.bottom - bodyRect.bottom) * 0.5;
        let section_bottom = (boundingBox.bottom - bodyRect.bottom);
		let section_top = (boundingBox.top - bodyRect.top);
		let distance = Math.abs(window_midpoint - section_midPoint);

        let section_height = boundingBox.bottom - boundingBox.top;
		//distance = Math.abs(window_top - section_top) / screen_height;
        //distance = (window_top - section_top) / screen_height;
        distance = (window_top - section_top) / section_height;
        //console.log(screen_height);
        //console.log(section_height);
		// long way of clamping I guess
		// let distance_adjusted = distance * 0.5;
		// if (distance_adjusted > 100) distance_adjusted = 100;
		// else if (distance_adjusted < 0) distance_adjusted = 0;
        //
		// distance_adjusted = 100;
		// if (distance < (screen_height*0.5)){
		// 	distance_adjusted = 0; // test
		// }
        //console.log(`${i}: ${Math.abs(distance)}`);
		//section.style.filter = `saturate(${100 - 0.9*distance_adjusted}%)`;
        //section.style.transform = `rotate3d(1,0,0,45deg)`;
        //section.style.transform = `rotate3d(1,0,0,${distance * 90}deg)`;
        let child = section.firstElementChild;
        //console.log(child);
        child.style.transform = `rotate3d(1,0,0,${distance * 90}deg)`;
        child.style.visibility = (Math.abs(distance) > 1) ? `hidden` : `visible`;
        child.style.transformOrigin = (distance < 0) ? `top` : `bottom`;
	}
}

window.addEventListener('scroll', calculateSectionProximity);
loadProjectBackgrounds();
//window.addEventListener('mousemove', galleryParallax);

function submitClick(e){
	const submitButton = document.querySelector('input[type=submit]');
	if (submitButton){
		console.log(submitButton);
		e.preventDefault(); // don't reload the page on click, we'll do something else instead
	}
}


// scrolling background: contact page
let bgTimer = 0;
let rotationAngle = 0;
let contactContainer = document.querySelector('#contact');
let aboutContainer = document.querySelector("#about-bg");
//let title = document.querySelector('#contact h3'); // debug coordinates with this if necessary
setInterval(function scrollBackground(){
	//bgTimer = (bgTimer + 0.025) % 100; // works for percents, not px
	bgTimer = (bgTimer + 0.5) % 200; // later: replace 200 with the image's width
	rotationAngle = (rotationAngle + 0.1) % 360;
	contactContainer.style.backgroundPosition = `${bgTimer}px ${bgTimer}px`;

	// rotating background: about page
	aboutContainer.style.transform = `rotate(${rotationAngle}deg)`;

	//title.innerHTML = Math.floor(bgTimer); // bug: jerky after we hit 100
}, 10);






const toolTip = document.querySelector('#skill-description');
const toolP = toolTip.firstElementChild;
const toolIcons = document.querySelectorAll('.tool-icon');

function setToolTip(e){
		// set the tool tip box content to the image's alt tag
		if(e.target.classList.contains('tool-icon')){
			let toolText = "";
			for (i = 0; i < toolIcons.length; i++){
				if (toolIcons[i] == e.target){
					toolText = e.target.alt;
				}
			}
			toolP.innerHTML = toolText;
			toolP.classList.add("tool-tip-show");
		}
}
function resetToolTip(e){
		toolP.classList.remove("tool-tip-show");
}


window.addEventListener('mouseover', setToolTip);
window.addEventListener('mouseout', resetToolTip)
window.addEventListener('click', submitClick);
