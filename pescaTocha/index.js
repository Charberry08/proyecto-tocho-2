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
let estadoReaccionAnzuelo = false;
let estadoReiniciadoAnzuelo = false;
let estadoJuegoReaccion = false;
let estadoDelayReaccion = false;
let estadoPermitirPesca = true;

let cania = document.getElementById("cania");
let anzuelo = document.getElementById("anzuelo");
let cuerda = document.getElementById("cuerda");

let areaPesca = document.getElementById("areaPesca");
let modeloPez = document.getElementById("modeloPez");

let dineroTotal = 0;
let dineroActualPez = 0;

let idPez = 0;
let idPezActual = 0;
let idDesignado = 0;
let arregloPecesActivos = new Array(8);
const arregloEspacios = [false, false, false, false, false, false, false, false, false, false];
const arregloTipoPeces = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let numeroRandomSwitch = 0;

let tiempoDecimasSegundo = 0;

const realizarStartupt = startup();

function startup()
{
    document.getElementById("fondoMadera").style.left= (window.innerWidth - 1178) / 2 + "px";
    document.getElementById("fondoMadera").style.top= (window.innerHeight - 621) / 2 + "px";
    document.getElementById("dineroTotal").value = dineroTotal;
}

function getNumeroRandom(maximo)
{
    return Math.floor(Math.random() * maximo);
}

function iniciarPantallaInicio()
{
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
    numeroTiempo = 0;
    document.getElementById("musicaInicio").play();
    document.getElementById("pantallaNegra").style.display = "none";
    document.getElementById("pantallaTitulo").style.display = "inline";
}

