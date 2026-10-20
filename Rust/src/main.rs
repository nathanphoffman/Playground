fn main() {
 
    const FIZZ : &str = "Fizz";
    const BUZZ : &str = "Buzz";

    for i in 1..101 {

        let is_multiple_of_three: bool = i % 3 == 0;
        let is_multiple_of_five: bool = i % 5 == 0;


        if is_multiple_of_three && is_multiple_of_five {
            println!("{}{}", FIZZ, BUZZ);
        }
        else if i % 3 == 0 {
            println!("{}", FIZZ);
        }
        else if i % 5 == 0 {
            println!("{}", BUZZ);
        }
        else {
        println!("{}", i);

        }
    }


    match (0,1) {
        (0,_) => println!("Was a 0"),
        (_,1) => println!("Was a 1"),
        _ => println!("Not either")
    }

    enum ErrorLevel {
        Information(String),
        Error(String),
        Verbose(String),
        Critical
    }

    let lvl : ErrorLevel = ErrorLevel::Critical;

    match lvl {
        ErrorLevel::Critical => println!("this is critical error"),
        _ => println!("not covered")
    }

}


fn are_closings_valid(&str string_with_closings) -> bool {

    let recorded_openings: Vec<&str> = Vec::new();

    let possible_openings = vec!["(","[","{"];
    let possible_endings = vec![")","]","}"];

    for chr in string_with_closings.chars() {
        if recorded_openings.contains(&chr) {
            recorded_openings.push(chr);
        }

    }
    

}



