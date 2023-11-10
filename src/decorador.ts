// decoradores

function log( alvo )
{
    console.log( alvo );
}

function log2( prefixo: string )
{
    return ( target ) =>
    {
        console.log( `${prefixo} - ${target}` );
    }
}

@log
class Teste
{
}

@log2('teste')
class TesteB
{

}
