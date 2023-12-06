use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;

use regex::Regex;

// fn read_lines(filename: &str) -> Vec<String> {
//     read_to_string(filename)
//         .unwrap()  // panic on possible file-reading errors
//         .lines()  // split the string into an iterator of string slices
//         .map(String::from)  // make each slice into a string
//         .collect()  // gather them together into a vector
// }
// The output is wrapped in a Result to allow matching on errors
// Returns an Iterator to the Reader of the lines of the file.
fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}

fn parse_coords(lines: Vec<&str>) -> i32 {
    let mut res = 0;
    let re = Regex::new(r"[^0-9]").unwrap();
    if let Ok(lines) = read_lines("./input.txt") {
        for line in lines {
            if let Ok(lok) = line {
                let numbers = re.replace_all(&lok, "");
                let first = numbers.chars().nth(0).unwrap();
                let last = numbers.chars().nth(numbers.len() - 1).unwrap();
                let mut target_string = String::from(first);
                target_string.push(last);
                let target_number = target_string.parse::<i32>().unwrap();
                res += target_number;
                println!(
                    "line: {} numbers: {} first: {} last: {}, target: {}",
                    lok, numbers, first, last, target_number
                );
            }
        }
    }
    return res;
}

fn main() {
    let data = read_lines("input.txt").unwrap();
    let result = parse_coords(data);
    println!("{}", result);
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_part1() {
        let data = read_lines("input/01.test_part1.txt");
        let result = parse_coords(data);
        assert_eq!(result, 54697);
    }
}
