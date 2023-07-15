#[allow(dead_code)]
pub fn maskify(cc: &str) -> String {
    let mask_len = cc.len().saturating_sub(4);
    "#".repeat(mask_len) + &cc[mask_len..]
}
