function shake(){
	const icons = document.querySelectorAll('img');
	icons.forEach(icon => {
		icon.classList.add('shake');
	});
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

            //console.log(e.target);
            if (galleryItem.contains(e.target)){
            //if (e.target == galleryItem) {
                //console.log(e.target);
              // x = x + e.target.offsetLeft;
              // y = y + e.target.offsetTop;
              //console.log("inside!");
              //console.log(galleryItem.offsetWidth);
              //console.log(x);
              const { offsetWidth: width, offsetHeight: height } = galleryItem;
              const walkAmount = 100;
              //xWalk = 50 + (x / width * walkAmount);
              yWalk = 50 - (y / height * walkAmount);


              // add hover effect here instead
            }


            const galleryBG = galleryItem.firstElementChild;
            //console.log(galleryBG);

            const backgroundPos = window.getComputedStyle(galleryBG).backgroundPosition;
            galleryBG.style.backgroundPosition = `${xWalk}% ${yWalk}%`;
    });
}

window.addEventListener('mousemove', galleryParallax);