function iniciarJuego()
{
    estadoPantallaNegra = true;
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
        if(estadoReiniciadoAnzuelo)
        {
            estadoPermitirPesca = true;
            estadoReiniciadoAnzuelo = false;
        }
        if(estadoJuegoReaccion)
        {
            desaparecerPez();
            estadoReaccionAnzuelo = false;
            estadoPermitirPesca = false;
            estadoReiniciadoAnzuelo = true;
            estadoJuegoReaccion = false;
            idPezActual = -1;
        }
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
        document.getElementById("sonidoCania").pause();
        document.getElementById("sonidoCania").currentTime = 0;
        document.getElementById("sonidoCania").play();
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

const spawnInterval = setInterval(spawnearPeces, 100)

function spawnearPeces()
{    
    if (estadoJuegoPesca && !estadoReaccionAnzuelo)
    {
        var pezActual;
        var alturaPez = 0;
        var anchoPez = 0;
        var direccionPez = (1 - (2 * getNumeroRandom(2)));
        var distanciaArriba = 0;
        var distanciaIzquierda = 0;

        if(contadorPeces < 100)
        {
            encontrarEspacio();
            switch(2)
            {
            case 0:
                switchRandomPool1();
                switch(numeroRandomSwitch)
                {
                    case 0:
                        pezActual = new Module.Mojarra();
                        alturaPez = 22 * (pezActual.getTamanio() / 22);
                        anchoPez = 86 * (pezActual.getTamanio() / 22);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 160) + 40;

                        const mo = document.createElement('div');
                        mo.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(mo);
                        mo.style.backgroundImage = "url(images/fishes/bluegill.png)";
                        mo.style.transform = "scaleX(" + direccionPez + ")";
                        mo.style.height = alturaPez + "px";
                        mo.style.width = anchoPez + "px";
                        mo.style.backgroundSize = "100%";
                        mo.style.backgroundRepeat = "no-repeat";
                        mo.style.position = "absolute";
                        mo.style.top = distanciaArriba + "px";
                        mo.style.left = distanciaIzquierda + "px";
                        mo.style.zIndex = "1";
                        
                        const btmo = document.createElement('button');
                        btmo.setAttribute('id', 'boton_' + idDesignado);
                        btmo.setAttribute('type', 'button');
                        btmo.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btmo);
                        btmo.style.height = "20px";
                        btmo.style.width = "20px";
                        btmo.style.position = "absolute";
                        btmo.style.cursor = "pointer";
                        btmo.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btmo.style.backgroundColor = "#36C5F4";
                        btmo.style.border = "none";
                        btmo.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btmo.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btmo.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 1;
                        break;
                    case 1:
                        pezActual = new Module.Lubina();
                        alturaPez = 22 * (pezActual.getTamanio() / 40);
                        anchoPez = 104 * (pezActual.getTamanio() / 40);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 200) + 40;

                        const lu = document.createElement('div');
                        lu.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(lu);
                        lu.style.backgroundImage = "url(images/fishes/sea_bass.png)";
                        lu.style.transform = "scaleX(" + direccionPez + ")";
                        lu.style.height = alturaPez + "px";
                        lu.style.width = anchoPez + "px";
                        lu.style.backgroundSize = "100%";
                        lu.style.backgroundRepeat = "no-repeat";
                        lu.style.position = "absolute";
                        lu.style.top = distanciaArriba + "px";
                        lu.style.left = distanciaIzquierda + "px";
                        lu.style.zIndex = "1";
                        
                        const btlu = document.createElement('button');
                        btlu.setAttribute('id', 'boton_' + idDesignado);
                        btlu.setAttribute('type', 'button');
                        btlu.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btlu);
                        btlu.style.height = "20px";
                        btlu.style.width = "20px";
                        btlu.style.position = "absolute";
                        btlu.style.cursor = "pointer";
                        btlu.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btlu.style.backgroundColor = "#36C5F4";
                        btlu.style.border = "none";
                        btlu.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btlu.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btlu.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 2;
                        break;
                    case 2:
                        pezActual = new Module.PezPayaso();
                        alturaPez = 19 * (pezActual.getTamanio() / 10);
                        anchoPez = 66 * (pezActual.getTamanio() / 10);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 150) + 40;

                        const pp = document.createElement('div');
                        pp.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pp);
                        pp.style.backgroundImage = "url(images/fishes/clownfish.png)";
                        pp.style.transform = "scaleX(" + direccionPez + ")";
                        pp.style.height = alturaPez + "px";
                        pp.style.width = anchoPez + "px";
                        pp.style.backgroundSize = "100%";
                        pp.style.backgroundRepeat = "no-repeat";
                        pp.style.position = "absolute";
                        pp.style.top = distanciaArriba + "px";
                        pp.style.left = distanciaIzquierda + "px";
                        pp.style.zIndex = "1";
                        
                        const btpp = document.createElement('button');
                        btpp.setAttribute('id', 'boton_' + idDesignado);
                        btpp.setAttribute('type', 'button');
                        btpp.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpp);
                        btpp.style.height = "20px";
                        btpp.style.width = "20px";
                        btpp.style.position = "absolute";
                        btpp.style.cursor = "pointer";
                        btpp.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btpp.style.backgroundColor = "#36C5F4";
                        btpp.style.border = "none";
                        btpp.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpp.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btpp.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 3;
                        break;
                    case 3:
                        pezActual = new Module.Carpa();
                        alturaPez = 28 * (pezActual.getTamanio() / 60);
                        anchoPez = 127 * (pezActual.getTamanio() / 60);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 230) + 40;

                        const cp = document.createElement('div');
                        cp.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cp);
                        cp.style.backgroundImage = "url(images/fishes/carp.png)";
                        cp.style.transform = "scaleX(" + direccionPez + ")";
                        cp.style.height = alturaPez + "px";
                        cp.style.width = anchoPez + "px";
                        cp.style.backgroundSize = "100%";
                        cp.style.backgroundRepeat = "no-repeat";
                        cp.style.position = "absolute";
                        cp.style.top = distanciaArriba + "px";
                        cp.style.left = distanciaIzquierda + "px";
                        cp.style.zIndex = "1";

                        const btcp = document.createElement('button');
                        btcp.setAttribute('id', 'boton_' + idDesignado);
                        btcp.setAttribute('type', 'button');
                        btcp.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcp);
                        btcp.style.height = "40px";
                        btcp.style.width = "40px";
                        btcp.style.position = "absolute";
                        btcp.style.cursor = "pointer";
                        btcp.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btcp.style.backgroundColor = "#36C5F4";
                        btcp.style.border = "none";
                        btcp.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btcp.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btcp.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 4;
                        break;
                    case 4:
                        pezActual = new Module.Anchoa();
                        alturaPez = 10 * (pezActual.getTamanio() / 20);
                        anchoPez = 64 * (pezActual.getTamanio() / 20);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 30);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 150) + 40;

                        const an = document.createElement('div');
                        an.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(an);
                        an.style.backgroundImage = "url(images/fishes/anchovy.png)";
                        an.style.transform = "scaleX(" + direccionPez + ")";
                        an.style.height = alturaPez + "px";
                        an.style.width = anchoPez + "px";
                        an.style.backgroundSize = "100%";
                        an.style.backgroundRepeat = "no-repeat";
                        an.style.position = "absolute";
                        an.style.top = distanciaArriba + "px";
                        an.style.left = distanciaIzquierda + "px";
                        an.style.zIndex = "1";

                        const btan = document.createElement('button');
                        btan.setAttribute('id', 'boton_' + idDesignado);
                        btan.setAttribute('type', 'button');
                        btan.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btan);
                        btan.style.height = "20px";
                        btan.style.width = "20px";
                        btan.style.position = "absolute";
                        btan.style.cursor = "pointer";
                        btan.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btan.style.backgroundColor = "#36C5F4";
                        btan.style.border = "none";
                        btan.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btan.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btan.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 5;
                        break;
                    case 5:
                        pezActual = new Module.Koi();
                        alturaPez = 27 * (pezActual.getTamanio() / 80);
                        anchoPez = 141 * (pezActual.getTamanio() / 80);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const ko = document.createElement('div');
                        ko.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ko);
                        ko.style.backgroundImage = "url(images/fishes/koi.png)";
                        ko.style.transform = "scaleX(" + direccionPez + ")";
                        ko.style.height = alturaPez + "px";
                        ko.style.width = anchoPez + "px";
                        ko.style.backgroundSize = "100%";
                        ko.style.backgroundRepeat = "no-repeat";
                        ko.style.position = "absolute";
                        ko.style.top = distanciaArriba + "px";
                        ko.style.left = distanciaIzquierda + "px";
                        ko.style.zIndex = "1";

                        const btko = document.createElement('button');
                        btko.setAttribute('id', 'boton_' + idDesignado);
                        btko.setAttribute('type', 'button');
                        btko.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btko);
                        btko.style.height = "40px";
                        btko.style.width = "40px";
                        btko.style.position = "absolute";
                        btko.style.cursor = "pointer";
                        btko.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btko.style.backgroundColor = "#36C5F4";
                        btko.style.border = "none";
                        btko.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btko.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btko.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }
                        arregloTipoPeces[idDesignado - 1] = 6;
                        break;
                    case 6:
                        pezActual = new Module.Goldfish();
                        alturaPez = 19 * (pezActual.getTamanio() / 33);
                        anchoPez = 67 * (pezActual.getTamanio() / 33);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 50);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 140) + 40;

                        const gf = document.createElement('div');
                        gf.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(gf);
                        gf.style.backgroundImage = "url(images/fishes/goldfish.png)";
                        gf.style.transform = "scaleX(" + direccionPez + ")";
                        gf.style.height = alturaPez + "px";
                        gf.style.width = anchoPez + "px";
                        gf.style.backgroundSize = "100%";
                        gf.style.backgroundRepeat = "no-repeat";
                        gf.style.position = "absolute";
                        gf.style.top = distanciaArriba + "px";
                        gf.style.left = distanciaIzquierda + "px";
                        gf.style.zIndex = "1";

                        const btgf = document.createElement('button');
                        btgf.setAttribute('id', 'boton_' + idDesignado);
                        btgf.setAttribute('type', 'button');
                        btgf.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btgf);
                        btgf.style.height = "20px";
                        btgf.style.width = "20px";
                        btgf.style.position = "absolute";
                        btgf.style.cursor = "pointer";
                        btgf.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btgf.style.backgroundColor = "#36C5F4";
                        btgf.style.border = "none";
                        btgf.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btgf.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btgf.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 7;
                        break;
                    case 7:
                        pezActual = new Module.PezGlobo();
                        alturaPez = 23 * (pezActual.getTamanio() / 9);
                        anchoPez = 92 * (pezActual.getTamanio() / 9);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 50);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 180) + 40;

                        const pg = document.createElement('div');
                        pg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pg);
                        pg.style.backgroundImage = "url(images/fishes/pufferfish_deflated.png)";
                        pg.style.transform = "scaleX(" + direccionPez + ")";
                        pg.style.height = alturaPez + "px";
                        pg.style.width = anchoPez + "px";
                        pg.style.backgroundSize = "100%";
                        pg.style.backgroundRepeat = "no-repeat";
                        pg.style.position = "absolute";
                        pg.style.top = distanciaArriba + "px";
                        pg.style.left = distanciaIzquierda + "px";
                        pg.style.zIndex = "1";
                        
                        const btpg = document.createElement('button');
                        btpg.setAttribute('id', 'boton_' + idDesignado);
                        btpg.setAttribute('type', 'button');
                        btpg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpg);
                        btpg.style.height = "20px";
                        btpg.style.width = "20px";
                        btpg.style.position = "absolute";
                        btpg.style.cursor = "pointer";
                        btpg.style.top = distanciaArriba + alturaPez - 10 + "px";
                        btpg.style.backgroundColor = "#36C5F4";
                        btpg.style.border = "none";
                        btpg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpg.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btpg.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 8;
                        break;
                    case 8:
                        pezActual = new Module.Atun();
                        alturaPez = 47 * (pezActual.getTamanio() / 155);
                        anchoPez = 182 * (pezActual.getTamanio() / 155);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 290) + 40;

                        const at = document.createElement('div');
                        at.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(at);
                        at.style.backgroundImage = "url(images/fishes/tuna.png)";
                        at.style.transform = "scaleX(" + direccionPez + ")";
                        at.style.height = alturaPez + "px";
                        at.style.width = anchoPez + "px";
                        at.style.backgroundSize = "100%";
                        at.style.backgroundRepeat = "no-repeat";
                        at.style.position = "absolute";
                        at.style.top = distanciaArriba + "px";
                        at.style.left = distanciaIzquierda + "px";
                        at.style.zIndex = "1";

                        const btat = document.createElement('button');
                        btat.setAttribute('id', 'boton_' + idDesignado);
                        btat.setAttribute('type', 'button');
                        btat.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btat);
                        btat.style.height = "60px";
                        btat.style.width = "60px";
                        btat.style.position = "absolute";
                        btat.style.cursor = "pointer";
                        btat.style.top = distanciaArriba + alturaPez - 30 + "px";
                        btat.style.backgroundColor = "#36C5F4";
                        btat.style.border = "none";
                        btat.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btat.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btat.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 9;
                        break;
                }
                break;
            case 1:
                switchRandomPool2();
                switch(numeroRandomSwitch)
                {
                    case 0:
                        pezActual = new Module.TetraNeon();
                        alturaPez = 9 * (pezActual.getTamanio() / 4);
                        anchoPez = 42 * (pezActual.getTamanio() / 4);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 130) + 40;

                        const tn = document.createElement('div');
                        tn.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(tn);
                        tn.style.backgroundImage = "url(images/fishes/neon_tetra.png)";
                        tn.style.transform = "scaleX(" + direccionPez + ")";
                        tn.style.height = alturaPez + "px";
                        tn.style.width = anchoPez + "px";
                        tn.style.backgroundSize = "100%";
                        tn.style.backgroundRepeat = "no-repeat";
                        tn.style.position = "absolute";
                        tn.style.top = distanciaArriba + "px";
                        tn.style.left = distanciaIzquierda + "px";
                        tn.style.zIndex = "1";
                        
                        const bttn = document.createElement('button');
                        bttn.setAttribute('id', 'boton_' + idDesignado);
                        bttn.setAttribute('type', 'button');
                        bttn.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(bttn);
                        bttn.style.height = "20px";
                        bttn.style.width = "20px";
                        bttn.style.position = "absolute";
                        bttn.style.cursor = "pointer";
                        bttn.style.top = distanciaArriba + alturaPez - 10 + "px";
                        bttn.style.backgroundColor = "#36C5F4";
                        bttn.style.border = "none";
                        bttn.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            bttn.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            bttn.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 10;
                        break;
                    case 1:
                        pezActual = new Module.Tortuga();
                        alturaPez = 32 * (pezActual.getTamanio() / 120);
                        anchoPez = 106 * (pezActual.getTamanio() / 120);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 200) + 40;

                        const to = document.createElement('div');
                        to.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(to);
                        to.style.backgroundImage = "url(images/fishes/turtle.png)";
                        to.style.transform = "scaleX(" + direccionPez + ")";
                        to.style.height = alturaPez + "px";
                        to.style.width = anchoPez + "px";
                        to.style.backgroundSize = "100%";
                        to.style.backgroundRepeat = "no-repeat";
                        to.style.position = "absolute";
                        to.style.top = distanciaArriba + "px";
                        to.style.left = distanciaIzquierda + "px";
                        to.style.zIndex = "1";

                        const btto = document.createElement('button');
                        btto.setAttribute('id', 'boton_' + idDesignado);
                        btto.setAttribute('type', 'button');
                        btto.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btto);
                        btto.style.height = "40px";
                        btto.style.width = "40px";
                        btto.style.position = "absolute";
                        btto.style.cursor = "pointer";
                        btto.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btto.style.backgroundColor = "#36C5F4";
                        btto.style.border = "none";
                        btto.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btto.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btto.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 11;
                        break;
                    case 2:
                        pezActual = new Module.Rana();
                        alturaPez = 22 * (pezActual.getTamanio() / 14);
                        anchoPez = 41 * (pezActual.getTamanio() / 14);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 120) + 40;

                        const rn = document.createElement('div');
                        rn.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(rn);

                        if(getNumeroRandom(1024) < 1)
                        {
                            rn.style.backgroundImage = "url(images/fishes/frog_shiny.png)";
                            arregloTipoPeces[idDesignado - 1] = 122;
                        }
                        else
                        {
                            rn.style.backgroundImage = "url(images/fishes/frog.png)";
                            arregloTipoPeces[idDesignado - 1] = 12;
                        }
                        
                        rn.style.transform = "scaleX(" + direccionPez + ")";
                        rn.style.height = alturaPez + "px";
                        rn.style.width = anchoPez + "px";
                        rn.style.backgroundSize = "100%";
                        rn.style.backgroundRepeat = "no-repeat";
                        rn.style.position = "absolute";
                        rn.style.top = distanciaArriba + "px";
                        rn.style.left = distanciaIzquierda + "px";
                        rn.style.zIndex = "1";

                        const btrn = document.createElement('button');
                        btrn.setAttribute('id', 'boton_' + idDesignado);
                        btrn.setAttribute('type', 'button');
                        btrn.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btrn);
                        btrn.style.height = "20px";
                        btrn.style.width = "20px";
                        btrn.style.position = "absolute";
                        btrn.style.cursor = "pointer";
                        btrn.style.top = distanciaArriba - 10 + "px";
                        btrn.style.backgroundColor = "#36C5F4";
                        btrn.style.border = "none";
                        btrn.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btrn.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btrn.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }
                        break;
                    case 3:
                        pezActual = new Module.Trucha();
                        alturaPez = 26 * (pezActual.getTamanio() / 50);
                        anchoPez = 152 * (pezActual.getTamanio() / 50);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 280) + 40;

                        const tr = document.createElement('div');
                        tr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(tr);
                        tr.style.backgroundImage = "url(images/fishes/trout.png)";
                        tr.style.transform = "scaleX(" + direccionPez + ")";
                        tr.style.height = alturaPez + "px";
                        tr.style.width = anchoPez + "px";
                        tr.style.backgroundSize = "100%";
                        tr.style.backgroundRepeat = "no-repeat";
                        tr.style.position = "absolute";
                        tr.style.top = distanciaArriba + "px";
                        tr.style.left = distanciaIzquierda + "px";
                        tr.style.zIndex = "1";

                        const bttr = document.createElement('button');
                        bttr.setAttribute('id', 'boton_' + idDesignado);
                        bttr.setAttribute('type', 'button');
                        bttr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(bttr);
                        bttr.style.height = "40px";
                        bttr.style.width = "40px";
                        bttr.style.position = "absolute";
                        bttr.style.cursor = "pointer";
                        bttr.style.top = distanciaArriba + alturaPez - 20 + "px";
                        bttr.style.backgroundColor = "#36C5F4";
                        bttr.style.border = "none";
                        bttr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            bttr.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            bttr.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 13;
                        break;
                    case 4:
                        pezActual = new Module.Bagre();
                        alturaPez = 30 * (pezActual.getTamanio() / 85);
                        anchoPez = 165 * (pezActual.getTamanio() / 85);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 260) + 40;

                        const bg = document.createElement('div');
                        bg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(bg);
                        bg.style.backgroundImage = "url(images/fishes/catfish.png)";
                        bg.style.transform = "scaleX(" + direccionPez + ")";
                        bg.style.height = alturaPez + "px";
                        bg.style.width = anchoPez + "px";
                        bg.style.backgroundSize = "100%";
                        bg.style.backgroundRepeat = "no-repeat";
                        bg.style.position = "absolute";
                        bg.style.top = distanciaArriba + "px";
                        bg.style.left = distanciaIzquierda + "px";
                        bg.style.zIndex = "1";

                        const btbg = document.createElement('button');
                        btbg.setAttribute('id', 'boton_' + idDesignado);
                        btbg.setAttribute('type', 'button');
                        btbg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btbg);
                        btbg.style.height = "40px";
                        btbg.style.width = "40px";
                        btbg.style.position = "absolute";
                        btbg.style.cursor = "pointer";
                        btbg.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btbg.style.backgroundColor = "#36C5F4";
                        btbg.style.border = "none";
                        btbg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btbg.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btbg.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 14;
                        break;
                    case 5:
                        pezActual = new Module.CangrejoRio();
                        alturaPez = 22 * (pezActual.getTamanio() / 19);
                        anchoPez = 44 * (pezActual.getTamanio() / 19);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = 40 + getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 140) + 40;

                        const cr = document.createElement('div');
                        cr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cr);
                        cr.style.backgroundImage = "url(images/fishes/crawfish.png)";
                        cr.style.transform = "scaleX(" + direccionPez + ")";
                        cr.style.height = alturaPez + "px";
                        cr.style.width = anchoPez + "px";
                        cr.style.backgroundSize = "100%";
                        cr.style.backgroundRepeat = "no-repeat";
                        cr.style.position = "absolute";
                        cr.style.top = distanciaArriba + "px";
                        cr.style.left = distanciaIzquierda + "px";
                        cr.style.zIndex = "1";

                        const btcr = document.createElement('button');
                        btcr.setAttribute('id', 'boton_' + idDesignado);
                        btcr.setAttribute('type', 'button');
                        btcr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcr);
                        btcr.style.height = "20px";
                        btcr.style.width = "20px";
                        btcr.style.position = "absolute";
                        btcr.style.cursor = "pointer";
                        btcr.style.top = distanciaArriba - 20 + "px";
                        btcr.style.backgroundColor = "#36C5F4";
                        btcr.style.border = "none";
                        btcr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btcr.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btcr.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 15;
                        break;
                    case 6:
                        pezActual = new Module.Salmon();
                        alturaPez = 29 * (pezActual.getTamanio() / 85);
                        anchoPez = 160 * (pezActual.getTamanio() / 85);
                        contadorPeces += pezActual.getPesoEstanque();
                        
                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 250) + 40;

                        const sa = document.createElement('div');
                        sa.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(sa);
                        sa.style.backgroundImage = "url(images/fishes/salmon.png)";
                        sa.style.transform = "scaleX(" + direccionPez + ")";
                        sa.style.height = alturaPez + "px";
                        sa.style.width = anchoPez + "px";
                        sa.style.backgroundSize = "100%";
                        sa.style.backgroundRepeat = "no-repeat";
                        sa.style.position = "absolute";
                        sa.style.top = distanciaArriba + "px";
                        sa.style.left = distanciaIzquierda + "px";
                        sa.style.zIndex = "1";

                        const btsa = document.createElement('button');
                        btsa.setAttribute('id', 'boton_' + idDesignado);
                        btsa.setAttribute('type', 'button');
                        btsa.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btsa);
                        btsa.style.height = "40px";
                        btsa.style.width = "40px";
                        btsa.style.position = "absolute";
                        btsa.style.cursor = "pointer";
                        btsa.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btsa.style.backgroundColor = "#36C5F4";
                        btsa.style.border = "none";
                        btsa.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btsa.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btsa.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 16;
                        break;
                    case 7:
                        pezActual = new Module.PezEspada();
                        alturaPez = 49 * (pezActual.getTamanio() / 150);
                        anchoPez = 248 * (pezActual.getTamanio() / 150);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 110);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 430) + 40;

                        const pe = document.createElement('div');
                        pe.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pe);
                        pe.style.backgroundImage = "url(images/fishes/swordfish.png)";
                        pe.style.transform = "scaleX(" + direccionPez + ")";
                        pe.style.height = alturaPez + "px";
                        pe.style.width = anchoPez + "px";
                        pe.style.backgroundSize = "100%";
                        pe.style.backgroundRepeat = "no-repeat";
                        pe.style.position = "absolute";
                        pe.style.top = distanciaArriba + "px";
                        pe.style.left = distanciaIzquierda + "px";
                        pe.style.zIndex = "1";

                        const btpe = document.createElement('button');
                        btpe.setAttribute('id', 'boton_' + idDesignado);
                        btpe.setAttribute('type', 'button');
                        btpe.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpe);
                        btpe.style.height = "60px";
                        btpe.style.width = "60px";
                        btpe.style.position = "absolute";
                        btpe.style.cursor = "pointer";
                        btpe.style.top = distanciaArriba + alturaPez - 30 + "px";
                        btpe.style.backgroundColor = "#36C5F4";
                        btpe.style.border = "none";
                        btpe.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpe.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btpe.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 17;
                        break;
                }
                break;
            case 2:
                switchRandomPool3();
                switch(6)
                {
                    case 0:
                        pezActual = new Module.Char();
                        alturaPez = 18 * (pezActual.getTamanio() / 53);
                        anchoPez = 125 * (pezActual.getTamanio() / 53);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 240) + 40;

                        const ch = document.createElement('div');
                        ch.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ch);
                        ch.style.backgroundImage = "url(images/fishes/char.png)";
                        ch.style.transform = "scaleX(" + direccionPez + ")";
                        ch.style.height = alturaPez + "px";
                        ch.style.width = anchoPez + "px";
                        ch.style.backgroundSize = "100%";
                        ch.style.backgroundRepeat = "no-repeat";
                        ch.style.position = "absolute";
                        ch.style.top = distanciaArriba + "px";
                        ch.style.left = distanciaIzquierda + "px";
                        ch.style.zIndex = "1";

                        const btch = document.createElement('button');
                        btch.setAttribute('id', 'boton_' + idDesignado);
                        btch.setAttribute('type', 'button');
                        btch.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btch);
                        btch.style.height = "40px";
                        btch.style.width = "40px";
                        btch.style.position = "absolute";
                        btch.style.cursor = "pointer";
                        btch.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btch.style.backgroundColor = "#36C5F4";
                        btch.style.border = "none";
                        btch.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btch.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btch.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }
                        
                        arregloTipoPeces[idDesignado - 1] = 18;
                        break;
                    case 1:
                        pezActual = new Module.Magikarp();
                        alturaPez = 58;
                        anchoPez = 119;
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const mg = document.createElement('div');
                        mg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(mg);
                        mg.style.backgroundImage = "url(images/fishes/magikarp.png)";
                        mg.style.transform = "scaleX(" + direccionPez + ")";
                        mg.style.height = alturaPez + "px";
                        mg.style.width = anchoPez + "px";
                        mg.style.backgroundSize = "100%";
                        mg.style.backgroundRepeat = "no-repeat";
                        mg.style.position = "absolute";
                        mg.style.top = distanciaArriba + "px";
                        mg.style.left = distanciaIzquierda + "px";
                        mg.style.zIndex = "1";
                        
                        const btmg = document.createElement('button');
                        btmg.setAttribute('id', 'boton_' + idDesignado);
                        btmg.setAttribute('type', 'button');
                        btmg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btmg);
                        btmg.style.height = "40px";
                        btmg.style.width = "40px";
                        btmg.style.position = "absolute";
                        btmg.style.cursor = "pointer";
                        btmg.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btmg.style.backgroundColor = "#36C5F4";
                        btmg.style.border = "none";
                        btmg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btmg.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btmg.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 19;
                        break;
                    case 2:
                        pezActual = new Module.Cangrejo();
                        alturaPez = 39 * (pezActual.getTamanio() / 165);
                        anchoPez = 112 * (pezActual.getTamanio() / 165);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 160) + 20;

                        const cg = document.createElement('div');
                        cg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cg);
                        cg.style.backgroundImage = "url(images/fishes/crab_animated.gif)";
                        cg.style.transform = "scaleX(" + direccionPez + ")";
                        cg.style.height = alturaPez + "px";
                        cg.style.width = anchoPez + "px";
                        cg.style.backgroundSize = "100%";
                        cg.style.backgroundRepeat = "no-repeat";
                        cg.style.position = "absolute";
                        cg.style.top = distanciaArriba + "px";
                        cg.style.left = distanciaIzquierda + "px";
                        cg.style.zIndex = "1";

                        const btcg = document.createElement('button');
                        btcg.setAttribute('id', 'boton_' + idDesignado);
                        btcg.setAttribute('type', 'button');
                        btcg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcg);
                        btcg.style.height = "20px";
                        btcg.style.width = "20px";
                        btcg.style.position = "absolute";
                        btcg.style.cursor = "pointer";
                        btcg.style.top = distanciaArriba - 10 + "px";
                        btcg.style.left = distanciaIzquierda + (anchoPez / 2.4) + "px";
                        btcg.style.backgroundColor = "#36C5F4";
                        btcg.style.border = "none";
                        btcg.style.zIndex = "0";

                        arregloTipoPeces[idDesignado - 1] = 20;
                        break;
                    case 3:
                        pezActual = new Module.Esturion();
                        alturaPez = 25 * (pezActual.getTamanio() / 200);
                        anchoPez = 208 * (pezActual.getTamanio() / 200);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 340) + 40;

                        const es = document.createElement('div');
                        es.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(es);
                        es.style.backgroundImage = "url(images/fishes/sturgeon.png)";
                        es.style.transform = "scaleX(" + direccionPez + ")";
                        es.style.height = alturaPez + "px";
                        es.style.width = anchoPez + "px";
                        es.style.backgroundSize = "100%";
                        es.style.backgroundRepeat = "no-repeat";
                        es.style.position = "absolute";
                        es.style.top = distanciaArriba + "px";
                        es.style.left = distanciaIzquierda + "px";
                        es.style.zIndex = "1";
                        
                        const btes = document.createElement('button');
                        btes.setAttribute('id', 'boton_' + idDesignado);
                        btes.setAttribute('type', 'button');
                        btes.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btes);
                        btes.style.height = "40px";
                        btes.style.width = "40px";
                        btes.style.position = "absolute";
                        btes.style.cursor = "pointer";
                        btes.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btes.style.backgroundColor = "#36C5F4";
                        btes.style.border = "none";
                        btes.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btes.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btes.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 21;
                        break;
                    case 4:
                        pezActual = new Module.Pirania();
                        alturaPez = 33 * (pezActual.getTamanio() / 43);
                        anchoPez = 106 * (pezActual.getTamanio() / 43);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const pi = document.createElement('div');
                        pi.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pi);
                        pi.style.backgroundImage = "url(images/fishes/piranha.png)";
                        pi.style.transform = "scaleX(" + direccionPez + ")";
                        pi.style.height = alturaPez + "px";
                        pi.style.width = anchoPez + "px";
                        pi.style.backgroundSize = "100%";
                        pi.style.backgroundRepeat = "no-repeat";
                        pi.style.position = "absolute";
                        pi.style.top = distanciaArriba + "px";
                        pi.style.left = distanciaIzquierda + "px";
                        pi.style.zIndex = "1";
                        
                        const btpi = document.createElement('button');
                        btpi.setAttribute('id', 'boton_' + idDesignado);
                        btpi.setAttribute('type', 'button');
                        btpi.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpi);
                        btpi.style.height = "40px";
                        btpi.style.width = "40px";
                        btpi.style.position = "absolute";
                        btpi.style.cursor = "pointer";
                        btpi.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btpi.style.backgroundColor = "#36C5F4";
                        btpi.style.border = "none";
                        btpi.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpi.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btpi.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 22;
                        break;
                    case 5:
                        pezActual = new Module.PezRape();
                        alturaPez = 38 * (pezActual.getTamanio() / 60);
                        anchoPez = 128 * (pezActual.getTamanio() / 60);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 270) + 40;

                        const pr = document.createElement('div');
                        pr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pr);
                        pr.style.backgroundImage = "url(images/fishes/anglerfish.png)";
                        pr.style.transform = "scaleX(" + direccionPez + ")";
                        pr.style.height = alturaPez + "px";
                        pr.style.width = anchoPez + "px";
                        pr.style.backgroundSize = "100%";
                        pr.style.backgroundRepeat = "no-repeat";
                        pr.style.position = "absolute";
                        pr.style.top = distanciaArriba + "px";
                        pr.style.left = distanciaIzquierda + "px";
                        pr.style.zIndex = "1";
                        
                        const btpr = document.createElement('button');
                        btpr.setAttribute('id', 'boton_' + idDesignado);
                        btpr.setAttribute('type', 'button');
                        btpr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpr);
                        btpr.style.height = "40px";
                        btpr.style.width = "40px";
                        btpr.style.position = "absolute";
                        btpr.style.cursor = "pointer";
                        btpr.style.top = distanciaArriba + alturaPez - 20 + "px";
                        btpr.style.backgroundColor = "#36C5F4";
                        btpr.style.border = "none";
                        btpr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpr.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btpr.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 23;
                        break;
                    case 6:
                        pezActual = new Module.Cachalote();
                        alturaPez = 184 * (pezActual.getTamanio() / 1600);
                        anchoPez = 892 * (pezActual.getTamanio() / 1600);
                        contadorPeces += pezActual.getPesoEstanque();

                        const ca = document.createElement('div');
                        ca.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ca);
                        ca.style.backgroundImage = "url(images/fishes/sperm_whale.png)";
                        ca.style.transform = "scaleX(" + direccionPez + ")";
                        ca.style.height = alturaPez + "px";
                        ca.style.width = anchoPez + "px";
                        ca.style.backgroundSize = "100%";
                        ca.style.backgroundRepeat = "no-repeat";
                        ca.style.position = "absolute";
                        ca.style.top = 10 + "px";
                        ca.style.left = 20 + "px";
                        ca.style.zIndex = "1";

                        const btca = document.createElement('button');
                        btca.setAttribute('id', 'boton_' + idDesignado);
                        btca.setAttribute('type', 'button');
                        btca.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btca);
                        btca.style.height = "60px";
                        btca.style.width = "60px";
                        btca.style.position = "absolute";
                        btca.style.cursor = "pointer";
                        btca.style.top = alturaPez - 30 + "px";
                        btca.style.backgroundColor = "#36C5F4";
                        btca.style.border = "none";
                        btca.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btca.style.left = - 70 + "px";
                        }
                        else
                        {
                            btca.style.left = anchoPez + 50 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 24;
                        break;
                    case 7:
                        pezActual = new Module.TiburonBlanco();
                        alturaPez = 67 * (pezActual.getTamanio() / 415);
                        anchoPez = 373 * (pezActual.getTamanio() / 415);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 120);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 520) + 40;

                        const ws = document.createElement('div');
                        ws.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ws);
                        ws.style.backgroundImage = "url(images/fishes/great_white_shark.png)";
                        ws.style.transform = "scaleX(" + direccionPez + ")";
                        ws.style.height = alturaPez + "px";
                        ws.style.width = anchoPez + "px";
                        ws.style.backgroundSize = "100%";
                        ws.style.backgroundRepeat = "no-repeat";
                        ws.style.position = "absolute";
                        ws.style.top = distanciaArriba + "px";
                        ws.style.left = distanciaIzquierda + "px";
                        ws.style.zIndex = "1";

                        const btws = document.createElement('button');
                        btws.setAttribute('id', 'boton_' + idDesignado);
                        btws.setAttribute('type', 'button');
                        btws.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btws);
                        btws.style.height = "60px";
                        btws.style.width = "60px";
                        btws.style.position = "absolute";
                        btws.style.cursor = "pointer";
                        btws.style.top = distanciaArriba + alturaPez - 30 + "px";
                        btws.style.backgroundColor = "#36C5F4";
                        btws.style.border = "none";
                        btws.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btws.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btws.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 25;
                        break;
                }
                break;
            case 3:
                
                break;
            }
            arregloPecesActivos[idDesignado - 1] = pezActual;
        }
    }
}

