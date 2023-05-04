#include <iostream>
#include "peces.h"

Peces :: Peces(int tamanio, int peso, int tiempo)
{
    this -> tamanio = tamanio;
    this -> peso = peso;
    this -> tiempo = tiempo;
}
Peces :: ~Peces(){}

void Peces :: setTamanio(int tamanio)
{
    this -> tamanio = tamanio;
}
int Peces :: getTamanio()
{
    return tamanio;
}

void Peces :: setPeso(int peso)
{
    this -> peso = peso;
}
int Peces :: getPeso()
{
    return peso;
}

void Peces :: setTiempo(int tiempo)
{
    this -> tiempo = tiempo;
}
int Peces :: getTiempo()
{
    return tiempo;
}

void Peces :: setId(int id)
{
    this -> id = id;
}
int Peces :: getId()
{
    return id;
}

void Peces :: setPesoEstanque(int pesoEstanque)
{
    this -> pesoEstanque = pesoEstanque;
}
int Peces :: getPesoEstanque()
{
    return pesoEstanque;
}
