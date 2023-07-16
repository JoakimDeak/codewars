use std::collections::HashMap;

pub fn xo(string: &'static str) -> bool {
    let mut char_counts = HashMap::new();
    for c in string.to_lowercase().chars() {
        *char_counts.entry(c).or_insert(0) += 1
    }
    char_counts.get(&'x').unwrap_or(&0) == char_counts.get(&'o').unwrap_or(&0)
}
