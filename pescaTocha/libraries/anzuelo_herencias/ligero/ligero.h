#ifndef LIGERO_H
#define LIGERO_H
#include "anzuelo.h"

class Ligero : public Anzuelo
{
public:
    Ligero();
    ~Ligero();
    std::vector <int> catalogoLigero;

    void atraparPez(int);
};

#include "ligero.cpp"
#endif