function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    let a = numbers[i];
    let b = numbers[i + 1];
    let c = numbers[i + 2];

    if ((a < b && b > c) || (a > b && b < c)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}
