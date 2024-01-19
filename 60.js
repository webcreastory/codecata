// 기사단원의 수, 공격력의 제한수치, 무기의 공격력을 받아 철의 무게를 계산하는 함수
function solution(number, limit, power) {
    let totalIronWeight = 0;

    // 각 기사에 대해 반복
    for (let i = 1; i <= number; i++) {
        // 현재 기사의 약수 개수를 계산
        const divisorCount = getDivisorCount(i);

        // 약수 개수가 제한수치보다 크면 제한수치를 초과한 무기를 구매
        if (divisorCount > limit) {
            totalIronWeight += power;
        } else {
            // 아니면 약수의 개수만큼 철을 구매
            totalIronWeight += divisorCount;
        }
    }

    // 모든 기사의 철의 무게를 반환
    return totalIronWeight;
}

// 약수의 개수를 계산하는 함수
function getDivisorCount(num) {
    let count = 0;

    // 1부터 해당 수까지 반복하며 약수를 찾음
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    // 약수의 개수 반환
    return count;
}
console.log(solution(5, 3, 2))