use fmt;

export fn main() void = {
	fmt::println("Hello, world!")!;

    let p = point { x = 1, y = 2 };
    fmt::println(point.x)!;
};


type point = struct {
    x: int,
    y: int
};
