function solution(answers) {
    // 각 수포자의 찍기 패턴
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    // 각 수포자의 점수를 저장할 배열
    const scores = [0,0,0];

    //주어진 답안 배열을 순회하며 각 수포자의 정답을 체크하여 점수 계산
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            // 현재 문제에 대한 정답을 비교하여 맞으면 점수 증가
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                scores[j]++;
            }
        }
    }

    // 최고 점수를 계산
    const maxScore = Math.max(...scores);
    // 최고 점수를 가진 수포자들을 저장할 배열
    const result = [];
    // 수포자들의 점수를 비교하여 최고 점수를 가진 수포자를 결과 배열에 추가
    for (let k = 0; k < scores.length; k++) {
        if (scores[k] === maxScore) {
            result.push(k + 1);
        }
    }
    // 결과 반환
    return result;
}

// 테스트 예시
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
