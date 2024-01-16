function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
// Math.min(...arr): 배열 arr의 최소값을 구합니다.
// arr.indexOf(...): 구한 최소값의 인덱스를 찾습니다.
// arr.splice(index, 1): 배열에서 해당 인덱스의 요소를 1개 제거합니다.
console.log(solution([4,3,2,1]))