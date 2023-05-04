#include <iostream>
#include <emscripten/bind.h>

using namespace empscripten;

Anzuelo :: Anzuelo(){}
Anzuelo :: ~Anzuelo(){}

void Anzuelo :: setBaitPower(int baitPower)
{
    this -> baitPower = baitPower;
}
int Anzuelo :: getBaitPower()
{
    return baitPower;
}

void Anzuelo :: atraparPez(int ID){}


