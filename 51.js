function solution(food) {
    // 1) 최초 물(0)을 넣어 둔다.
    var answer = [0];
    
    // 2) 물을 제외한 횟수 만큼 반복한다.
    for(let i=food.length; i>0; i--) {
	    // 3) 양 끝에 넣어야 하기 때문에 음식/2 만큼 반복한다. 양 끝에 넣지 못할 경우 버린다.
        let cnt = Math.floor(food[i] / 2);
        for(let j=0; j<cnt; j++) {
            // 4) 우측 끝에 넣기
            // push(i): 배열의 맨 뒤에 i 값을 추가함
            answer.push(i);
            // 5) 좌측 끝에 넣기
            //unshift(i): 배열의 맨 앞에 i라는 값을 추가함
            answer.unshift(i);
        }
    };
    // 6) 문자열로 변환하여 return한다.
    return answer.join('');
}
console.log(solution([1, 3, 4, 6]))