function solution(array) {
    var answer = 0;
    // 오름차순으로 정렬하기
    const sorted = array.sort((a,b) => a - b)
    // 중간 인덱스 값 구하기
    const mid = Math.floor(array.length / 2)
    return sorted[mid];
}