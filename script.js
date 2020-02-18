let ver = document.querySelector('.testr');
let v = document.querySelector('html');
let up = document.querySelectorAll('.uper');
let l1 = document.querySelectorAll('.lt1');
let l2 = document.querySelectorAll('.lt2');

var i = 1;
var e = 1;
var n = 1;
var j = 0;
var myVar = setInterval(myTimer, 2000);

up[0].classList.add('uper2');

l1[0].classList.remove('lt1');
l1[0].classList.add('uper2');

l2[0].classList.remove('lt2');
l2[0].classList.add('uper2');

 

 function myTimer()
 {
 		if(i>2)
 		{
 			i=0;
 			e=0;
 			up[2].classList.remove('uper2');

 			l1[2].classList.remove('uper2');
    	 	l1[2].classList.add('lt1');

    	 	l2[2].classList.remove('uper2');
    	 	l2[2].classList.add('lt2');
 		}

 		up[0].classList.remove('uper2');
 		up[e].classList.remove('uper2');
    	up[i].classList.add('uper2');

    	l1[0].classList.remove('uper2');
    	l1[0].classList.add('lt1');
 		l1[e].classList.remove('uper2');
 		l1[e].classList.add('lt1');
 		l1[i].classList.remove('lt1');
    	l1[i].classList.add('uper2');


    	l2[0].classList.remove('uper2');
    	l2[0].classList.add('lt2');
 		l2[e].classList.remove('uper2');
 		l2[e].classList.add('lt2');
 		l2[i].classList.remove('lt2');
    	l2[i].classList.add('uper2');
    	
    	if(i>n)
    	{
    		e++;
    	}
    	i++;
    	n = 0; 	
 }

window.onscroll = function (oEvent) 
{
	if(j == 0)
	{
		var y = v.scrollTop;
		ver.innerHTML = y;
		if (y < 600)
		{
			ver.classList.remove('testr2');
	    	ver.classList.add('testr');
		}
		else
		{
			ver.classList.remove('testr');
	    	ver.classList.add('testr2');
		}
	}
	
}

function confg()
{
	let no = document.querySelector('.nots');
	let ye1 = document.querySelector('.cristo');
	let ye2 = document.querySelector('.later');
	let ye = document.querySelector('.upx');


	ye.style.marginTop = "100px";
	no.classList.remove('nots');
	ye1.classList.add('nots');
	ye2.classList.add('nots');
	j = 1;
	ver.classList.add('testr2');

}

function busca()
{
	confg();

	let dsr = document.getElementById('buss');
	let conte = document.querySelectorAll('.geral');
	let poss = [["cristo","cristo redentor","america"],["torre","torre eifel","europa"],["coliseu","coliseu","europa"],["banespa","banespa","america"],["taj","taj mahal","asia"],["estatua","estatua da liberdade","america"],["muralha","muralha da china","asia"],["piramides","piramides do egito","africa"]];

	for (var i = 0; i < 8; i++) 
	{

		for (var j = 0; j < 3; j++) 
		{
			
				conte[i].classList.add('nots');

		}

	}

	for (var i = 0; i < 8; i++) 
	{

		for (var j = 0; j < 3; j++) 
		{
			if(poss[i][j] == dsr.value)
			{
				conte[i].classList.remove('nots');
			}

		}

	}

	// for (var i = 0; i < 8; i++) 
	// {

	// 	for (var j = 0; j < 3; j++) 
	// 	{

	// 		if(dsr.value != poss[j][i])
	// 		{
	// 			conte[j].classList.add('nots');
	// 	    }

	// 	}

	// }

}