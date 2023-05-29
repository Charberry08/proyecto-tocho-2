#include <iostream> 
#include "cania.h"
#include "../anzuelo_inheritance/ligero/ligero.h"
#include "../anzuelo_inheritance/mediano/mediano.h"
#include "../anzuelo_inheritance/pesado/pesado.h"
#include <vector>

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

int Cania :: getTamanioVector(int opcion)
{
    int temp;
    switch(opcion)
    {
        case 1:
          temp = anzueloPtr -> catalogoLigero.size();
          break;
        case 2:
          temp = anzueloPtr -> catalogoMediano.size();
          break;
        case 3:
          temp = anzueloPtr -> catalogoPesado.size();
          break;
    }
    return temp;
}

int Cania :: getIndexVector(int opcion, int index)
{
  int temp;
  switch(opcion)
  {
    case 1: 
      temp = anzueloPtr -> catalogoLigero[index];
      break;
    case 2:
      temp = anzueloPtr -> catalogoMediano[index];
      break;
    case 3:
      temp = anzueloPtr -> catalogoPesado[index];
      break;
  }
  return temp;
}