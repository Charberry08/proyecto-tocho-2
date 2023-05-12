#include <iostream> 
#include "cania.h"
#include "../anzuelo_inheritance/ligero/ligero.h"
#include "../anzuelo_inheritance/mediano/mediano.h"
#include "../anzuelo_inheritance/pesado/pesado.h"

extern "C"{
Cania :: Cania()
{
  tiempoMas = 0;
  caniaActual = 1;
  anzueloPtr = &anzueloLigero;
}
Cania :: ~Cania(){}

void Cania :: setTiempoMas(int tiempoMas)
{
    this -> tiempoMas = tiempoMas;
}
int Cania :: getTiempoMas()
{
    return tiempoMas;
}

void Cania :: setCaniaActual(int caniaActual)
{
    this -> caniaActual = caniaActual;
  
    switch(caniaActual)
      {
        case 1: 
          anzueloPtr = &anzueloLigero;
          break;
        case 2:
          anzueloPtr = &anzueloMediano;
          break;
        case 3:
          anzueloPtr = &anzueloPesado;
          break;
      }
}

int Cania :: getCaniaActual()
{
    return caniaActual;
}

void Cania :: capturaExitosa(int id)
{
    anzueloPtr -> atraparPez(id);
}

void Cania :: mejorarCania()
{
    tiempoMas+=200;
}
}