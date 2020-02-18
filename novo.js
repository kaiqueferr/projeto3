let ver = document.querySelector('.pes');

let poss = [["cristo","cristo redentor","america"],["torre","torre eifel","europa"],["coliseu","coliseu","europa"],["banespa","banespa","america"],["taj","taj mahal","asia"],["estatua","estatua da liberdade","america"],["muralha","muralha da china","asia"],["piramides","piramides do egito","africa"]];


let cap = [["1","2","3"],["4","5","6"],["7","8","9"]];



for (var i = 0; i < 8; i++) 
	{

		for (var j = 0; j < 3; j++) 
		{
			if(poss[i][j] == "america")
			{
				ver.innerHTML  = ver.innerHTML + i +  poss[i][0];
			}

		}

	}