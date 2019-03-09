function loadProjectBackgrounds(){
    //const galleryItems = document.querySelectorAll('#projects > ul > li > .project-background');
	const galleryItems = document.querySelectorAll('.project > a > .project-background');
    for (i = 0; i < galleryItems.length; i++){
        galleryItems[i].style.backgroundImage = (`url("images/web-project-${i}.png")`);
    }
}

loadProjectBackgrounds();
//window.addEventListener('mousemove', galleryParallax);

function submitClick(e){
	const submitButton = document.querySelector('input[type=submit]');
	if (submitButton){
		//console.log(submitButton);
		e.preventDefault(); // don't reload the page on click, we'll do something else instead
	}
}


// scrolling background: contact page
let bgTimer = 0;
let rotationAngle = 0;
let contactContainer = document.querySelector('#contact');
let aboutContainer = document.querySelector("#about-bg");
//const bgImage = document.getElementById("#contact");

//const spriteWidth = parseInt((getComputedStyle(contactContainer).width).replace(/px/,""));
//console.log(contactContainer.style.backgroundImage);
//let title = document.querySelector('#contact h3'); // debug coordinates with this if necessary
setInterval(function scrollBackground(){
	//bgTimer = (bgTimer + 0.025) % 100; // works for percents, not px
	bgTimer = (bgTimer + 0.5) % 500;//200; // later: replace 200 with the image's width
	rotationAngle = (rotationAngle + 0.1) % 360;
	contactContainer.style.backgroundPosition = `${bgTimer}px ${bgTimer}px`;

	// rotating background: about page
	aboutContainer.style.transform = `rotate(${rotationAngle}deg)`;

	//title.innerHTML = Math.floor(bgTimer); // bug: jerky after we hit 100
}, 10);






const toolTip = document.querySelector('#skill-description');
const toolP = toolTip.firstElementChild;
const toolIcons = document.querySelectorAll('.icon-container');
const toolImages = document.querySelectorAll('.tool-icon');

function containsExt(target, node){
	if (node.contains(target)){
		console.log("hello");
		return true;
	}
	else if (target == node){
		console.log("is the node");
		return true;
	}
	else {
		//console.log(target);
		//console.log(node);
	}
}

function setToolTip(e){
		// set the tool tip box content to the image's alt tag

		//if (e.target.contains(toolIcons[0])) console.log("Hello");

		//	console.log()
		//} console.log("containsExt");


		//if(e.target.contains('img')){ // was tool-icon. // icon-container
		//if (containsExt(e.target, toolIcons[0])){
		//console.log("contains");

			let toolText = "";
			for (i = 0; i < toolIcons.length; i++){
				if (containsExt(e.target, toolIcons[i])) {
					//console.log("Getting alt tag..." + i);
					toolText = toolImages[i].alt;//e.target.alt;//"Hello";
					const toolsArray = toolText.split(":");
					//console.table(arr);
					//const toolName = tool

					toolP.innerHTML = `${toolsArray[0]}<h6>${toolsArray[1]}</h6>`; //toolText;
					toolP.classList.add("tool-tip-show");
				}
			}


		//}
}
function resetToolTip(e){
		toolP.classList.remove("tool-tip-show");
}


window.addEventListener('mouseover', setToolTip); // was mouseover
window.addEventListener('mouseout', resetToolTip)
window.addEventListener('click', submitClick);
