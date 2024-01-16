function solution(arr) {
    var answer = arr.sort((a, b) => b - a).pop()
    
    if (arr.length = 1) {
        return [-1];
    }
    return answer;
}