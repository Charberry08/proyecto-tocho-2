let numeroTiempo = 0;

let contadorPeces = 0;

let pescaCoordX = 0;
let pescaCoordY = 0;

let coordX = 0;
let coordY = 0;

let estadoAnzuelo = false;
let estadoPantallaNegra = false;
let estadoJuegoPesca = false;
let estadoMusicaDia = false;

let cania = document.getElementById("cania");
let anzuelo = document.getElementById("anzuelo");
let cuerda = document.getElementById("cuerda");

let areaPesca = document.getElementById("areaPesca");

function getNumeroRandom(maximo)
{
    return Math.floor(Math.random() * maximo);
}

function iniciarPantallaInicio()
{
    estadoPantallaNegra = true;
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
    numeroTiempo = 0;
    document.getElementById("musicaInicio").play();
    document.getElementById("pantallaNegra").style.display = "none";
    document.getElementById("pantallaTitulo").style.display = "inline";
}

function iniciarJuego()
{
    estadoJuegoPesca = true;
    document.getElementById("musicaInicio").pause();
    document.getElementById("musicaPescaDiaLarga").play();
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_day.png)";
    numeroTiempo = 3;
    document.getElementById("pantallaTitulo").style.display = "none";
    document.getElementById("juegoPesca").style.display = "inline";
}

document.addEventListener('mousemove', function(e){
    if(!estadoAnzuelo)
    {
        coordX = e.clientX * 100 / window.innerWidth;
        coordY = e.clientY * 100 / window.innerHeight;

        if(coordX > 50)
        {
            cuerda.style.left = (window.innerWidth * 0.0655) - 78 + "px";
            anzuelo.style.left = (window.innerWidth * 0.0655) - 90.5 + "px";
            cania.style.transform = "scaleX(-1)";
            cania.style.left = "28%";
        }
        else
        {
            cuerda.style.left = (window.innerWidth * 0.3855) + 300 + "px";
            anzuelo.style.left = (window.innerWidth * 0.3855) + 287.5 + "px";
            cania.style.transform = "scaleX(1)";
            cania.style.left = "60%";
        }
    }
})

areaPesca.addEventListener('mousemove', function(e){
    pescaCoordX = e.clientX - (window.innerWidth * 0.2145);
    pescaCoordY = e.clientY - (window.innerHeight * 0.6);
})

function lanzarAnzuelo()
{
    if(estadoAnzuelo)
    {
        if(coordX > 50)
        {
            cuerda.style.left = (window.innerWidth * 0.0655) - 78 + "px";
            anzuelo.style.left = (window.innerWidth * 0.0655) - 90.5 + "px";
            cuerda.style.rotate = "-90deg";
            anzuelo.style.top = "auto";
            anzuelo.style.bottom = "500px";
            cuerda.style.bottom = "515px";
            cuerda.style.width = "50px";
        }
        else
        {
            cuerda.style.left = (window.innerWidth * 0.3855) + 300 + "px";
            anzuelo.style.left = (window.innerWidth * 0.3855) + 287.5 + "px";
            cuerda.style.rotate = "-90deg";
            anzuelo.style.top = "auto";
            anzuelo.style.bottom = "500px";
            cuerda.style.bottom = "515px";
            cuerda.style.width = "50px";
        }

        estadoAnzuelo = false;
    }
    else
    {
        if(coordX > 50)
        {
            anzuelo.style.left = (pescaCoordX - 9) + "px";
            anzuelo.style.top = (pescaCoordY - 8) + "px";

            cuerda.style.rotate = -1.5708 - Math.atan((pescaCoordX + (window.innerWidth * 0.215) - ((window.innerWidth * 0.28) - 85)) / (565 - ((window.innerHeight * .4) - (pescaCoordY - 5)))) + "rad";
            cuerda.style.width = Math.sqrt(Math.pow((pescaCoordX + (window.innerWidth * 0.215) - ((window.innerWidth * 0.28) - 85)), 2) + Math.pow((565 - ((window.innerHeight * .4) - (pescaCoordY - 5))), 2)) + "px";
            cuerda.style.bottom = ((window.innerHeight * 0.4) - pescaCoordY + 6) + "px";
            cuerda.style.left = (pescaCoordX + 4) + "px";
        }
        else
        {
            anzuelo.style.left = (pescaCoordX - 9) + "px";
            anzuelo.style.top = (pescaCoordY - 8) + "px";

            cuerda.style.rotate = -Math.atan((565 - ((window.innerHeight * .4) - (pescaCoordY - 5))) / (((window.innerWidth * 0.6) + 300) - pescaCoordX - (window.innerWidth * 0.2145))) + "rad";
            cuerda.style.width = Math.sqrt(Math.pow((565 - ((window.innerHeight * .4) - (pescaCoordY - 8))), 2) + Math.pow((((window.innerWidth * 0.6) + 300) - pescaCoordX - (window.innerWidth * 0.2145)), 2)) + "px";
            cuerda.style.bottom = ((window.innerHeight * 0.4) - pescaCoordY + 2) + "px";
            cuerda.style.left = (pescaCoordX + 2) + "px";
        }

        estadoAnzuelo = true;
    }
}

