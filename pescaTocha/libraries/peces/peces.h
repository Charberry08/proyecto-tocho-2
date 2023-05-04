#ifndef PECES_H
#define PECES_H

class Peces
{
protected:    
    int tamanio;
    int peso;
    int tiempo;
    int pesoEstanque;
    int id;

public:
    Peces(int tamanio, int peso, int tiempo){}
    ~Peces(){}
    void setTamanio(int tamanio);
    int getTamanio();

    void setPeso(int peso);
    int getPeso();

    void setTiempo(int tiempo);
    int getTiempo();

    void setId(int id);
    int getId();

    void setPesoEstanque(int pesoEstanque);
    int getPesoEstanque();

    int calculatePoints();
};

#include "peces.cpp"
#endif