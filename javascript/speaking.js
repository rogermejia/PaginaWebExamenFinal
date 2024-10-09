	var quest = "";
	var answ = "";
	var css ="";
	var check=[];
	var sound = "";

	function escucha(id){
			let question = "#q"+id;
			let answer = "#a"+id;
			let button = "#b"+id;
	if ("webkitSpeechRecognition" in window) {
		  let speechRecognition = new webkitSpeechRecognition();
		  let final_transcript = "";

		  speechRecognition.continuous = false;
		  speechRecognition.interimResults = true;
		  speechRecognition.lang = "en-US";


		  speechRecognition.onstart = () => {
		  	$(button).removeClass("btn-light").addClass("btn-danger");
		  };
		  speechRecognition.onerror = () => {
		    $(button).removeClass("btn-danger").addClass("btn-light");
		  };
		  speechRecognition.onend = () => {
		  	$(button).removeClass("btn-danger").addClass("btn-light");
		  };


		  speechRecognition.start();


		  speechRecognition.onresult = (event) => {
		    let interim_transcript = "";

		    for (let i = event.resultIndex; i < event.results.length; ++i) {
		      
		      if (event.results[i].isFinal) {
		        
		        final_transcript += event.results[i][0].transcript;
		        speechRecognition.stop();
		        
		        verify(id, final_transcript);
		      } else {
		        //interim_transcript += event.results[i][0].transcript;
		      }
		    }
		    document.querySelector(question).value = final_transcript;
		  };

		  
		  
	} else {
	  alert("This function only works in Google Chrome");
	}
    
}


	function verify(id, transcript){
		document.getElementById("solve").style.display="block";

		quest = document.getElementById("q"+id).value;
		answ = document.getElementById("a"+id).innerHTML;


		if (transcript.toUpperCase()===answ.toUpperCase()){ 
			css= "background-color: green; color: white";
			check[id] = true;
		}else{
			css= "background-color: red; color: white";
			check[id] = false;
		};
		document.getElementById("q"+id).style = css;

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
