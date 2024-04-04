window.onload = function(){
	let nume = prompt("Nume:");
	let text = document.querySelector(".message");
		text.innerHTML +=" " +nume;
	let nrsecret = Math.floor(Math.random()*20)+1;
	console.log(nrsecret);
	let input = document.getElementById("guess");
	let verifica = document.getElementById("check");
	let div = document.querySelector(".number");
	let score = document.querySelector(".score");
	let incercari = document.querySelector(".hightscore");
	let s=20;
	let i=0;
	verifica.onclick=function(){
		if(i>7){text.innerHTML="Ai pierdut jocul";verifica.disabled=true;}
		i++;
		incercari.innerHTML=i;
		if(parseInt(input.value)==nrsecret){text.innerHTML="Ai ghicit nr!";document.body.style.backgroundColor="red";div.innerHTML=nrsecret;document.querySelector("#jucatori").innerHTML="Jucatorul " + nume + "a castigat jocul cu scorul " + s;}
		if(parseInt(input.value)>nrsecret){text.innerHTML="Prea mare";s--;score.innerHTML=s}
		if(parseInt(input.value)<nrsecret){text.innerHTML="Prea mic";s--;score.innerHTML=s}
	}
	
}