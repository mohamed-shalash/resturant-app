#include<iostream>
#include<windows.h>
using namespace std;
int main{
    string x[3];
    x[0] = "\";
    x[1] = "|";
    x[2] = "/";
    for(int i=0; i<3;i++){
        cout<<x[i];
        Sleep(200);
    }
}