#ifndef ANZUELO_H
#define ANZUELO_H

#include <iostream>

class Anzuelo
{
protected:
    int baitPower;

public:
    Anzuelo();
    ~Anzuelo();
    void setBaitPower(int baitPower);
    int getBaitPower();

    virtual void atraparPez(int);
    
};

#include "anzuelo.cpp"
#endif