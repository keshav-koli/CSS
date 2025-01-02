// let main=document.querySelector('#Main');
// let pnew=document.createElement('p');

// pnew.innerHTML='This is a new paragraph';

// let thirdP=main.querySelector('p:nth-child(4)');
// main.insertBefore(pnew,thirdP);

// const mainDiv = document.getElementById('Main');
// const thirdParagraph = mainDiv.querySelector('p:nth-child(3)');

// // Create a new paragraph element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph';

// // Insert after the 3rd paragraph
// thirdParagraph.insertAdjacentElement('afterend', newParagraph);

// Consider the code below:
function customobject(){
	this.value = 2;
}
customobject.prototype.inc = function(){
	this.value++;
}

function changer(func){
	return func();
}

var o = new customobject();
console.log(o.value);
// alert(o.value); // o.value = 2

o.inc();
console.log(o.value);
// alert(o.value); // o.value = 3

console.log(changer(o.inc));
console.log(o.value);
// console.log(this);
console.log(o.inc());


// alert(o.value); // sorry, still just 3

// Consider the code below:

// function move(){
//     a=12;
//     console.log(this.a);

// setTimeout(function(){
//     console.log(this.a.);
// },1000);
// }

// move();

// var a = document.getElementById('click');
// 		a.onclick = function() {
// 			console.log(this.innerHTML)    //#1
// 			setTimeout( function() {
// 				console.log( this.innerHTML ); // #2
// 			}, 1000);
// 		};

// if (typeof undefined === typeof NULL) {
//   console.log('true');
//   true;
// } else {
//     console.log('false');
// }

// Consider the code below:
// var divs = document.getElementsByTagName("div");

// 	for ( var i = 0; i<divs.length; i++ ) {
// 		divs[i].appendChild(document.createElement("div"));
	// }

    // for ( var i = 0; i < 3; i++) {
    //     setTimeout( function() { console.log(i); }, i * 1000 );  
    //   }

    //   Consider the code below:
const promiseNew = new Promise((resolve, reject) => {
  console.log('One');
});
promiseNew .then(() => {
  console.log('Three');
});
console.log('Two');