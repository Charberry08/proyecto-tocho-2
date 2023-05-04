#ifndef CANIA_H
#define CANIA_H
#include "anzuelo.h"
#include "ligero.h"
#include "mediano.h"
#include "pesado.h"
#include <empscripten.h>

class Cania
{
private:
    int tiempoMas;
    int caniaActual;
    Ligero anzueloLigero();
    Mediano anzueloMediano();
    Pesado anzueloPesado();

public:
    Cania();
    ~Cania();

    void setTiempoMas(int tiempoMas);
    int getTiempoMas();

    void setCaniaActual();
    int getCaniaActual();
    
    void lanzarCania();
    void mejorarCania();
};

#include "cania.cpp"
#endif