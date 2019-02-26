function sectionSaturation(){
	const sections = document.querySelectorAll('section');
	const screen_height = window.innerHeight;
	const window_midpoint = window.pageYOffset + screen_height * 0.5;
	const window_top = window.pageYOffset;
	//console.log(window_top);
	let bodyRect = document.body.getBoundingClientRect();
	for (i = 0; i < sections.length; i++){
	//for (i = 0; i < 1; i++){
		let section = sections[i];
		let boundingBox = section.getBoundingClientRect();

		let section_midPoint = (boundingBox.top-bodyRect.top + boundingBox.bottom - bodyRect.bottom) * 0.5;


		let section_top = (boundingBox.top - bodyRect.top);
		//console.log(boundingBox.top);
		let distance = Math.abs(window_midpoint - section_midPoint);
		distance = Math.abs(window_top - section_top);
		//console.log(distance);
		//console.log(distance);
		//console.log(distance);
		// long way of clamping I guess
		let distance_adjusted = distance * 0.5;
		if (distance_adjusted > 100) distance_adjusted = 100;
		else if (distance_adjusted < 0) distance_adjusted = 0;

		distance_adjusted = 100;
		if (distance < (screen_height*0.5)){
			//console.log("Within proximity!" + i);

			distance_adjusted = 0; // test
			//console.log(distance);
			//`grayscale(${distance});`;
			//filter: grayscale(100%);
		}
		//section.style.filter = `grayscale(${distance_adjusted}%) opacity(${1 - 0.01 * distance_adjusted})`;
		//section.style.filter = `grayscale(${distance_adjusted}%)`;
		//section.style.filter = `sepia(${distance_adjusted}%)`;
		section.style.filter = `saturate(${100 - 0.9*distance_adjusted}%)`;

		// for each child, apply a blur filter
		// var children = section.children;
		// console.log(children);
		//galleryItems.forEach (galleryItem => {
		// for (i = 0; i < children.length; i++){
		//
		//
		// //children.forEach(child =>{
		// 	//console.log("is child");
		// 	children[i].style.filter = `blur(${4 * distance_adjusted}px)`;
		// }
		//filter = `blur(${4 * distance_adjusted}px)`;

		//console.log(Math.abs(midPoint - window_ypos));
		//console.log(boundingBox.top);
		//const section_ypos =
		//console.log("hello!");
	}
}

/// parallax gallery images according to mouse movement
function galleryParallax(e){
    let { offsetX: x, offsetY: y } = e;
    const galleryItems = document.querySelectorAll('#projects > ul > li');
    //console.log(galleryItems);
    galleryItems.forEach (galleryItem => {
            //console.log(e.target);

            let xWalk = 50;
            let yWalk = 50;
            let scale = 1;

            //console.log(e.target);
            if (galleryItem.contains(e.target)){
            //if (e.target == galleryItem) {
                //console.log(e.target);
              // x = x + e.target.offsetLeft;
              // y = y + e.target.offsetTop;
              //console.log("inside!");
              //console.log(galleryItem.offsetWidth);
              //console.log(x);
              scale = 1.2;
              const { offsetWidth: width, offsetHeight: height } = galleryItem;
              const walkAmount = 100;
              //xWalk = 50 + (x / width * walkAmount);
              yWalk = 50 - (y / height * walkAmount);


              // add hover effect here instead
            }


            const galleryBG = galleryItem.firstElementChild;
            //console.log(galleryBG);

            const backgroundPos = window.getComputedStyle(galleryBG).backgroundPosition;
            //galleryBG.style.backgroundPosition = `${xWalk}% ${yWalk}%`;
            //galleryBG.style.scale = `${scale}`;
    });
}

function shake(){
	const icons = document.querySelectorAll('img');
	icons.forEach(icon => {
		icon.classList.add('shake');
	});
}
