#include<iostream>
#include<bits/stdc++.h>

using namespace std;

// for using all the inbuild command just use bits/stdc++.h, remembering all others is useless

// dont forget to remove return 0 when writing entire code

// string can directly be compared in c++, 
// string a
// return a=="hello";

// vector<int> ar(size, initial value);
// vector<vector<int>> ar(m,vector<int> (n,initial value));



void countDigits(int n)                                         // counts number of digits
{
    int num=0;
    while(n)
    {
        n/=10;
        num++;
    }
    cout<<"\n the number of digits are: "<<num;
}

void reverseNumber(int n)                                       // logic to reverse a number
{
    int num=0;
    while(n)
    {
        num*=10;
        num+=n%10;
        n/=10;
    }
    cout<<"\n the reverse of the number is: "<< num;
}

void checkPalindrome(int n)
{
                                                                // there can be two logics here
                                                                // either we can convert the number to 
                                                                // reverse and compare
                                                                // or we can start know the length of number 
                                                                // and start comparing the beginning to the end
    int num=0,x=n;
    while(n)
    {
        num*=10;
        num+=n%10;
        n/=10;
    }
    if(x==num)
    cout<<"\n the number is a palindrom";
    else
    cout<<"\n the number is not a palindrom";
}

int gdc(int a,int b)
{
    int c=a%b;
    if(c==0)
    return b;
    else return gdc(b,c);
}

// 6 8
// 8 6
// 6 2

void gcdandhcf(int n,int m)
{
    int g,l;                                                   // try to remember euclidian logic
    
    g=gdc(n,m);
    l=(m*n)/g;                                                 // a*b= gcd* lcm
    

    cout<<" the gcd is: "<<g<<" and lcm is: "<<l;

}

void pAlldiv(int n)
{
    for(int i=1;i<=n;i++)
    if(n%i==0)
    cout<<i<<" ";
}

void revserAr(vector<int> a,int r)                      // function to reverse print
{
    if(r>=0)
    {
        cout<<a[r]<<" ";
        revserAr(a,r-1);
    }
}

void fib(int cur, int next,int i,int n)             // printing fibinocci without returning int
{   
    if(i<n)
    {
        cout<<cur<<" ";
        fib(next,cur+next,i+1,n);
    }
}

void freq(vector<int> a)
{
    unordered_map<int,int> m;                        // I want sorted the I will use map
    for(auto i:a)
    m[i]++;

    for(auto i:m)
    {
        cout<<"the freq of "<<i.first<<" is: "<<i.second<<endl;
    }
}

void resSortFre(vector<int> a)
{
    unordered_map<int,int> m;
    for(auto i:a)
    m[i]++;

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> q;              // by default max heap... this one is min head int vector greater

    for(auto i:m)
    {
        q.push({i.second,i.first});
    }

    while(!q.empty())
    {
        cout<<" the freq of "<< q.top().second<<" is:  "<<q.top().first<<endl;
        q.pop();
    }
}

void mergesort(vector<int> a,int l, int r)
{
    if(l<r)
    {
        int m=(l+r)/2;
        mergesort(a,l,m);
        mergesort(a,m+1,r);
        merge(a,l,m,r);
    }
}

void quick(vector<int> a,int l, int r)
{
    if(l<r)
    {
        int pi=quickSort(a,l,r);
        quick(a,l,pi-1);
        quick(a,pi+1,r);
    }
}

int main(){
    
    vector<int> a={1,2,3,2,5,6,3,2,100,1000,12213};                
    resSortFre(a);
    return 0;
}