function switchRandomPool1()
{
    var nrs = getNumeroRandom(100);

    if(nrs < 2)
    {
        numeroRandomSwitch = 8;
        return;
    }
    if(nrs < 9)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 19)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 29)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 39)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 51)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 65)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 80)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function switchRandomPool2()
{
    var nrs = getNumeroRandom(100);
    if(nrs < 2)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 10)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 25)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 36)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 49)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 64)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 80)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function switchRandomPool3()
{
    var nrs = getNumeroRandom(100);
    if(nrs < 1)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 6)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 16)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 27)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 42)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 60)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 78)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function encontrarEspacio()
{
    for(let i = 0; i < 10; i++)
    {
        if(!arregloEspacios[i])
        {
            idDesignado = i + 1;
            arregloEspacios[idDesignado - 1] = true;
            return;
        }
    }
}

const contarDecimasSegundo = setInterval(contarTiempo, 100)

function contarTiempo()
{
    tiempoDecimasSegundo++;

    if(tiempoDecimasSegundo > 7200)
    {
        tiempoDecimasSegundo = 0;
    }
    if(estadoReaccionAnzuelo && (tiempoDecimasSegundo * 100) > arregloPecesActivos[idPezActual - 1].getTiempo())
    {
        desaparecerPez();
        estadoReaccionAnzuelo = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        estadoJuegoReaccion = false;
        idPezActual = -1;
    }
}

