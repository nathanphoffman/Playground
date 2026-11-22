Console.WriteLine("Hello, World!");

var x = 1;
var y = 2;

var t = (x,y) switch {
    (1,2)=>true,
    (0,2)=>false,
    _=>false
};

var fn = (int q, int w)=>(q,w) switch {
    (1,2)=>false,
    _=>true
};

Console.WriteLine(fn(1,2));

Console.WriteLine("Hello world 2");


Person nate = new ("nate",2);

Console.WriteLine(nate.Name);

Test test = new();
test.DoStuff("hiyo");

public class Test {

    public void DoStuff(string test) {
        Console.WriteLine("doing stuff");     
    }

}
 
public record Person(string Name, int Age);
