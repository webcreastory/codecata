function solution(s) {
    let result = 0; // 최종 결과, 분해한 문자열의 개수를 저장하는 변수

    while (s.length > 0) { // 문자열이 남아있는 동안 반복
        let x = s[0]; // 현재 첫 글자를 x로 설정
        let countX = 1; // x가 나온 횟수 초기화
        let countOther = 0; // x 이외의 다른 글자가 나온 횟수 초기화

        // 첫 글자 이후의 문자열을 탐색
        for (let i = 1; i < s.length; i++) {
            if (s[i] === x) {
                countX++; // x가 나온 횟수 증가
            } else {
                countOther++; // x 이외의 다른 글자가 나온 횟수 증가
            }

            // x와 다른 글자의 나온 횟수가 같아지면 분해 종료
            if (countX === countOther) {
                result++; // 분해한 문자열의 개수 증가
                s = s.slice(i + 1); // 현재까지 읽은 부분을 제외하고 남은 부분으로 업데이트
                break;
            }
        }

        // 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없으면 분해 종료
        if (countX !== countOther) {
            result++; // 분해한 문자열의 개수 증가
            break;
        }
    }

    return result; // 최종적으로 분해한 문자열의 개수 반환
}

// 예제 테스트
console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3