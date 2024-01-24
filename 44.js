function solution(sizes) {
    // 빈 배열 두 개를 선언합니다.
    var a = [] // 각 사각형의 가로 길이를 담을 배열
    var b = [] // 각 사각형의 세로 길이를 담을 배열
    
    // 주어진 배열 sizes를 순회합니다.
    sizes.forEach((v)=>{
        // 각 사각형의 가로와 세로 길이를 오름차순으로 정렬합니다.
        v.sort((x, y) => x - y)
        // 정렬된 가로 길이를 a 배열에 추가합니다.
        a.push(v[0])
        // 정렬된 세로 길이를 b 배열에 추가합니다.
        b.push(v[1])
    })
    
    // a 배열과 b 배열에서 각각 가장 큰 값을 가져와서 곱한 결과를 answer 변수에 저장합니다.
    answer = Math.max(...a) * Math.max(...b);
    // 결과를 반환합니다.
    return answer;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))