
#include <stdio.h>
#include <stdlib.h>
#include<bits/stdc++.h>
using namespace std;
int main() {
 int i,j,k; int x=0;
 char a[10][10];
 int n,num[10],b[10][10];
 printf("Enter the no. of physical clocks: ");
 scanf("%d",&n);
 for(i=0;i<n;i++) {
 printf("\nNo. of nodes for physical clock %d: ",i+1); 
 scanf("%d",&num[i]);
 x=0;
 for(j=0;j<num[i];j++) {
 printf("\nEnter the name of process: ");
 scanf("%s",&a[i][j]);
 b[i][j]=x + rand() % 10;
 x=b[i][j]+1;

 }

 }
 printf("\n\n");
 for(i=0;i<n;i++) {
 printf("Physical Clock %d",i+1);
 for(j=0;j<num[i];j++){
 printf("\nProcess %c",a[i][j]);
 printf(" has P.T. : %d ",b[i][j]);

 }
 printf("\n\n");

 }
 x=0;
 for(i=0;i<10;i++)
 for(j=0;j<n;j++)
 for(k=0;k<num[j];k++)
 if(b[j][k]==i) {
 x = rand() % 10 + x;
 printf("\nLogical Clock Timestamp for process %c",a[j][k]);
 printf(" : %d ",x);
 printf("\n");
 }
 return 0;

} 
/*
Enter the no. of physical clocks: 3

No. of nodes for physical clock 1: 2

Enter the name of process: a

Enter the name of process: b

No. of nodes for physical clock 2: 2

Enter the name of process: c

Enter the name of process: d

No. of nodes for physical clock 3: 2

Enter the name of process: e

Enter the name of process: f


Physical Clock 1
Process a has P.T. : 3 
Process b has P.T. : 10 

Physical Clock 2
Process c has P.T. : 7 
Process d has P.T. : 13 

Physical Clock 3
Process e has P.T. : 3 
Process f has P.T. : 9 


Logical Clock Timestamp for process a : 6 

Logical Clock Timestamp for process e : 8 

Logical Clock Timestamp for process c : 17 

Logical Clock Timestamp for process f : 18 */

/*


def max1(a, b) : 
 
    # Return the greatest of the two
    if a > b : 
        return a
    else : 
        return b
 
# Function to display the logical timestamp
def display(e1, e2, p1, p2) : 
    print()
    print("The time stamps of events in P1:")
    for i in range(0, e1) : 
        print(p1[i], end = " ")
     
    print()
    print("The time stamps of events in P2:")
     
    # Print the array p2[]
    for i in range(0, e2) : 
        print(p2[i], end = " ")
 
# Function to find the timestamp of events
def lamportLogicalClock(e1, e2, m) : 
    p1 = [0]*e1
    p2 = [0]*e2
 
    # Initialize p1[] and p2[]
    for i in range (0, e1) : 
        p1[i] = i + 1
 
    for i in range(0, e2) : 
        p2[i] = i + 1
     
    for i in range(0, e2) : 
        print(end = '\t')
        print("e2", end = "")
        print(i + 1, end = "")
     
    for i in range(0, e1) : 
        print()
        print("e1", end = "")
        print(i + 1, end = "\t")
 
        for j in range(0, e2) : 
            print(m[i][j], end = "\t")
         
    for i in range(0, e1) : 
 
        for j in range(0, e2) :
           
            # Change the timestamp if the
            # message is sent
            if(m[i][j] == 1) : 
                p2[j] = max1(p2[j], p1[i] + 1)
                for i in range(j + 1, e2) : 
                    p2[k] = p2[k - 1] + 1
 
            # Change the timestamp if the
            # message is received
            if(m[i][j] == -1) : 
                p1[i] = max1(p1[i], p2[j] + 1)
                for k in range(i + 1, e1) : 
                    p1[k] = p1[k - 1] + 1
 
    # Function Call
    display(e1, e2, p1, p2)
 
# Driver Code
 
if __name__ == "__main__" : 
    e1 = 5
    e2 = 3
    m = [[0]*3 for i in range(0,5)]
     
    # dep[i][j] = 1, if message is sent
    # from ei to ej
    # dep[i][j] = -1, if message is received
    # by ei from ej
    # dep[i][j] = 0, otherwise
 
    m[0][0] = 0
    m[0][1] = 0
    m[0][2] = 0
    m[1][0] = 0
    m[1][1] = 0
    m[1][2] = 1
    m[2][0] = 0
    m[2][1] = 0
    m[2][2] = 0
    m[3][0] = 0
    m[3][1] = 0
    m[3][2] = 0
    m[4][0] = 0
    m[4][1] = -1
    m[4][2] = 0
     
    # Function Call
    lamportLogicalClock(e1, e2, m)
 
*/
