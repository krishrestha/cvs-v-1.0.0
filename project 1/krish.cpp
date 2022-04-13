#include<iostream>
using namespace std ;
int sum(int a,int b){
    int c = a + b ;
    return c ;
}

int main (){
    int num1 , num2 ;
    cout<<"enter num 1 and 2"<<endl;
    cin>>num1>>num2>>endl;
    cout<<"the sum is "<<sum(int num1,int num2);
    return 0;
}