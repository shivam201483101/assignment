#include <iostream>
#include <vector>
#include <algorithm>
struct Pro {
int id;
bool act;
Pro(int id) {
this->id = id;
act = true;
}
};
class Elect {
public:
int TotalProcess;
std::vector<Pro> process;
Elect() {}
void initialiseElect() {
std::cout << "No of processes 5" << std::endl;
TotalProcess = 5;
process.reserve(TotalProcess);
for (int i = 0; i < process.capacity(); i++) {
process.emplace_back(i);
}
}
void Election() {
std::cout << "Process no " << process[FetchMaximum()].id << " fails" << std::endl;
process[FetchMaximum()].act = false;
std::cout << "Election Initiated by 2" << std::endl;
int initializedProcess = 2;
int old = initializedProcess;
int newer = old + 1;
while (true) {
if (process[newer].act) {
std::cout << "Process " << process[old].id << " pass Election(" << process[old].id << ") to" << process[newer].id << std::endl;
old = newer;
}
newer = (newer + 1) % TotalProcess;
if (newer == initializedProcess) {
break;
}
}
std::cout << "Process " << process[FetchMaximum()].id << " becomes coordinator" << std::endl;
int coord = process[FetchMaximum()].id;
old = coord;
newer = (old + 1) % TotalProcess;
while (true) {
if (process[newer].act) {
std::cout << "Process " << process[old].id << " pass Coordinator(" << coord << ") message to process " << process[newer].id << std::endl;
old = newer;
}
newer = (newer + 1) % TotalProcess;
if (newer == coord) {
std::cout << "End Of Election " << std::endl;
break;
}
}
}
int FetchMaximum() {
int Ind = 0;
int maxId = -9999;
for (int i = 0; i < process.size(); i++) {
if (process[i].act && process[i].id > maxId) {
maxId = process[i].id;
Ind = i;
}
}
return Ind;
}
};
int main() {
    Elect object;
object.initialiseElect();
object.Election();
return 0;
}
/*
Output:
No of processes 5
Process no 4 fails
Election Initiated by 2
Process 2 pass Election(2) to3
Process 3 pass Election(3) to0
Process 0 pass Election(0) to1
Process 3 becomes coordinator
Process 3 pass Coordinator(3) message to process 0
Process 0 pass Coordinator(3) message to process 1
Process 1 pass Coordinator(3) message to process 2
End Of Election 
*/
/*
class Pro:
    def __init__(self, id):
        self.id = id
        self.act = True
 
class Bully:
    def __init__(self):
        self.TotalProcess = 0
        self.process = []
     
    def initialiseBully(self):
        print("No of processes 5")
        self.TotalProcess = 5
        self.process = [Pro(i) for i in range(self.TotalProcess)]
     
    def Election(self):
        print("Process no " + str(self.process[self.FetchMaximum()].id) + " fails")
        self.process[self.FetchMaximum()].act = False
        print("Election Initiated by 2")
        initializedProcess = 2
 
        old = initializedProcess
        newer = old + 1
 
        while (True):
            if (self.process[newer].act):
                print("Process " + str(self.process[old].id) + " pass Election(" + str(self.process[old].id) + ") to" + str(self.process[newer].id))
                old = newer
            newer = (newer + 1) % self.TotalProcess
            if (newer == initializedProcess):
                break
 
        print("Process " + str(self.process[self.FetchMaximum()].id) + " becomes coordinator")
        coord = self.process[self.FetchMaximum()].id
 
        old = coord
        newer = (old + 1) % self.TotalProcess
        while (True):
            if (self.process[newer].act):
                print("Process " + str(self.process[old].id) + " pass Coordinator(" + str(coord) + ") message to process " + str(self.process[newer].id))
                old = newer
            newer = (newer + 1) % self.TotalProcess
            if (newer == coord):
                print("End Of Election ")
                break
     
    def FetchMaximum(self):
        maxId = -9999
        ind = 0
        for i in range(self.TotalProcess):
            if (self.process[i].act and self.process[i].id > maxId):
                maxId = self.process[i].id
                ind = i
        return ind
 
def main():
    object = Bully()
    object.initialiseBully()
    object.Election()
 
if __name__ == "__main__":
    main()
*/



/*
import java.util.Scanner;

public class GFG {

    class Pro {
        int id;
        boolean act;

        Pro(int id) {
            this.id = id;
            act = true;
        }
    }

    int TotalProcess;
    Pro[] process;

    public GFG() {
    }

    public void initialiseGFG() {
        System.out.println("No of processes 5");
        TotalProcess = 5;
        process = new Pro[TotalProcess];
        int i = 0;

        while (i < process.length) {
            process[i] = new Pro(i);
            i++;
        }
    }

    public void Election() {
        System.out.println("Process no "
                + process[FetchMaximum()].id
                + " fails");
        process[FetchMaximum()].act = false;
        System.out.println("Election Initiated by 2");
        int initializedProcess = 2;

        int old = initializedProcess;
        int newer = old + 1;

        while (true) {
            if (process[newer].act) {
                System.out.println(
                        "Process " + process[old].id
                                + " pass Election(" + process[old].id
                                + ") to" + process[newer].id);

                old = newer;
            }

            newer = (newer + 1) % TotalProcess;
            if (newer == initializedProcess) {
                break;
            }
        }

        System.out.println("Process "

                + process[FetchMaximum()].id
                + " becomes coordinator");

        int coord = process[FetchMaximum()].id;

        old = coord;
        newer = (old + 1) % TotalProcess;

        while (true) {

            if (process[newer].act) {
                System.out.println(
                        "Process " + process[old].id
                                + " pass Coordinator(" + coord

                                + ") message to process "
                                + process[newer].id);
                old = newer;
            }
            newer = (newer + 1) % TotalProcess;
            if (newer == coord) {
                System.out.println("End Of Election ");
                break;
            }
        }
    }

    public int FetchMaximum() {
        int Ind = 0;
        int maxId = -9999;
        int i = 0;
        while (i < process.length) {
            if (process[i].act && process[i].id > maxId) {
                maxId = process[i].id;
                Ind = i;
            }
            i++;
        }

        return Ind;
    }

    public static void main(String arg[]) {
        GFG object = new GFG();
        object.initialiseGFG();
        object.Election();
    }
}
*/