const tiempo = setInterval(cambiarTiempo, 180000);

function cambiarTiempo()
{
    if(estadoPantallaNegra)
    {
        numeroTiempo++;
        switch(numeroTiempo % 4)
        {
        case 0:
            if(estadoMusicaDia)
            {
                document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_day.png)";
                document.getElementById("musicaPescaAmanecer").pause();
                document.getElementById("musicaPescaAmanecer").currentTime = 0;
                document.getElementById("musicaPescaDiaCorta").play();
            }
            else
            {
                estadoMusicaDia = true;
            }
            break;
        case 1:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
            document.getElementById("musicaPescaDiaLarga").pause();
            document.getElementById("musicaPescaDiaCorta").pause();
            document.getElementById("musicaPescaDiaCorta").currentTime = 0;
            document.getElementById("musicaPescaAtardecer").play();
            break;
        case 2:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_night.png)";
            document.getElementById("musicaPescaAtardecer").pause();
            document.getElementById("musicaPescaAtardecer").currentTime = 0;
            document.getElementById("musicaPescaNoche").play();
            break;
        case 3:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunrise.png)";
            document.getElementById("musicaPescaNoche").pause();
            document.getElementById("musicaPescaNoche").currentTime = 0;
            document.getElementById("musicaPescaAmanecer").play();
            break;
        }
    }
}

const peces = document.getElementById("peces");

const spawnInterval = setInterval(spawnearPeces, 12000)

