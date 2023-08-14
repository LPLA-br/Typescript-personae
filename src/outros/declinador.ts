/* Declinador de palavras */

class Declinador
{
    
    protected primeira: object;
    protected segunda: object;
    protected terceira: object;
    protected quarta: object;
    protected quinta: object;

    constructor ()
    {
        // Modelos de declinação

        this.primeira =
        {
            flags: { D: 0, Ab: 0 },
            singular:
            {
                N: "a",
                G: 'ae',
                D: 'ae',
                Ac: 'am',
                Ab: 'ā'
            },
            plural:
            {
                N: 'ae',
                G: 'arum',
                D: ['is','abus'],
                Ac: 'as',
                Ab: ['is','abus']
            }
        }

        /*masculino neutro vir puer*/
        this.segunda =
        {
            flags: { N: 0 },
            singular:
            {
                N: ['us','um','ir', 'er'],
                G: 'i',
                D: 'o',
                Ac: 'um',
                Ab: 'o'
            },
            plural:
            {
                N: ['i','a','i','i'],
                G: 'orum',
                D: 'is',
                Ac: 'os',
                Ab: 'is'
            }
        }

        this.terceira =
        {
            flags: { N: 0, G: 0 },
            singular:
            {
                N: ['?','?','e'],
                G: 'is',
                D: 'i',
                Ac: 'em',
                Ab: 'e'
            },
            plural:
            {
                N: ['es','a','ia'],
                G: ['ium','um'],
                D: 'ibus',
                Ac: 'es',
                Ab: 'ibus'
            }
        }

        this.quarta =
        {
            flags: { N:0, G: 0 },
            singular:
            {
                N: ['us','ū'],
                G: 'us',
                D: 'ui',
                Ac: ['um','ū'],
                Ab: 'ū'
            },
            plural:
            {
                N: ['us','ua'],
                G: 'ūum',
                D: 'ibus',
                Ac: ['us','ua'],
                Ab: 'ibus'
            }
        }

        this.quinta =
        {
            modo: 0,
            singular:
            {
                N: 'es',
                G: 'ei',
                D: 'ei',
                Ac: 'em',
                Ab: 'e'
            },
            plural:
            {
                N: 'es',
                G: 'erum',
                D: 'ebus',
                Ac: 'es',
                Ab: 'ebus'
            }

        }

    }
}

let inst: Declinador = new Declinador();