const intervaloTrigger = setInterval(crearIntervalos, 1000);

function crearIntervalos()
{
    if(estadoJuegoReaccion && estadoDelayReaccion)
    {
        if(getNumeroRandom(100) < 30)
        {
            document.getElementById("sonidoAtrapar").play();
            tiempoDecimasSegundo = 0;
            estadoReaccionAnzuelo = true;
            estadoJuegoReaccion = false;
            estadoDelayReaccion = false;
        }
        else
        {
            document.getElementById("falsoAtrapar").play();
        }
    }
    if(estadoJuegoReaccion)
    {
        estadoDelayReaccion = true;
    }
}

function pescaPeces(idPez)
{
    if(!estadoReaccionAnzuelo && !estadoAnzuelo)
    {
        estadoJuegoReaccion = true;
        idPezActual = idPez;
        if(estadoReiniciadoAnzuelo)
        {
            estadoPermitirPesca = true;
            estadoReiniciadoAnzuelo = false;
        }
    }
    else if(!estadoJuegoReaccion && idPez == idPezActual && estadoAnzuelo && estadoPermitirPesca)
    {
        atraparPez();
        estadoReaccionAnzuelo = false;
        estadoJuegoReaccion = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        idPezActual = -1;
    }
    else if(estadoJuegoReaccion && idPez == idPezActual)
    {
        desaparecerPez();
        estadoReaccionAnzuelo = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        estadoJuegoReaccion = false;
        idPezActual = -1;
    }
}

