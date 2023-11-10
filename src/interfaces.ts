// PROGRAMAÇÃO ORIENTADA A OBJETOS
// Características observadas:
// Re-aproveitamento de código
// por meio da herança.
//	     /\
//	    /\/\
//	   /\/\/\
//	  /\/\/\/\
// Java implementa o polimorfismo
// através de interfaces diferente
// do C++ que o faz diretamente
// na classe pai com virtual
// e na filha com override.

// Interface sempre são abstratas.
// São descrições de algo que será
// implementado totalmente ou
// parcialmente em uma classe.
interface ITransacionavel
{
	saque( valor: number ): void;
	deposito( valor: number ): void;
};

/* Classes abstratas
 * sofrem a ação da herança.
*  As concretas diretamente
*  instânciam-se.
*/
abstract class Conta implements ITransacionavel
{
	protected balanco: number;

	constructor()
	{
		this.balanco = 0;
	}

	public saque( valor: number ): boolean
	{
		if ( (this.balanco - valor) > 0 )
		{
			this.balanco -= valor;
			return true;
		}
		else
		{
			return false;
		}
	}

	public deposito( valor: number ): void
	{
		this.balanco += valor;
	}

	public transferir( valor: number, destino: Conta ) : void
	{
		if( this.saque( valor ) == true )
		{
			destino.deposito( valor );
		}
		else
		{
			console.log( "transferência falhou" );
		}
	}

};

class ContaCorrente extends Conta
{
	protected imposto: number;

	constructor()
	{
		super();
		this.imposto = 10;
	}

	public pagarImposto(): void
	{
		this.balanco -= this.imposto;
	}
};

class ContaPoupanca extends Conta
{
	protected renda: number;

	constructor()
	{
		super();
		this.renda = 10;
	}

	public render(): void
	{
		this.balanco += this.renda;
	}

};

/* Investimento não é uma
*  Conta e não é capaz de
*  transferir()
*  tão pouco depositar().
*
*  Herdar de Conta resulta em um acoplamento ruim.
*  Logo utilizando A interface ao invés da herança
*  contornamos o problema.
*
*  Neste código ela foi usada na classe abstrata
*  para "Conta" e aqui em "Investimento".
*  */
class Investimento implements ITransacionavel
{
	public montanteInvestido: number;

	constructor()
	{
		this.montanteInvestido = 0.1;
	}

	public saque( valor: number ): boolean
	{
		if ( (this.montanteInvestido - valor) > 0 )
		{
			this.montanteInvestido -= valor;
			return true;
		}
		else
		{
			return false;
		}
	}

	public deposito( valor: number ): void
	{
		this.montanteInvestido += valor;
	}
	
};

class InterfaceGrafica
{
	public depositar( valor: number, contaAlvo: Conta ): void
	{
		console.log( "input> depósito" );

		//depósito comum a todos os tipos de conta.
		contaAlvo.deposito( valor );
	}
};

