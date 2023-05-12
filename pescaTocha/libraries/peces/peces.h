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
    int dinero;

public:
    Peces();
    ~Peces();
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

    void setDinero(int dinero);
    int getDinero();
};

#endif