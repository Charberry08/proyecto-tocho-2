#include <iostream>
#include <emscripten/bind.h>
#include "cania.cpp"

Cania :: Cania()
{
    tiempoMas = 0;
}
Cania :: ~Cania(){}

void Cania :: setTiempoMas(int tiempoMenos)
{
    this -> tiempoMenos = tiempoMenos;
}
int Cania :: getTiempoMas()
{
    return tiempoMas;
}

void Cania :: setCaniaActual(int caniaActual)
{
    this -> caniaActual = caniaActual;
}
int Cania :: getCaniaActual()
{
    return caniaActual;
}

void Cania :: lanzarCania(int id)
{
    switch(caniaActual)
    {
        case 1:
            anzueloLigero.atraparPez(id)
            break;
        case 2:
            anzueloMediano.atraparPez(id)
            break;
        case 3:
            anzueloPesado.atraparPez(id);
            break;
    }
}

void Cania :: mejorarCania()
{
    tiempoMas+=200;
}