
		var i = 0; // Start point
		var images = [];
        var time = 2000;
        

		// Image List
		images[0] = './assets/img/brn1.jpg';
		images[1] = './assets/img/brn2.jpg';
		images[2] = './assets/img/brn3.jpg';
		images[3] = './assets/img/brn4.jpg';
		images[4] = './assets/img/brn5.jpg';
        
        
		// Change Image
		function changeImg(){
			document.getElementById("slide").src = images[i];
			if(i < images.length - 1){ i++;}
			 else { i = 0}
			setTimeout(changeImg, time);
		}
		window.onload = changeImg;