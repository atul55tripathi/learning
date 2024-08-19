#include<bits/stdc++.h>
using namespace std;

void largest(vector<int> a)                     // largest element
{
    cout<<*max_element(a.begin(),a.end());
}

void secLargest( vector<int> a)                 // second larges elements
{
    int n=a.size();

    if(n==1)
    {
        cout<<" no second largest";
        return;
    }

    int x=-99,y=-99;

    for(int i=0;i<n;i++)
    {
        if(a[i]>x)
        {
            y=x;                                // was forgetting to update y... what it they were sorted
            x=a[i];
        }
        else if(a[i]>y&&a[i]!=x)                 // else me nhi jayega
        {
            y=a[i];
        }
    }

    if(y==-99)
    cout<<" no second ele";
    else
    cout<<" second largest: "<<y;

}

void isSorted(vector<int> a)                    // check if sorted?
{
    // vector<int> b(a);
    // sort(b.begin(),b.end());

    // if(a==b)
    // cout<< "sorted";
    // else cout<< "unsorted";

    int n=a.size();                             // O(n)
    for(int i=1;i<n;i++)
    {
        if(a[i-1]>a[i])
        {
            cout<<"unsorted";
            return;
        }
    }
    cout<<"sorted";
}

void dupli(vector<int> a)                       // dont print next duplicates in an array
{
    int l=0,r=0;
    int n=a.size();

    while(r<n)
    {
        if(a[r]==a[l])
        {
            r++;
        }
        else{
            cout<< a[l]<<" ";
            l=r;
            r++;
        }
    }
    cout<<a[n-1];
}

void prLeft(vector<int> a)                      // one left shift then print
{
    int n=a.size();
    cout<< a[n-1]<<" ";
    for(int i=1;i<n;i++)
    {
        cout<< a[i]<<" ";
    }
}

void dleft(vector<int> a,int d)                 // print after shifting array left d times
{
    int n=a.size();
    d%=n;
    for(int i=d;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    for(int i=0;i<d;i++)
    {
        cout<<a[i]<<" ";
    }
}

void MoveZero(vector<int> a)                    // sare zeroes kahi pe bhi ho, peeche lga de
{
    int n=a.size();
    for(int i=0;i<n;i++)
    {
        if(a[i])
        cout<<a[i]<<" " ;
    }
}

// linear search
// find union

void unionF(vector<int> a,vector<int> b)
{
    unordered_map<int,int> m,s;

    for(auto i:a)
    m[i]++;

    for(auto i:b)
    s[i]++;

}

void maxOnes(vector<int> a)
{
    int n=a.size();
    int ans=0;
    int cnt=0;
    for(int i=0;i<n;i++)
    {
        if(a[i])
        {
            cnt++;
            if(ans<cnt)
            ans=cnt;
        }
        else{
            cnt=0;
        }
    }

    cout<< "max ones are: "<<ans;
}

int main(){

    vector<int> a={1,2,0,0,7,4};
    vector<int> b={1,3,4,5,0,0};
    vector<int> c={1,1,1,0,1,1,0,0,0,1,1,1,1};

    // 1,2,0,0,7,4,3,5

    maxOnes(c);

    return 0;

}