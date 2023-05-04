#include <iostream>
#include <vector>
#include <emscripten/bind.h>
#include "ligero.h"

using namespace empscripten;

Ligero :: Ligero(){}
Ligero :: ~Ligero(){}

void Ligero :: atraparPez(int id)
{
    bool alreadyCatched = false;
    for(int elemento : catalogoLigero)
    {
        if(id == elemento)
        {
            alreadyCatched = true;
        }
    }
    if(!alreadyCatched)
    {
        catalogoLigero.push_back(id);
    }
}