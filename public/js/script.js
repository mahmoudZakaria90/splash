(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
	init: function(){
		
		var createBoxes = function(){
			var parent = document.getElementById('newMeWrap');
			var parentHeight = parent.offsetHeight;
			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			var boxWidth = 200;
			var boxHeight = 180;


			var calcQuantaityWidth = function(){
				return Math.floor(windowWidth / boxWidth)
			}

			var calcQuantaityHeight = function(){
				return Math.floor(windowHeight / boxHeight)
			}

			var collection = calcQuantaityWidth() * calcQuantaityHeight()

			var i = 0;
			while (i < collection) {
				var newBox = document.createElement('div');
				newBox.className = "new-box new-box" + i;
				newBox.style.width = (windowWidth / calcQuantaityWidth())  + 'px'
				newBox.style.height = (windowHeight / calcQuantaityHeight())  + 'px'
				parent.appendChild(newBox);
				i++
			}

			function putImg(){
				
				var el = document.getElementsByClassName('new-box');
				if(el[7]){
					el[7].innerHTML = '<video src="images/zekas.mp4 " autoplay="" loop=""></video>'
				}
				for (var i = 1,k = 1; i < collection + 1; i++ ) {
					k++
					if(k === 18){
						k = 1
					}
					if(el[i]){
						el[i].style.backgroundImage = "url(images/img"+k+".jpg)"
					}
					if(i % 4 === 0 ){
						
						el[i].style.backgroundImage = "none"
						
					}
					
				}
				
			}
			putImg()
		}
		
		createBoxes()
	
	}
	
}
},{}],2:[function(require,module,exports){
//Big object for all js work
var gv = {
	direction: function(){
	var doc = document.documentElement;
		var docLang = doc.getAttribute('lang');
		if (docLang == 'en'){
			doc.setAttribute('dir','ltr');
		}else{
			doc.setAttribute('dir','rtl');
		}
	},
	//burger
	burger: function(){
		var trigger = document.getElementsByClassName('header-burger');
		var triggerWrap = [];
		
		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i]);
		}

		triggerWrap.forEach(function(item){
			var parentTrigger = item.parentNode;
			var NextOfTrigger = parentTrigger.nextElementSibling;
			var state = false;
			item.onclick = function(){
				
				if(!state){
					state = true;
					NextOfTrigger.style.height = NextOfTrigger.scrollHeight + 'px';
					parentTrigger.classList.add('active');
				}else{
					state = false;
					NextOfTrigger.style.height = 0 + 'px';
					parentTrigger.classList.remove('active');
				}
			}
		})
	},
	
	//slider
	sliderInit: function(){
		//ingradients
		var sliderNext = document.getElementsByClassName('slider-next');
		var sliderPrev = document.getElementsByClassName('slider-prev');
		var sliderAuto = document.querySelectorAll('[slider-auto]');
		
		var sliderNextWrap = [];
		var sliderPrevWrap = [];
		var sliderIndexWrap = [];
		var sliderAutoWrap = [];

		var interval = 3000;
		

		
	
		
		//instructions

		//NextSlider
		for(var i = 0; i < sliderNext.length; i++){
			sliderNextWrap.push(sliderNext[i]);
			sliderIndexWrap.push(0);
		}

		//PrevSlider
		for(var i = 0; i < sliderPrev.length; i++){
			sliderPrevWrap.push(sliderPrev[i]);
			sliderIndexWrap.push(0);
		}

		//Slider Auto
		for(var i = 0; i < sliderAuto.length; i++){
			sliderAutoWrap.push(sliderAuto[i]);
		}

		
		sliderAutoWrap.forEach(function(item,index,array){
			var parent = item.children[1];
			var slides = parent.children;

			if(item){
				var timer = setInterval(function(){
					if(sliderIndexWrap[index] === slides.length - 1){
						sliderIndexWrap[index] = 0
						parent.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
					}else{
						sliderIndexWrap[index] ++
						parent.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
					}
				},interval)
			}

		})

		sliderNextWrap.forEach(function(item,index,array){
			var parent = item.parentNode;
			var sibling = parent.nextElementSibling;
			var slides = parent.nextElementSibling.children;

			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === slides.length - 1){
					sliderIndexWrap[index] = 0
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
				}else{
					sliderIndexWrap[index] ++
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
				}

			})
				
		})

		sliderPrevWrap.forEach(function(item,index,array){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = parent.nextElementSibling.children

			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === 0){
					sliderIndexWrap[index] = slides.length - 1;
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
					
				}else{
					sliderIndexWrap[index] --;
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%';
			
				}
			})
			
		})

		
	},

	dropdown: function(type){
		var trigger = document.getElementsByClassName('header-dropdown');
		var triggerWrap = [];

		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i]);
		}
		triggerWrap.forEach(function(item){
			item.addEventListener(type,function(e){
				e.preventDefault();
				if(item.className == "header-dropdown"){
					item.classList.add('active');
				}else if (item.className == "header-dropdown active"){
					item.classList.remove('active');
				}
				item.parentNode.parentNode.style.height = 'auto';// for responsive
			},false)

			
				document.body.addEventListener(type,function(){
						item.classList.remove('active');
				},true)
			
		})
	},

	//Dom Manipulation
	addClass: function(item,className){
		var el = document.querySelector(item);
		el.className += ' ' + className;
	},
	removeClass: function(item,className){
		var el = document.querySelector(item);
		el.classList.remove(className);
	},
	append: function(item,txt){
		var el = document.querySelector(item);
		el.innerHTML += txt;
	},
	before: function(item,target){
		var el = document.querySelector(item);
		var parentEl = el.parentNode;
		var tgt = document.querySelector(target);
		parentEl.insertBefore(el,tgt);
	},
	create: function(item,parent){
		var parentEl = document.querySelector(parent);
		var newEl = document.createElement(item);
		parentEl.appendChild(newEl);
	}
}

module.exports = gv
},{}],3:[function(require,module,exports){
//Custom .js

var gv = require("./give.js");
var custom = require('./custom.js')

//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
	gv.sliderInit();
	gv.dropdown('click');
	custom.init();
})




},{"./custom.js":1,"./give.js":2}]},{},[3]);
