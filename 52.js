function solution(a, b, n) {
    let totalCola = 0; // 총 마신 콜라의 양을 저장하는 변수

    while (n >= a) {  // n 이 a(교환에 필요한 빈 병의 개수)보다 크거나 같을 때 반복
        const exchangedCola = Math.floor(n / a) * b; // 현재 가지고 있는 콜라를 교환하여 받은 새로운 콜라의 양
        totalCola += exchangedCola; // 받은 새로운 콜라의 양을 총 마신 콜라의 양에 더함
        n = n % a + exchangedCola; // 현재 가지고 있는 콜라 중 남은 병의 개수를 다시 계산하여 n에 저장
    } // 나머지 병의 개수 + 받은 새로운 콜라의 양
    return totalCola;
}
console.log(solution(2, 1, 20))