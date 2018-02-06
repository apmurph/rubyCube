var colors = [["red", "red", "red", "red"], 
			  ["green", "green", "green", "green"], 
			  ["blue", "blue", "blue", "blue"], 
			  ["yellow", "yellow", "yellow", "yellow"]];
var smallCubes1 = document.querySelectorAll(".bigCube1 div");
var smallCubes2 = document.querySelectorAll(".bigCube2 div");
var smallCubes3 = document.querySelectorAll(".bigCube3 div");
var smallCubes4 = document.querySelectorAll(".bigCube4 div");
var smallCubes = [smallCubes1, smallCubes2, smallCubes3, smallCubes4]
var bigCube = document.querySelectorAll(".bigCube");
var rotateOne = document.querySelectorAll(".rotateOne");
var options= document.getElementsByClassName("options");
var rotate= document.getElementsByClassName("step-1");



console.log(rotate[0]);

function init(){
	fillCubes();
	rotateAll();
	rotateBlocks();
	reset();
	newGame();	
};



function reset(){
	options[1].addEventListener("click", function(){
		colors = [["red", "red", "red", "red"], 
				  ["green", "green", "green", "green"], 
				  ["blue", "blue", "blue", "blue"], 
				  ["yellow", "yellow", "yellow", "yellow"]];
		fillCubes();
	});	
}

// console.log(bigCube);
// console.log(smallCubes[0]);
// console.log(smallCubes1)

// for (var i = 0; i < 4; i++) {
// 	var arr = i;
// 	var smallCube = smallCubes[i];
// 	var color = colors[i];
// 	console.log(arr);
// 	bigCube[i].addEventListener("click", function(){
// 			var firstColor = colors[arr][0];
// 			console.log(firstColor)
// 			colors[arr].shift();
// 			colors[arr].push(firstColor);
// 			console.log(colors[arr]);
// 			console.log(smallCube)
// 			for (var i = 0; i < smallCubes.length; i ++) {
// 				smallCube[i].style.backgroundColor = color[i];
// 		};
// 	});
// }
function rotateBlocks(){
	rotateOne[0].addEventListener("click", function(){
		var firstColor = colors[0][0];
		colors[0].shift();
		colors[0].push(firstColor);
		for (var i = 0; i < smallCubes1.length; i ++) {
				smallCubes1[i].style.backgroundColor = colors[0][i];
		};
	});
	rotateOne[1].addEventListener("click", function(){
		var firstColor = colors[1][0];
		colors[1].shift();
		colors[1].push(firstColor);
		for (var i = 0; i < smallCubes2.length; i ++) {
				smallCubes2[i].style.backgroundColor = colors[1][i];
		};
	});
	rotateOne[2].addEventListener("click", function(){
		var firstColor = colors[2][0];
		colors[2].shift();
		colors[2].push(firstColor);
		for (var i = 0; i < smallCubes3.length; i ++) {
				smallCubes3[i].style.backgroundColor = colors[2][i];
		};
	});
	rotateOne[3].addEventListener("click", function(){
		var firstColor = colors[3][0];
		colors[3].shift();
		colors[3].push(firstColor);
		for (var i = 0; i < smallCubes4.length; i ++) {
				smallCubes4[i].style.backgroundColor = colors[3][i];
		};
	});	
}
function fillCubes(){
	for (var i = 0; i < smallCubes1.length; i ++) {
			smallCubes1[i].style.backgroundColor = colors[0][i];
	};
	for (var i = 0; i < smallCubes2.length; i ++) {
			smallCubes2[i].style.backgroundColor = colors[1][i];
	};
	for (var i = 0; i < smallCubes3.length; i ++) {
			smallCubes3[i].style.backgroundColor = colors[2][i];
	};
	for (var i = 0; i < smallCubes4.length; i ++) {
			smallCubes4[i].style.backgroundColor = colors[3][i];
	};
}


function rotateAll(){
	rotate[0].addEventListener("click", function(){
		var newColors = [
		[colors[0][1], colors[1][1], colors[1][0], colors[0][2]], 
		[colors[1][3], colors[1][2], colors[2][2], colors[2][1]],
		[colors[3][2], colors[2][0], colors[2][3], colors[3][3]],
		[colors[0][0], colors[0][3], colors[3][1], colors[3][0]]
		];
		console.log(newColors);
		colors = newColors;		
		fillCubes();
	});
};

function newGame(){
	options[0].addEventListener("click", function(){
		reset();
		var random = Math.floor(Math.random() * 6);
		for (i = 0; i < random; i++){
			var newColors = [
			[colors[3][0], colors[0][0], colors[0][3], colors[3][1]], 
			[colors[0][2], colors[0][1], colors[1][1], colors[1][0]],
			[colors[2][1], colors[1][3], colors[1][2], colors[2][2]],
			[colors[3][3], colors[3][2], colors[2][0], colors[2][3]]
			];
			colors = newColors;
			fillCubes();
			var num = Math.floor(Math.random() * 4);
			var firstColor = colors[num][0];
			console.log(firstColor)
			colors[num].shift();
			colors[num].push(firstColor);
			for (var i = 0; i < smallCubes[num].length; i ++) {
					smallCubes[num][i].style.backgroundColor = colors[num][i];
			};
		}
	});
}

init();

$(function() {

	$('h1').fadeOut(2500);

	$('.step-1').hover(function(){
		$('.step-2').css({'opacity': '1', 'transform': 'scale(3)'});	
	});
	
});

