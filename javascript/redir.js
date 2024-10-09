var frame ="html5/home.html";

function send(){
	return sessionStorage.getItem("iframe");
}

function toHome(){
	frame ="html5/home.html";
	send();
}

function toReading(){
	sessionStorage.setItem("iframe", "html5/reading.html");
	location.href="reading.html";
}

function toWriting(){
	sessionStorage.setItem("iframe", "html5/writing.html");
	location.href="writing.html";
}

function toSpeaking(){
	sessionStorage.setItem("iframe", "html5/speaking.html");
	location.href="speaking.html";
}

function toListening(){
	sessionStorage.setItem("iframe", "html5/listening.html");
	location.href="listening.html";	
}

function toConversation(){
	sessionStorage.setItem("iframe", "html5/conversation.html");
	location.href="conversation.html";	
}

function toGrammar(){
	sessionStorage.setItem("iframe", "html5/grammar.html");
	location.href="grammar.html";	
}

function savedir() {
    sessionStorage.setItem("iframe", frame);
}

function iframeToGrammar(){
	document.getElementById("mainframe").src="html5/grammar.html";	
}

function iframeToListening(){
	document.getElementById("mainframe").src="html5/listening.html";	
}

function iframeToReading(){
	document.getElementById("mainframe").src="html5/reading.html";	
}

function iframeToSpeaking(){
	document.getElementById("mainframe").src="html5/speaking.html";	
}

function iframeToWriting(){
	document.getElementById("mainframe").src="html5/writing.html";	
}

function iframeToConversation(){
	document.getElementById("mainframe").src="html5/conversation.html";	
}