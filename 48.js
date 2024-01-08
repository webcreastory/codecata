function solution(array, commands) {
    const result = []; // 최종 결과를 저장할 배열

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i]; // 현재 명령어
        const [start, end, k] = command; // 명령어의 세 부분을 각각 start, end, k로 분리

        // 배열 자르기
        const slicedArray = array.slice(start - 1, end); // 주어진 범위 내의 배열을 자름

        // 정렬
        slicedArray.sort((a, b) => a - b); // 자른 배열을 오름차순으로 정렬

        // k번째 숫자를 결과 배열에 추가
        result.push(slicedArray[k - 1]); // 정렬된 배열에서 k번째 숫자를 결과 배열에 추가
    }

    return result; // 최종 결과 배열 반환
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))