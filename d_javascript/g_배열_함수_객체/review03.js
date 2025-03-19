// === 도서관 관리 시스템 === //

// ! === 프로젝트 데이터 정의 === //
// 객체
// 1) 도서관
//    속성: 여러 도서
//    기능
//    - 도서 목록 출력
//    - (특정) 도서 대여
//    - (특정) 도서 반납

// 2) 도서(책)
// 속성: 책 고유id, 책 제목, 책 저자, 책 대여 가능 여부

let exampleLibrary = {
  books: [],
  // 메서드
}

let exampleBook = {
  id: 1,
  title: '책 제목',
  author: '책 저자',
  isAvailable: true
}

// ! === 프로젝트 구현 === //
// ? Book 클래스: 각 책의 정보 저장 & 대여 및 반납 기능 정의
class Book {
  constructor(id, title, author) { // 생성자
    // 클래스 내에서 필드를 따로 정의 하지 않아도, this 키워드로 속성 정의를 통해 필드 정의할 수 있다.
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true; // 기본값
  }

  // ? 책 대여
  // 클래스 내에서는 function 키워드 생략
  rentBook() {
    if(this.isAvailable){
      this.isAvailable = false;
      console.log(`${this.title} has been rented`);
    }else {
      console.log(`${this.title} is currently not available`);
    }
  }

  // ? 책 반납
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned`);
  }


}

// ? Libraray 클래스
// : Book 객체 목록 관리 & 추가 기능 구현
class Libraray {
  constructor() {
    this.books = [];
    this.nextBookId = 1;
  }

  addBook(title, author) {
    const newBook = new Book(this.nextBookId, title, author);
    this.books.push(newBook);
    
    console.log(`${title} 책이 도서관에 추가되었습니다. (저자: ${author})`);
    this.nextBookId++;
  }

  displayBooks() {
    console.log('====Library====');
    this.books.forEach(book => {
      console.log(`${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? '대여 가능' : '대여중'}`);
    })
  }

  // ? 특정 id 책 대여 & 반납
  rentBook(id) {
    const book = this.books.find(book => book.id === id); // find: 조건을 만족하는 첫번째 요소 반환, 조건을 만족하는 값이 없으면 undefined 반환
    if (book) { // book이 존재하면
      book.rentBook();
    }else{
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  returnBook(id){
    const book = this.books.find(book => book.id === id);
    if (book) {
      book.returnBook();
    }else {
      console.log('해당 책을 찾을 수 없습니다.');
    }

  }

  // ? 특정 id의 책 정보 수정
  updateBook(id, newTitle, newAuthor){
    const book = this.books.find(book => book.id === id);
    if(!book){
      console.log('해당 책을 찾을 수 없습니다.');
      return; // 메서드 종료
    }

    if(!newTitle.trim() && !newAuthor.trim()) { // 두 값이 모두 제공되지 않은 경우
      console.log('제목 또는 저자 중 하나는 반드시 수정되어야 합니다.');
      console.log('현재는 수정된 값이 없습니다.');
      return;

    }

    if(book) {
      book.title = newTitle.trim() || book.title; // newTitle이 (공백 제거 후) null일 때 => book.title 할당
      // trim: 공백 제거 => 값이 tab, space 등으로 입력 될 경우 대비
      book.author = newAuthor.trim() || book.author;

      console.log(`책 (id: ${id}) 정보가 업데이트되었습니다: 제목 - ${book.title}, 저자 - ${book.author}`);

    }else{
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  // ? 특정 id의 책 정보 삭제
  removeBook(id){
    const index = this.books.findIndex(book => book.id === id);
    if(index !== -1){ // book 이 존재
      const removeBook = this.books.splice(index, 1)[0]; // index 번호부터 1개 삭제 => 삭제된 값이 배열로 반환 => 배열[0]: 삭제된 요소 반환됨
      console.log(`${removeBook.title} (id: ${removeBook.id}) 책이 도서관에서 삭제되었습니다.`);
    }else{
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  // & 추가 기능
  
  // [필터링] 저자별 도서 필터링(대소문자 구분 x)
  filterBooksByAuthor(author){
    console.log(`=== ${author}의 책 목록 ===`);
    return this.books
      .filter(book => book.author.toLowerCase() === author.toLowerCase())
      .forEach(book => console.log(`${book.id}: ${book.title} - ${book.isAvailable ? '대여 가능' : '대여 중'}`));
  }
  
  // [필터링] 제목 키워드로 도서 필터링(대소문자 구분 x)
  filterBookByTitle(keyword) {
    console.log(`제목에 ${keyword}가 포함된 도서:`);
    this.books
      .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()))
      .forEach(book => console.log(book));
  }
  
  // [필터링] 대여 가능 여부로 도서 필터링
  
  fitlerBookByAvailable(isAvailable) {
    const status = isAvailable? '대여 가능' : '대여 중';
    console.log(`${status}인 책 목록: `);
    const filtered = this.books.filter(book => book.isAvailable === isAvailable);
    filtered.forEach(book => {
        console.log(`${book.id}: ${book.title} by ${book.author}`);
      });
      // return filtered;

    // console.log(`${isAvailable? '대여 가능' : '대여 중'}인 도서 목록: `);
    //   this.books
    //     .filter(book => book.isAvailable === isAvailable)
    //     .forEach(book => console.log(book));
  }


  // [추가 기능] 대여 가능 도서 수 집계
  countAvailableBook () {
    const availableBook = this.books.filter(book => book.isAvailable).length;
    console.log(`대여 가능한 도서 수: 총 ${availableBook}권`);
  }
}

// ! === 프로젝트 실행 === //
const busanLibrary = new Libraray();

busanLibrary.addBook('sqld는 재밌어', '이승아');
busanLibrary.addBook('자바는 재밌어', '이도경');
busanLibrary.addBook('스프링은 재밌어', '이지훈');

busanLibrary.displayBooks();

busanLibrary.rentBook(1);
busanLibrary.displayBooks();

// busanLibrary.returnBook(1);
busanLibrary.displayBooks();

// busanLibrary.updateBook(2, '자바는 어려워', null);
// busanLibrary.removeBook(3);
// busanLibrary.displayBooks();

busanLibrary.fitlerBookByAvailable(true);
busanLibrary.countAvailableBook();


