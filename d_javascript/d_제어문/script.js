// 구구단 출력기
// : 사용자로부터 정수값을 입력받으면 해당 값의 구구단을 출력


while (true) {
// ! 구구단 출력
// 사용자로부터 1 ~ 9까지의 숫자 입력받기

// cf) prompt로 입력받은 값: string
  const input = prompt('출력할 구구단의 숫자를 입력하세요(1 ~ 9) // "exit"를 누르시면 종료됩니다.');

  if (input.toLowerCase() === 'exit') {
    console.log('프로그램을 종료합니다.');

    break;
  }

  const number = Number(input);

  if (number >= 1 && number <= 9) {
    console.log(`=== ${number}단 ===`);
    for (let i = 1; i <= 9; i++) {
      console.log(`${number} X ${i} = ${number * i}`);
    }
  } else {
    console.log('1에서 9사이의 숫자를 입력해주세요.');
  }
}