async function spawnearPeces()
{    
    if (estadoJuegoPesca)
    {
        var direccionPez = (1 - (2 * getNumeroRandom(2)));
        var distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
        var distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 160);

        if(contadorPeces < 8)
        {
            switch(0)
            {
            case 0:
                switch(0)
                {
                    case 0:
                        contadorPeces++;
                        const mo = document.createElement('div')
                        mo.setAttribute('id', 'mojarra_' + contadorPeces);
                        peces.appendChild(mo);
                        mo.style.backgroundImage = "url(images/fishes/bluegill.png)";
                        mo.style.transform = "scaleX(" + direccionPez + ")";
                        mo.style.height = "22px";
                        mo.style.width = "86px";
                        mo.style.backgroundSize = "100%";
                        mo.style.backgroundRepeat = "no-repeat";
                        mo.style.position = "absolute";
                        mo.style.top = distanciaArriba + "px";
                        mo.style.left = distanciaIzquierda + "px";
                        
                        const btmo = document.createElement('button');
                        btmo.setAttribute('id', 'boton_' + contadorPeces);
                        btmo.setAttribute('type', 'button');
                        peces.appendChild(btmo);
                        btmo.style.height = "20px";
                        btmo.style.width = "20px";
                        btmo.style.position = "absolute";
                        btmo.style.cursor = "pointer";
                        btmo.style.top = distanciaArriba + 12 + "px";
                        btmo.style.backgroundColor = "#36c5f4";
                        btmo.style.border = "none";

                        if(direccionPez == 1)
                        {
                            btmo.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btmo.style.left = distanciaIzquierda + 96 + "px";
                        }
                        break;
                    case 1:
                        
                        break;
                    case 2:
                        
                        break;
                    case 3:
                        contadorPeces++;
                        const cp = document.createElement('div')
                        cp.setAttribute('id', 'carpa_' + contadorPeces);
                        peces.appendChild(cp);
                        cp.style.backgroundImage = "url(images/fishes/carp.png)";
                        cp.style.transform = "scaleX(" + direccionPez + ")";
                        cp.style.height = "28px";
                        cp.style.width = "127px";
                        cp.style.backgroundSize = "100%";
                        cp.style.backgroundRepeat = "no-repeat";
                        cp.style.position = "absolute";
                        cp.style.top = distanciaArriba + "px";
                        cp.style.left = distanciaIzquierda + "px";

                        const btcp = document.createElement('button');
                        btcp.setAttribute('id', 'boton_' + contadorPeces);
                        btcp.setAttribute('type', 'button');
                        peces.appendChild(btcp);
                        btcp.style.height = "40px";
                        btcp.style.width = "40px";
                        btcp.style.position = "absolute";
                        btcp.style.cursor = "pointer";
                        btcp.style.top = distanciaArriba + 8 + "px";
                        btcp.style.backgroundColor = "tomato";

                        if(direccionPez == 1)
                        {
                            btcp.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btcp.style.left = distanciaIzquierda + 147 + "px";
                        }
                        break;
                    case 4:

                        break;
                    case 5:
                        contadorPeces++;
                        const ko = document.createElement('div')
                        ko.setAttribute('id', 'koi_' + contadorPeces);
                        peces.appendChild(ko);
                        ko.style.backgroundImage = "url(images/fishes/koi.png)";
                        ko.style.transform = "scaleX(" + direccionPez + ")";
                        ko.style.height = "27px";
                        ko.style.width = "141px";
                        ko.style.backgroundSize = "100%";
                        ko.style.backgroundRepeat = "no-repeat";
                        ko.style.position = "absolute";
                        ko.style.top = distanciaArriba + "px";
                        ko.style.left = distanciaIzquierda + "px";

                        const btko = document.createElement('button');
                        btko.setAttribute('id', 'boton_' + contadorPeces);
                        btko.setAttribute('type', 'button');
                        peces.appendChild(btko);
                        btko.style.height = "40px";
                        btko.style.width = "40px";
                        btko.style.position = "absolute";
                        btko.style.cursor = "pointer";
                        btko.style.top = distanciaArriba + 7 + "px";
                        btko.style.backgroundColor = "tomato";

                        if(direccionPez == 1)
                        {
                            btko.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btko.style.left = distanciaIzquierda + 161 + "px";
                        }
                        break;
                    case 6:
                        contadorPeces++;
                        const gf = document.createElement('div')
                        gf.setAttribute('id', 'goldfish_' + contadorPeces);
                        peces.appendChild(gf);
                        gf.style.backgroundImage = "url(images/fishes/goldfish.png)";
                        gf.style.transform = "scaleX(" + direccionPez + ")";
                        gf.style.height = "19px";
                        gf.style.width = "67px";
                        gf.style.backgroundSize = "100%";
                        gf.style.backgroundRepeat = "no-repeat";
                        gf.style.position = "absolute";
                        gf.style.top = distanciaArriba + "px";
                        gf.style.left = distanciaIzquierda + "px";

                        const btgf = document.createElement('button');
                        btgf.setAttribute('id', 'boton_' + contadorPeces);
                        btgf.setAttribute('type', 'button');
                        peces.appendChild(btgf);
                        btgf.style.height = "20px";
                        btgf.style.width = "20px";
                        btgf.style.position = "absolute";
                        btgf.style.cursor = "pointer";
                        btgf.style.top = distanciaArriba + 9 + "px";
                        btgf.style.backgroundColor = "tomato";

                        if(direccionPez == 1)
                        {
                            btgf.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btgf.style.left = distanciaIzquierda + 77 + "px";
                        }
                        break;
                    case 7:

                        break;
                    case 8:

                        break;
                }
                break;
            case 1:
                switch(5)
                {
                    case 0:

                        break;
                    case 1:
                        
                        break;
                    case 2:
                        contadorPeces++;
                        const rn = document.createElement('div')
                        rn.setAttribute('id', 'goldfish_' + contadorPeces);
                        peces.appendChild(rn);
                        rn.style.backgroundImage = "url(images/fishes/frog.png)";
                        rn.style.transform = "scaleX(" + direccionPez + ")";
                        rn.style.height = "19px";
                        rn.style.width = "67px";
                        rn.style.backgroundSize = "100%";
                        rn.style.backgroundRepeat = "no-repeat";
                        rn.style.position = "absolute";
                        rn.style.top = distanciaArriba + "px";
                        rn.style.left = distanciaIzquierda + "px";

                        const btrn = document.createElement('button');
                        btrn.setAttribute('id', 'boton_' + contadorPeces);
                        btrn.setAttribute('type', 'button');
                        peces.appendChild(btrn);
                        btrn.style.height = "20px";
                        btrn.style.width = "20px";
                        btrn.style.position = "absolute";
                        btrn.style.cursor = "pointer";
                        btrn.style.top = distanciaArriba + 9 + "px";
                        btrn.style.backgroundColor = "tomato";

                        if(direccionPez == 1)
                        {
                            btgf.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btgf.style.left = distanciaIzquierda + 77 + "px";
                        }
                        break;
                    case 3:

                        break;
                    case 4:

                        break;
                    case 5:
                        contadorPeces++;
                        const cr = document.createElement('div')
                        cr.setAttribute('id', 'cangrejo_de_rio_' + contadorPeces);
                        peces.appendChild(cr);
                        cr.style.backgroundImage = "url(images/fishes/crawfish.png)";
                        cr.style.transform = "scaleX(" + direccionPez + ")";
                        cr.style.height = "22px";
                        cr.style.width = "44px";
                        cr.style.backgroundSize = "100%";
                        cr.style.backgroundRepeat = "no-repeat";
                        cr.style.position = "absolute";
                        cr.style.top = distanciaArriba + "px";
                        cr.style.left = distanciaIzquierda + "px";

                        const btcr = document.createElement('button');
                        btcr.setAttribute('id', 'boton_' + contadorPeces);
                        btcr.setAttribute('type', 'button');
                        peces.appendChild(btcr);
                        btcr.style.height = "20px";
                        btcr.style.width = "20px";
                        btcr.style.position = "absolute";
                        btcr.style.cursor = "pointer";
                        btcr.style.top = distanciaArriba - 10 + "px";
                        btcr.style.backgroundColor = "tomato";

                        if(direccionPez == 1)
                        {
                            btcr.style.left = distanciaIzquierda - 10 + "px";
                        }
                        else
                        {
                            btcr.style.left = distanciaIzquierda + 34 + "px";
                        }
                        break;
                    case 6:
                        
                        break;
                    case 7:

                        break;
                }
                break;
            case 2:
                switch(3)
                {
                    case 0:

                        break;
                    case 1:
                        
                        break;
                    case 2:

                        break;
                    case 3:
                        contadorPeces++;
                        const cg = document.createElement('div')
                        cg.setAttribute('id', 'cangrejo_' + contadorPeces);
                        peces.appendChild(cg);
                        cg.style.backgroundImage = "url(images/fishes/crab.png)";
                        cg.style.transform = "scaleX(" + direccionPez + ")";
                        cg.style.height = "39px";
                        cg.style.width = "112px";
                        cg.style.backgroundSize = "100%";
                        cg.style.backgroundRepeat = "no-repeat";
                        cg.style.position = "absolute";
                        cg.style.top = distanciaArriba + "px";
                        cg.style.left = distanciaIzquierda + "px";

                        const btcg = document.createElement('button');
                        btcg.setAttribute('id', 'boton_' + contadorPeces);
                        btcg.setAttribute('type', 'button');
                        peces.appendChild(btcg);
                        btcg.style.height = "20px";
                        btcg.style.width = "20px";
                        btcg.style.position = "absolute";
                        btcg.style.cursor = "pointer";
                        btcg.style.top = distanciaArriba - 10 + "px";
                        btcg.style.left = distanciaIzquierda + 46 + "px";
                        btcg.style.backgroundColor = "tomato";
                        break;
                    case 4:

                        break;
                    case 5:

                        break;
                    case 6:
                        
                        break;
                    case 7:

                        break;
                }
                break;
            case 3:

                break;
            }
        }
    }
}
