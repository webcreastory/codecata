function solution(t, p) {
    var count = 0; // 작거나 같은 숫자 부분 문자열 개수를 세는 변수

    // 첫 번째 문자열을 순회하면서 두 번째 문자열과 비교할 부분 문자열을 추출
    for (let i = 0; i <= t.length - p.length; i++) {
        var substring = t.substr(i, p.length); // t 문자열에서 p 길이만큼의 부분 문자열 추출
        var Numstr = parseInt(substring, 10); // 추출한 부분 문자열을 숫자로 변환
        // p보다 작거나 같은 경우 count를 증가
        if (Numstr <= parseInt(p, 10)) {
            count++;
        }
    }
    return count; // 작거나 같은 숫자 부분 문자열의 개수 반환
}
console.log(solution("500220839878", "7"))