	var quest = "";
	var answ = "";
	var css ="";
	var check=[];
	var sound = "";
	function verify(){
		document.getElementById("solve").style.display="block";

		for (var i = 1; i < 7; i++) {
		quest = document.getElementById("q"+i).value;
		answ = document.getElementById("a"+i).innerHTML;

		if (quest.toUpperCase()===answ.toUpperCase()){ 
			css= "background-color: green; color: white";
			check[i] = true;
		}else{
			css= "background-color: red; color: white";
			check[i] = false;
		};
		document.getElementById("q"+i).style = css;
		}
		console.log("aja2");

		for (var j = 0; j < check.length; j++) {
			if(check[j]===false){
				sound=false;
				break;
			}else{
				sound=true;
			}
		}

		if(sound===true){
			document.getElementById("audioRight").play();
		}else{
			document.getElementById("audioWrong").play();
		}



	}


	function solve(){
		for (var i = 1; i < 7; i++) {
		answ = document.getElementById("a"+i).innerHTML;
		document.getElementById("q"+i).value = answ;
		}
		document.getElementById("audioSolve").play();
	}