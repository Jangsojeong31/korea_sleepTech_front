// 사용자의 게시글을 비동기적으로 가져오는 함수 정의
async function fetchPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if(!response.ok) {
    throw new Error('네트워크 응답에 문제가 있습니다.');
  }

  return response.json(); // 응답을 js 객체로 parsing(파싱)
}




document.addEventListener('DOMContentLoaded', async () => {
  // 특정 사용자 ID 정의
  const userId = 1;

  //
  const postContainer = document.getElementById('posts');
  const searchInput = document.getElementById('search-input');
  const errorDiv = document.getElementById('error');

  let allPosts = [];

  try {
    // 초기 게시글 로드
    allPosts = await fetchPosts(userId);

    // 화면에 표시
    displayPosts(allPosts);

  }catch(e) {
    showError('데이터를 불러오는 중 오류가 발생하였습니다.');

  }

  // displayPosts 함수 정의
  function displayPosts(posts) {
    postContainer.innerHTML = '';

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      postContainer.appendChild(postDiv);
    })
  }

  // 검색하기
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if(!searchTerm) { // 검색어가 없는 경우
      displayPosts(allPosts);
      clearError(); 
      return;
    }

    // 검색어가 있는 경우
    const filteredPosts = filterPosts(allPosts, searchTerm); // 함수는 밑에서 정의
    
    if(filteredPosts.length === 0){
      showError('일치하는 포스트가 없습니다.')
      
    }else{
      displayPosts(filteredPosts);
      clearError();
    }
  })
  
  // filterPosts 함수 정의
  function filterPosts(allPosts, searchTerm) {
    return allPosts.filter( // 배열로 반환
      post => post.title.toLowerCase().includes(searchTerm) ||
              post.body.toLowerCase().includes(searchTerm)
    );
  }

  // error 메시지 표시 함수
  function showError(message) {
    errorDiv.textContent = message;
  }
  
  // error 메시지 삭제 함수
  function clearError() {
    errorDiv.textContent = '';
  }

})