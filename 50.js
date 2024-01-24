function solution(s) {
    // 결과를 저장할 배열을 -1로 초기화
    // fill 메소드는 배열의 모든 요소를 지정된 정적 값으로 채움
    const result = Array(s.length).fill(-1);

    // s 배열의 각 요소를 순회하면서 현재 요소를 current 변수에 저장
    // current를 다른 변수에 할당
    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        // 현재 글자의 이전 위치부터 처음까지 역순으로 반복
        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === current) {
                // 현재 글자와 같은 글자를 찾았을 때,
                // 결과 배열에 위치 저장하고 반복 종료
                result[i] = i - j;
                break;
            }
        }
    }
    return result;
}
console.log(solution("banana"))