function desaparecerPez()
{
    document.getElementById("sonidoRotura").play();
    contadorPeces -= arregloPecesActivos[idPezActual - 1].getPesoEstanque();
    document.getElementById("pez_" + idPezActual).remove();
    document.getElementById("boton_" + idPezActual).remove();
    arregloEspacios[idPezActual - 1] = false;
}

function atraparPez()
{
    mostrarPez();
    document.getElementById("sonidoCaptura").play();
    contadorPeces -= arregloPecesActivos[idPezActual - 1].getPesoEstanque();
    document.getElementById("pez_" + idPezActual).remove();
    document.getElementById("boton_" + idPezActual).remove();
    arregloEspacios[idPezActual - 1] = false;
}

function mostrarPez()
{
    asignarYCalcularPez();
    document.getElementById("pantallaPesca").style.display = "inline";
    document.getElementById("pesoPez").value = "KG: " + arregloPecesActivos[idPezActual - 1].getPeso();
    document.getElementById("tamanioPez").value = "CM: " + arregloPecesActivos[idPezActual - 1].getTamanio();
    document.getElementById("dineroPez").value = "G: " + Math.round(dineroActualPez);
    dineroTotal += Math.round(dineroActualPez);
    if(dineroTotal > 9999)
    {
        dineroTotal = 9999;
    }
    document.getElementById("dineroTotal").value = dineroTotal;
}

