	const questReel =[1,2,3,4,5,6,7,8,9,10];
	const answerKey =["going to", "twice a day", "had arrived, would have missed", "are you cooking?", "lives", "had eaten", "been waiting", "was directed", "will have finished", "where the bus stop is"];
	let now =0;
	const current = questReel[now];


	function moveNext(){
	    $('.question'+questReel[now]).animate({
	    'margin-left' : "-100%",
	    'opacity' : '0',
	    },1000).hide();
	   now++;

	   $('.question'+questReel[now]).animate({
	    'margin-left' : "0%",
	    'opacity' : '1'
	    },1000).show();
	   buttons(now);
	}

	function movePrev(){
	    $('.question'+questReel[now]).animate({
	    'margin-left' : "100%",
	    'opacity' : '0',
	    },1000).hide();

	    $('.question'+questReel[now-1]).animate({
	    'margin-left' : "0%",
	    'opacity' : '1'
	    },1000).show();
	  now--;
	  buttons(now);
	}


	function buttons(num){
		if(num<1){
			$("#prev").hide();
			$("#next").show();
			$("#fauxprev").show();
			$("#fauxnext").hide();
		}else if(num>0&&num<=8){
			$("#prev").show();
			$("#next").show();
			$("#fauxprev").hide();
			$("#fauxnext").hide();
		}else if(num>8){
			$("#prev").show();
			$("#next").hide();
			$("#fauxprev").hide();
			$("#fauxnext").show();
		}
	}


	function init(){
		for (let i = 1; i < 10; i++) {
			var tag = '.question'+questReel[i];
			$(tag).animate({
	    'margin-left' : "100%",
	    'opacity' : '0',
	    },0).hide();	
		}
		buttons(now);
	}


	function checkIt(quest, answ){
		let attempt = $(".question"+(quest+1)+" table tbody tr .answ"+answ).html();

		if(attempt == answerKey[quest]){
			document.getElementById("audioRight").play();
			$(".question"+(quest+1)+" table tbody tr .answ"+answ).addClass("right");
			
		}else{
			document.getElementById("audioWrong").play();
			$(".question"+(quest+1)+" table tbody tr .answ"+answ).addClass("wrong");
		}
	}