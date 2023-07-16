#[derive(Clone, PartialEq)]
struct Point {
    x: i8,
    y: i8,
}

impl Point {
    fn step(&mut self, dir: &char) {
        match dir {
            'n' => self.y -= 1,
            'e' => self.x += 1,
            'w' => self.x -= 1,
            's' => self.y += 1,
            _ => panic!("Invalid direction {dir}"),
        }
    }
}

#[allow(dead_code)]
pub fn is_valid_walk(walk: &[char]) -> bool {
    if walk.len() != 10 {
        return false;
    };
    let start_pos = Point { x: 0, y: 0 };
    let mut cur_pos = start_pos.clone();
    for dir in walk {
        cur_pos.step(dir);
    }
    start_pos == cur_pos
}
