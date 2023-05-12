#ifndef CANIA_H
#define CANIA_H
#include "../anzuelo_inheritance/ligero/ligero.h"
#include "../anzuelo_inheritance/mediano/mediano.h"
#include "../anzuelo_inheritance/pesado/pesado.h"

extern "C"
{
class Cania
{
private:
    int tiempoMas;
    int caniaActual;

public:
    Cania();
    ~Cania();
    Ligero anzueloLigero;
    Mediano anzueloMediano;
    Pesado anzueloPesado;
    Anzuelo *anzueloPtr;

    void setTiempoMas(int tiempoMas);
    int getTiempoMas();

    void setCaniaActual(int caniaActual);
    int getCaniaActual();
    
    void capturaExitosa(int id);
    void mejorarCania();
};
}

#endif