function quitarMadera()
{
    document.getElementById("pantallaPesca").style.display = "none";
}

function asignarYCalcularPez()
{
    switch(arregloTipoPeces[idPezActual - 1])
    {
    case 1:
        modeloPez.style.backgroundImage = "url(images/fishes/bluegill.png)";
        modeloPez.style.height = 396 + "px";
        modeloPez.style.width = 785 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 396) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 785) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 2:
        modeloPez.style.backgroundImage = "url(images/fishes/sea_bass.png)";
        modeloPez.style.height = 396 + "px";
        modeloPez.style.width = 834 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 396) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 834) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 6);
        break;
    case 3:
        modeloPez.style.backgroundImage = "url(images/fishes/clownfish.png)";
        modeloPez.style.height = 306 + "px";
        modeloPez.style.width = 528 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 306) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 528) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 4:
        modeloPez.style.backgroundImage = "url(images/fishes/carp.png)";
        modeloPez.style.height = 418 + "px";
        modeloPez.style.width = 954 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 418) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 954) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 8);
        break;
    case 5:
        modeloPez.style.backgroundImage = "url(images/fishes/anchovy.png)";
        modeloPez.style.height = 217 + "px";
        modeloPez.style.width = 688 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 217) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 688) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 23);
        break;
    case 6:
        modeloPez.style.backgroundImage = "url(images/fishes/koi.png)";
        modeloPez.style.height = 297 + "px";
        modeloPez.style.width = 755 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 297) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 755) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 13);
        break;
    case 7:
        modeloPez.style.backgroundImage = "url(images/fishes/goldfish.png)";
        modeloPez.style.height = 230 + "px";
        modeloPez.style.width = 397 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 230) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 397) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 8:
        modeloPez.style.backgroundImage = "url(images/fishes/pufferfish_inflated.png)";
        modeloPez.style.height = 327 + "px";
        modeloPez.style.width = 493 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 327) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 493) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 6);
        break;
    case 9:
        modeloPez.style.backgroundImage = "url(images/fishes/tuna.png)";
        modeloPez.style.height = 375 + "px";
        modeloPez.style.width = 726 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 375) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 726) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 90);
        break;
    case 10:
        modeloPez.style.backgroundImage = "url(images/fishes/neon_tetra.png)";
        modeloPez.style.height = 202 + "px";
        modeloPez.style.width = 445 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 202) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 445) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 11:
        modeloPez.style.backgroundImage = "url(images/fishes/turtle.png)";
        modeloPez.style.height = 339 + "px";
        modeloPez.style.width = 568 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 339) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 568) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 43);
        break;
    case 12:
        modeloPez.style.backgroundImage = "url(images/fishes/frog.png)";
        modeloPez.style.height = 346 + "px";
        modeloPez.style.width = 329 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 346) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 329) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 122:
        modeloPez.style.backgroundImage = "url(images/fishes/frog_shiny.png)";
        modeloPez.style.height = 346 + "px";
        modeloPez.style.width = 329 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 346) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 329) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 13:
        modeloPez.style.backgroundImage = "url(images/fishes/trout.png)";
        modeloPez.style.height = 273 + "px";
        modeloPez.style.width = 813 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 273) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 813) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 17);
        break;
    case 14:
        modeloPez.style.backgroundImage = "url(images/fishes/catfish.png)";
        modeloPez.style.height = 318 + "px";
        modeloPez.style.width = 880 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 318) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 880) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 15:
        modeloPez.style.backgroundImage = "url(images/fishes/crawfish.png)";
        modeloPez.style.height = 266 + "px";
        modeloPez.style.width = 263 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 266) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 263) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 16:
        modeloPez.style.backgroundImage = "url(images/fishes/salmon.png)";
        modeloPez.style.height = 311 + "px";
        modeloPez.style.width = 851 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 311) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 851) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 7);
        break;
    case 17:
        modeloPez.style.backgroundImage = "url(images/fishes/swordfish.png)";
        modeloPez.style.height = 360 + "px";
        modeloPez.style.width = 745 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 293) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 745) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 140);
        break;
    case 18:
        modeloPez.style.backgroundImage = "url(images/fishes/char.png)";
        modeloPez.style.height = 196 + "px";
        modeloPez.style.width = 665 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 196) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 665) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 19:
        modeloPez.style.backgroundImage = "url(images/fishes/magikarp.png)";
        modeloPez.style.height = 308 + "px";
        modeloPez.style.width = 318 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 308) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 318) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 20:
        modeloPez.style.backgroundImage = "url(images/fishes/crab_animated.gif)";
        modeloPez.style.height = 309 + "px";
        modeloPez.style.width = 447 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 309) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 447) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 11);
        break;
    case 21:
        modeloPez.style.backgroundImage = "url(images/fishes/sturgeon.png)";
        modeloPez.style.height = 202 + "px";
        modeloPez.style.width = 832 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 202) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 832) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 65);
        break;
    case 22:
        modeloPez.style.backgroundImage = "url(images/fishes/piranha.png)";
        modeloPez.style.height = 267 + "px";
        modeloPez.style.width = 425 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 267) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 425) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 11);
        break;
    case 23:
        modeloPez.style.backgroundImage = "url(images/fishes/anglerfish.png)";
        modeloPez.style.height = 305 + "px";
        modeloPez.style.width = 511 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 305) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 511) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 37);
        break;
    case 24:
        modeloPez.style.backgroundImage = "url(images/fishes/sperm_whale.png)";
        modeloPez.style.height = 369 + "px";
        modeloPez.style.width = 892 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 369) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 892) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 25:
        modeloPez.style.backgroundImage = "url(images/fishes/great_white_shark.png)";
        modeloPez.style.height = 357 + "px";
        modeloPez.style.width = 995 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 357) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 995) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 890);
        break;
    }
}
