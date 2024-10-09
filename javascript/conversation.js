var list = [1, 2, 3, 4];
var state =0;
var id = list[state];

function escucha(){
      let question = "#q"+list[state];
      let answer = "#a"+id;
      let button = "#b"+id;
      console.log($(question).val());
        console.log($(answer).text());
        console.log(list[state]);
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
            
            verify(final_transcript);
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


function verify(transcript){
		quest = document.getElementById("q"+list[state]).innerHTML;

		console.log(quest);
		console.log(transcript);

		var siml = similarity(quest, transcript); //added
		console.log(siml);

		if (siml>0.72){ 
			css= "background-color: green; color: white";
			document.getElementById("audioRight").play();

			state=state+1;

			let waiter = "#cont"+list[state];
			let customer ="#dark"+list[state];

			$(waiter).removeClass("hidden");
			$(customer).removeClass("hidden");
		}else{
			css= "background-color: red; color: white";
			document.getElementById("audioWrong").play();

		};
	}


function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}


function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
}