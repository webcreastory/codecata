function solution(numbers) {
    // 결과를 담을 배열 선언
    const answer = [];
    // 주어진 배열의 길이 저장
    const len = numbers.length;

    // 모든 수를 한 번씩 확인하기 위한 반복문
    for (let i = 0; i < len; i++) {
        // 두 번째 수부터 시작하여 모든 조합 확인
        for (let j = i + 1; j < len; j++) {
            // 두 수의 합 구하기
            const sum = numbers[i] + numbers[j];
            // 중복되는 합이 없으면 결과 배열에 추가
            if (!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    // 결과 배열을 오름차순으로 정렬하여 반환
    return answer.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1]))