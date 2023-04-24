let numP = "";
let signo = "";
let numRes = 0;
let numTemp = 0;
let setPunto = false;
let setOperacion = false;
let setSegundoNumero = false;
let setAnteriorIgual = false;

function toggleMusica()
{
    document.getElementById("botonMusica").style.backgroundColor = "rgb(110, 255, 171)";
    document.getElementById("botonMusica").style.borderColor = "rgb(85, 196, 131";
    document.getElementById("botonMusica").innerHTML = "Music - ON";
    document.getElementById("musicaFondo").play();
}

function insertarElemento(numP)
{
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setOperacion)
    {
        setSegundoNumero = true;
        setOperacion = false;
        document.getElementById("pantalla").value = "";
    }
    if(setAnteriorIgual)
    {
        document.getElementById("pantalla").value = "";
        setAnteriorIgual = false;
    }
    if((!setPunto || numP != ".") && document.getElementById("pantalla").value.length < 11)
    {
        if(numP == ".")
        {
            setPunto = true;
            if(document.getElementById("pantalla").value.substring(0, 1) == "")
            {
                document.getElementById("pantalla").value += "0";
            }
        }
        else
        {
            if(document.getElementById("pantalla").value == "0")
            {
                document.getElementById("pantalla").value = "";
            }
        }
        document.getElementById("pantalla").value += numP;
    }
}

function operacion(numP)
{
    setPunto = false;
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setSegundoNumero)
    {
        var realizarOperacion = Module.cwrap(
            "realizarOperacion",
            "Number",
            ["string", "number", "number"]
        );
        document.getElementById("pantalla").value = realizarOperacion(signo, numRes, document.getElementById("pantalla").value);
        signo = numP;
    }
    if(numP != "=")
    {
        setOperacion = true;
        numRes = Number(document.getElementById("pantalla").value);
        signo = numP;
    }
    if(numP == "=")
    {
        setSegundoNumero = false;
        setOperacion = false;
        setAnteriorIgual = true;
    }
}

function eliminarElemento()
{
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setOperacion)
    {
        setOperacion = false;
        document.getElementById("pantalla").value = "";
    }
    if(setAnteriorIgual)
    {
        document.getElementById("pantalla").value = "";
        setAnteriorIgual = false;
    }
    else
    {
        if((document.getElementById("pantalla").value.substring(document.getElementById("pantalla").value.length - 1, document.getElementById("pantalla").value.length)) == ".")
        {
            setPunto = false;
        }
        document.getElementById("pantalla").value = document.getElementById("pantalla").value.substring(0, document.getElementById("pantalla").value.length - 1);
    }
    
}
function eliminarPantalla()
{
    document.getElementById("sonidoBoton").currentTime = 0.05;   
    document.getElementById("sonidoBoton").play();
    document.getElementById("pantalla").value = "";
    setSegundoNumero = false;
    setOperacion = false;
    setPunto = false;
}