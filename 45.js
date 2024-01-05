function solution(s, n) {
    return s
        .split('') // 문자열을 배열로 변환
        .map(char => {
            if (char === ' ') return char; // 공백은 그대로 반환

            const UpCase = char === char.toUpperCase(); // 대문자 여부 확인
            const startCode = UpCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0); // 대소문자에 따른 시작 ASCII 코드
            // ASCII(아스키) 코드는 컴퓨터에서 문자를 숫자로 표현하기 위한 표준 인코딩 체계
            // 시저 암호 적용
            const shiftedCharCode = (char.charCodeAt(0) - startCode + n) % 26 + startCode;
            return String.fromCharCode(shiftedCharCode); // 암호화된 문자 반환
        })
        .join(''); // 배열을 다시 문자열로 변환하여 반환
}
console.log(solution("AB", 1))