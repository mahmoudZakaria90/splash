function gallery(){

	function mainWrap(){
		var x = document.createElement('div')
		x.id = 'main-wrap'
		x.className = 'main-wrap'
		return x
	}

	var mainWrapper = mainWrap()
	document.body.appendChild(mainWrapper)

	var boxQuan = 500
	var boxPerRow = 10
	var speed = 8
	

	for (var i = 1, k = 1 ; i < boxQuan; i++) {
		k++
		if(k === 18){
			k = 1
		}
		var newBox = document.createElement('div')
		var newBoxWidth = window.innerWidth / boxPerRow
		var randomTranslateZ = Math.floor(Math.random() * (boxQuan * 4))
		newBox.className = 'box'
		newBox.style.backgroundImage = "url(images/img"+k+".jpg)"
		mainWrapper.appendChild(newBox)
		newBox.style.width = newBoxWidth + 'px'
		newBox.style.height = newBoxWidth + 'px'
		newBox.style.transform = "translateZ("+randomTranslateZ+"px)"
		
	}

	document.getElementsByClassName('box')[7].innerHTML = '<video src="images/zekas.mp4 " autoplay="" loop=""></video>'

	function callback(e){
		var x = document.getElementById('main-wrap')
		var xStyle = window.getComputedStyle(x, null).getPropertyValue('perspective')
		var parsingXStyle = xStyle.substring(0,4) 
		x.setAttribute('style','perspective: ' + (parseInt(parsingXStyle) + ( e.wheelDelta  * speed )) + 'px')
		console.log(e.wheelDelta)
	}
	
	window.addEventListener('mousewheel', callback, false)


    //FireFox
    window.addEventListener('DOMMouseScroll',function(e){
    	var x = document.getElementById('main-wrap')
    	var xStyle = window.getComputedStyle(x, null).getPropertyValue('perspective')
    	var parsingXStyle = xStyle.substring(0,4)
    	x.setAttribute('style','perspective: ' + (parseInt(parsingXStyle) - e.detail  * 100 ) + 'px')

    }, false) 

}

window.onload = gallery