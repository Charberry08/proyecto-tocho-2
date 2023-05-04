#include <iostream>
#include <vector>
#include <emscripten/bind.h>
#include "pesado.h"

using namespace empscripten;

Pesado :: Pesado(){}
Pesado :: ~Pesado(){}

void Pesado :: atraparPez(int id)
{
    bool alreadyCatched = false;
    for(int elemento : catalogoPesado)
    {
        if(id == elemento)
        {
            alreadyCatched = true;
        }
    }
    if(!alreadyCatched)
    {
        catalogoPesado.push_back(id);
    }
}