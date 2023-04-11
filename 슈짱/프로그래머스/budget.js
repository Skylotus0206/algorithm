function solution(d, budget) {
  let result = 0;
  let i = 0;
  let arr = d.sort((a, b) => a - b);
  while (result <= budget) {
    result = result + arr[i];
    i++;
  }

  return i - 1;
}
