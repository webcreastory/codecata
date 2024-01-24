function solution(strings, n) {
    let result = [];

    // 1. strings의 n번째 글자를 빼서 strings 각각의 값 앞에 붙여주세요
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i]; // n번째 글자를 맨 앞에 추가
    }

    // 2. 정렬해주세요
    strings.sort(); // 문자열들을 사전순으로 정렬

    // 3. 앞에 붙인 n번째 글자를 지워서 answer에 넣어주고 출력해주세요
    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], ""); // 맨 앞 글자 제거
        result.push(strings[j]); // 수정된 문자열을 결과 배열에 추가
    }

    return result; // 결과 배열 반환
}
console.log(solution(["abce", "abcd", "cdx"], 2))