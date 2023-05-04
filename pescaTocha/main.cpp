#include <iostream>
#include <cstdlib>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int main()
{
    srand(time(0));
    std::cout << "Welcome to my worldBI!" << std::endl;
    std::cout << "Man I love stacks" << std::endl;

    return 0;
}