use fmt;

export fn main() void = {
    def MAX: int = 100;
    const y : int = 2000;

	fmt::println("Hello, world!")!;

    let p = point { x = 1, y = 2 };
    fmt::println(p.x)!;
};


type COLORS = enum { RED, GREEN };

type 

type point = struct {
    x: int,
    y: int
};
