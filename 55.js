function solution(k, m, score) {
    // 점수를 내림차순으로 정렬하여 높은 점수부터 사용하기 위함
    const sortedScore = score.sort((a, b) => b - a);

    let maxProfit = 0; // 최대 이익을 저장하는 변수
    let currentBox = []; // 현재 상자에 포장 중인 사과들의 점수를 저장하는 배열

    for (let i = 0; i < sortedScore.length; i++) {
        currentBox.push(sortedScore[i]); // 현재 상자에 점수 추가

        // 상자에 m개의 사과가 들어갔을 때
        if (currentBox.length === m) {
            // 현재 상자에 있는 사과들 중 최저 점수 * m을 계산하여 최대 이익에 추가
            const boxPrice = Math.min(...currentBox) * m;
            maxProfit += boxPrice;

            // 다음 상자를 위해 현재 상자 초기화
            currentBox = [];
        }
    }

    return maxProfit; // 최대 이익 반환
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))