import React, { useEffect, useState } from "react";

// jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// async, await, fetch()

// - 게시물 가져오기
// >> 로딩, 성공, 실패
// >> 해당 컴포넌트가 마운팅될 떄만 실행

// ? 각 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
};

function UseEffect02() {
  // & 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // & 데이터를 불러오는 비동기 함수: fetchPosts
  async function fetchPosts() {
    setLoading(true); // 불러오기 시작: 로딩중
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 데이터 불러오기 완료: 성공
      setPosts(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError((e as Error).message); // Error 객체의 message 속성애 접근하기 위해 단언
    }
  }

  // & 컴포넌트가 마운트 될때만 fetchPosts 실행
  useEffect(() => {
    fetchPosts();
    console.log("컴포넌트가 마운트되면 실행");
  }, []);

  // & 제목으로 검색(filtering)
  const filteredposts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // &
  return (
    <div>
      <h4>Posts 게시물</h4>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* JSX 문법
        - HTML 내의 JS는 중괄호{}
        - JS 내의 HTML은 ()
        아래의 경우에는 단일 루트 노드이고 중첩된 요소가 없기 때문에 소괄호 생략 가능 */}
      {/* 로딩: loading = true */}
      {loading && <div>게시물을 로딩 중입니다...</div>}
      {/* 실패: error = true */}
      {error && <div>Error: {error}</div>}
      {/* 성공 */}
      {filteredposts.map((post) => (
        <li key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </li>
      ))}
    </div>
  );
}

export default UseEffect02;
