#include <iostream>
#include <vector>
#include "ligero.h"

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