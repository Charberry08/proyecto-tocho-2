#include "anchoa.h"
#include <iostream>
#include <cstdlib>

Anchoa :: Anchoa()
{ 
    tamanio = rand() % 11 + 15;
    peso = rand() % 6 + 20;
    tiempo = 800;
    pesoEstanque = 2; 
    id = 5;
    dinero = 12;
}
Anchoa :: ~Anchoa(){}