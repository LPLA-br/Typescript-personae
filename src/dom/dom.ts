let data: Date = new Date();
let tituloDaPagina: HTMLElement | null = document.getElementById("titulo");

tituloDaPagina.innerText = "T y p e s c r i p t";
tituloDaPagina.style.userSelect = 'none';

let cores: string[] = ["0,255,0", "255,0,0", "0,0,255", "0,255,255", "255,255,0", "255,0,255"];
let posicao: number = 0;

function mudarCor(): void
{
	switch( posicao )
	{
		case (cores.length - 1):
			posicao = 0;
		default:
			posicao++;
	}
	tituloDaPagina.style.color = `rgb(${cores[posicao]})`;
}

tituloDaPagina.addEventListener('click', mudarCor);
console.log( `${data.getFullYear()}` );
