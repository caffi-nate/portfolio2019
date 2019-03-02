var numItems = document.querySelectorAll('.tools-container .tool-type').length;
var itemAt = 0;
var canMove = true;

const tools = document.querySelectorAll('.tools-container .tool-type');
const fullContainerWidth = tools.length * tools[0].offsetWidth;
const containerWidth = fullContainerWidth * 0.5; // half because we're only displaying one at a time
//console.log(fullContainerWidth);

function buttonClick(e){
    //console.log("canMove: " + canMove)

    const leftButton = document.querySelector('#left-button');
    const rightButton = document.querySelector('#right-button');
    if (e.target == leftButton){
        if (canMove){
            moveLeft();
            //canMove = false;
        }
    }
    else if (e.target == rightButton){
        if (canMove){
            moveRight();
            //canMove = false;
        }
    }
    console.log(itemAt);
}

function moveLeft(speed){
    let moveme;
    //console.log("Left!");

    const containerWidth = tools.length * tools[0].offsetWidth * 0.5; // half because we're only displaying one at a time
    console.log("Width: " + containerWidth);

    itemAt--;
    if (itemAt < 0) itemAt = tools.length-1;
    for (i = 0; i < tools.length; i++){
        //console.log(tools[i].offsetLeft / containerWidth);
        let newPosition = (i + itemAt) % tools.length;
        if (i < 0) newPosition = tools.length;
        //tools[i].style.left = `${0.1 * i * containerWidth}px`; // works
        tools[i].style.left = `${(newPosition * 588) % fullContainerWidth}px`;


        // hacky fix: makes cards slide behind others on way across
        let ZINDEX = 0;
        if (newPosition == 3) ZINDEX = -1000;
        tools[i].style.zIndex = `${ZINDEX}`;
    }
    canMove = true;
}

// this should be a timed function so that it can callback when complete
function moveRight(){
    let moveme;
    //console.log("right!");
    //const tools = document.querySelectorAll('.tools-container .tool-type');


    itemAt++;
    if (itemAt > tools.length-1) itemAt = 0;
    for (i = 0; i < tools.length; i++){
        //console.log(tools[i].offsetLeft / containerWidth);
        let newPosition = (i + itemAt) % tools.length;
        if (i > (tools.length-1)) newPosition = 0;
        //tools[i].style.left = `${0.1 * i * containerWidth}px`; // works
        tools[i].style.left = `${(newPosition * 588) % fullContainerWidth}px`;
        tools[i].style.zIndex = `-${newPosition}`;
        //console.log(tools[i].offsetLeft / containerWidth);

        let ZINDEX = 0;
        if (newPosition == 3) ZINDEX = -1000;
        tools[i].style.zIndex = `${ZINDEX}`;
    }
    canMove = true;
}

// $("#left-button").click(function(){
// 	if(canmove){
//     	moveleft();
//     	canmove = false;
//     }
// });
//
// $("#right-button").click(function(){
// 	if(canmove){
// 		moveright();
// 		canmove = false;
// 	}
// });




//
// function moveleft(speed){
// 	let moveme;
// 	if(itemat == numitems){
// 		moveme = $("#outside-container .items:nth-child("+numitems+")");
//     }
// 	else {
// 		moveme = $("#outside-container .items:nth-child("+(itemat+1)+")");
//     }
// 	swipeRight(moveme, speed);
//   	moveme = $("#outside-container .items:nth-child("+itemat+")");
//   	itemat--;
//     swipeRight(moveme, speed);
//     if(itemat < 1)
//     	itemat = numitems;
//     moveme = $("#outside-container .items:nth-child("+(itemat)+")");
//     moveme.css('left','-50%');
//     swipeRight(moveme, speed);
// }
//
// function swipeRight(el, speed){
// 	el.animate({
//       left: "+=50%"
//     }, speed, function(){
//     	canmove = true;
//     });
// }


//
// function moveright(speed){
// 	var moveme;
// 	moveme = $("#outside-container .items:nth-child("+itemat+")");
// 	itemat++;
// 	swipeLeft(moveme, speed);
// 	if(itemat > numitems)
// 		itemat = 1;
// 	moveme = $("#outside-container .items:nth-child("+itemat+")");
//     swipeLeft(moveme, speed);
//     console.log(itemat);
//     if(itemat == numitems)
//     	moveme = $("#outside-container .items:nth-child(1)");
//     else
//     	moveme = $("#outside-container .items:nth-child("+(itemat+1)+")");
//     moveme.css('left','100%');
//     swipeLeft(moveme, speed);
// }
// function swipeLeft(el, speed){
// 	el.animate({
//       left: "-=50%"
//     }, speed, function(){
//     	canmove = true;
//     });
// }


// don't want any of this lol fuck off
// function goto(num){
// 	var speed = 200;
// 	if(num > itemat){
// 		moveright(speed);
// 		setTimeout(function(){goto(num);},speed);
// 	}else if(num <itemat){
// 		moveleft(speed);
// 		setTimeout(function(){goto(num);},speed);
// 	}
// }
// $("#goto6").click(function(){
// 	if(canmove){
// 		goto(6);
// 	}
// });


document.addEventListener('click', buttonClick);
