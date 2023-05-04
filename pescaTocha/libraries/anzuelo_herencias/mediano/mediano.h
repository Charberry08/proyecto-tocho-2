#ifndef MEDIANO_H
#define MEDIANO_H
#include "anzuelo.h"

class Mediano : public Anzuelo
{
public:
    Mediano();
    ~Mediano();
    std::vector <int> catalogoMediano;

    void atraparPez(int);
};

#include "mediano.cpp"
#endif