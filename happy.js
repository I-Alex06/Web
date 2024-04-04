window.onload=function(){
	for(let i =0; i<20;i++){
		let imagine =document.createElement("img");
		imagine.src="sad.png";
		imagine.alt="text";
		document.getElementById("container").appendChild(imagine);
		imagine.onclick=function(){
		imagine.src="happy.png";
		document.querySelector("#scor").innerText=parseInt(document.querySelector("#scor").innerText)+1;
		imagine.onclick=null;
	};
	};
	document.querySelector("#game p").style.visibility='visible';
	
	
	setTimeout(function(){console.log("timeout");
	document.getElementById("container").remove();
	document.querySelector("h1").innerText="Game over!"},20000)
}