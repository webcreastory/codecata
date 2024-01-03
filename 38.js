function solution(n, m) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);

    return [gcd(n, m), lcm(n, m)];
}
console.log(solution(3, 12));