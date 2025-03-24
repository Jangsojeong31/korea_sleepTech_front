document.addEventListener('DOMContentLoaded', () => {
  // html 요소 가져오기
  const cardContainer = document.getElementById('card-container');
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  // 색상 배열 정의 (6쌍)
  // const colors = ['black', 'red', 'yello','pink','orange','blue'];
  const colors = [
    "#cc3131",
    "#e3ddbb",
    "#23b923",
    "#34bcbc",
    "#3939db",
    "#e5b7e4",
  ];

  // colors 배열의 색상 복제: 깊은 복제
  let cardColors = [...colors, ...colors];

  // 게임 초기화 함수
  function initializeGame() {
    // cardColors의 색상 순서 섞기: suffle 함수(아래에서 정의)
    shuffle(cardColors);

    // cardContainer 내부의 HTML을 비움: 초기화
    cardContainer.innerHTML = '';

    // 12개의 카드 생성 -> HTML 요소로 
    for (let i = 0; i < 12; i++){
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./front.jpg" alt="카드의 앞면">
            </div>
            <div class="card-back" style="background-color: ${cardColors[i]};"></div>
          </div>
        </div>
      `;
    }

    // 12장의 카드에 이벤트 추가하는 함수
    addCardEventListener();
  }

  // 시작 버튼 -> 잠시동안 모든 카드의 뒷면을 잠시 공개(이때는 완료 버튼이 비활성화)
  function revealCardsTemporary() {
    // 완료 버튼 비활성화: 사용자의 컨트롤 막기
    // DOM요소.속성 = 속성값; === DOM요소.setAttribute(속성, 속성값);
    completedButton.disabled = true; 
    // disable 속성: 요소에 대한 컨트롤의 비활성화 지정
  
    // 모든 카드 뒤집기 (뒷면 공개 - 색상)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.add('flipped');
      })
    }, 100);
  
    // 모든 카드 뒤집기 (앞면 공개 - 이미지)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
      });
  
      // 완료 버튼을 다시 활성화
      completedButton.disabled = false;
    }, 2000);
  }

  // addCardEventListener 함수 정의
  function addCardEventListener() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', flipCard);
      // flipCard는 아래에서 정의
    })
  }

  // 변수 선언
  // 카드가 뒤집혔는지 여부
  let hasFlippedCard = false; // 첫 번째 카드가 선택되지 않는 것이 기본값
  let firstCard, secondCard; // 첫번째, 두번째 선택된 카드
  let lockBoard = false; // 게임판이 잠겨있지 않는 것이 기본값

  // 게임 시작 상태 추적을 위한 변수
  // : 시작 버튼과 재시작 버튼에 대한 이벤트 리스너 내에서 활용
  let isGameStarted = false;

  // flipCard 정의: 카드 클릭했을 때 뒤집는 함수
  function flipCard() {
    if (!isGameStarted || lockBoard) { // 게임이 시작되지 않은 경우
      return; // 함수 종료
      
    }

    this.classList.add('flipped'); 

    if(!hasFlippedCard){ // 첫 번째 카드가 선택되지 않았을 때
      hasFlippedCard = true;
      firstCard = this;
    }else{
      hasFlippedCard = false; // 다음 쌍의 선택을 위한 기본값 선언
      secondCard = this;

      // 두 카드가 일치하는지 확인 (아래에서 정의)
      checkforMatch();
    }
  }

  // 다른 방법: 
  // const flipCard = (e) => {
  //   if (!isGameStarted || lockBoard) return;
  //   e.target.classList.add('flipped');
  // }

  // checkforMatch 함수 정의
  function checkforMatch() {
    let isMatch = 
      firstCard.querySelector('.card-back').style.backgroundColor
      === secondCard.querySelector('.card-back').style.backgroundColor; // boolean 값으로 반환

    // 카드가 매치되면 비활성화, 아닐 경우 다시 뒤집기
    isMatch ? disabledCards() : unflipedCards();
  }

  // disabledCards 함수 정의
  function disabledCards() {
    // 카드를 뒤집는 기능 제거(다시 클릭해도 뒤집히지 않도록)
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // 게임판 초기화: firstCard, secondCard 초기화(카드 비우기)
    resetBoard();
  }

  // unflipedCards 함수 정의: 매치되지 않은 카드는 다시 뒤집힘
  function unflipedCards() {
    lockBoard = true; // 게임판 잠그기(카드가 뒤집히기 바로 직전)

    // 1초 뒤 다시 뒤집힘
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      resetBoard(); // 게임판 잠금 해제 및 게임판 초기화
    }, 1000);
  }

  // resetBoard() 정의
  function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    [firstCard, secondCard] = [null, null];
  }

  // 시작 ~ 완료 버튼 까지 시간 기록
  // 변수 선언
  let gamestartTime;

  // 시작 버튼 클릭 이벤트 리스너 추가
  startButton.addEventListener('click', () => {
    initializeGame();

    gamestartTime = new Date();

    toggelButtonVisibility(true);

    revealCardsTemporary();
    isGameStarted = true;

  })

  // 재시작 버튼 클릭 이벤트 리스너 추가
  resetButton.addEventListener('click', () => {
    initializeGame();

    gameStartTime = new Date();

    toggelButtonVisibility(true);

    revealCardsTemporary();
    isGameStarted = true;

  });

  // 완료 버튼 클릭 이벤트 리스너 추가
  completedButton.addEventListener('click', () => {
    // 모든 카드가 뒤집혔는지 확인

    // every() 메서드:
    // 콜백함수를 인자로 받는 배열 메서드
    // - 배열의 '모든 요소'가 주어진 함수 조건식을 만족할 때 true 반환
    // 아래의 경우: 모든 카드 요소가 flipped 속성이 있는지, 모두 뒤집어 졌으면 => true
    const allFlipped = Array.from(document.querySelectorAll('.card')).every(
      card => card.classList.contains('flipped')
    );

    if(allFlipped) {
      const gameTime = new Date() - gameStartTime;

      alert(`게임 완료~! 소요 시간: ${Math.floor(gameTime / 1000)} 초`); // 밀리초 단위 -> 초 단위

      isGameStarted = false;

      initializeGame();

      toggelButtonVisibility(false);
    }else{
      alert(`완료되지않았습니다.`);
    }
  })

  // toggleButtonVisibility 함수 정의
  function toggelButtonVisibility(isGameStarted) {
    // isGameStarted 가 true라면 시작버튼이 안보이게
    startButton.style.display = isGameStarted ? 'none' : 'block';
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  // 초기에는 시작 버튼만 표시
  toggelButtonVisibility(false);
  
  initializeGame();
});

// suffle 함수 정의: 배열의 요소를 무작위로 섞는 사용자(커스텀) 함수
// : 배열의 각 요소를 다른 임의의 위치와 교환
function shuffle(array) {
  // 마지막 요소부터 역순으로 반복
  let length = array.length;
  for(let i = (length - 1); i > 0; i--) {
    // 현재 요소(i)와 무작위로 선택된 요소(j)의 위치를 교환
    let j = Math.floor(Math.random() * (i+1));
    // => 0부터 i까지의 랜덤 숫자 생성
    
    // 구조 분해 할당 => 요소 교환
    // '피셔-에이츠 셔플'의 알고리즘 기반
    [array[i], array[j]] = [array[j], array[i]];

  }
}