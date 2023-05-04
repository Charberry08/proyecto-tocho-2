#ifndef PESADO_H
#define PESADO_H
#include "anzuelo.h"

class Pesado : public Anzuelo
{
public:
    Pesado();
    ~Pesado();
    std::vector <int> catalogoPesado;

    void atraparPez(int);
};

#include "pesado.cpp"
#endif