{
  // https://jsonplaceholder.typicode.com/users

  // 사용자 데이터를 비동기로 가져오고, 모달 창을 통해 세부정보 출력

  // ! 1) 사용자 정보 정의 - 인터페이스
  interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }

  // ! 2) 전체 사용자 관리 배열 - 타입 별칭
  type UsersType = IUser[];

  // ! 3) 사용자 정보 요청 함수 (async, await, fetch)
  const fetchUsers = async (): Promise<UsersType> => {
    try {
      const reponse = await fetch('https://jsonplaceholder.typicode.com/users');

      if(!reponse.ok) {
        throw new Error('Network response was not ok');
      }

      const users: UsersType = await reponse.json();
      return users;

    } catch (error) {
      console.error(`Fetch Error: `, error);
      return [];
    }
  }

  // ! 4) 사용자 각각의 정보를 요소로 생성
  const creatUserCard = (user: IUser): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.dataset.userId = user.id.toString();
    // .dataset: 요소에 사용자 지정 속성을 생성(커스텀 속성 생성)
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username: </strong>${user.username}</p>
    <p><strong>Email: </strong>${user.email}</p>
    `;
    return userCard;
  }

  // ! 5) 생성한 userCard를 userList에 추가(화면에 노출됨)
  const displayUsers = (users: UsersType): void => {
    const userList = document.getElementById('user-list');
    if(userList) {
      userList.innerHTML = '';
      users.forEach(user => {
        const userCard = creatUserCard(user);
        userList.appendChild(userCard);
      })
    }
  }

  // ! 6) 사용자 정보를 받아 모달창에 표시
  const showModal = (user: IUser) => {
    const modal = document.getElementById('user-modal');
    const modalContent = document.getElementById('modal-user-details');

    if(modal && modalContent) {
      modalContent.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username: </strong>${user.username}</p>
      <p><strong>Email: </strong>${user.email}</p>
      <p><strong>Phone: </strong>${user.phone}</p>
      <p><strong>Website: </strong>${user.website}</p>
      `;

      modal.style.display = 'block';
    }
  }

  // ! 7) 사용자 리스트에 이벤트 리스너 추가
  const addEventListener = (users: UsersType) => {
    const userList = document.getElementById('user-list') as HTMLElement;

    if(userList) {
      userList.addEventListener('click', (e) => {
        // cf) target vs currentTarget
        // target: userCard(이벤트가 처음 발생한 DOM 요소 - 클릭이 일어난 요소)
        // currentTarget: userList(발생한 이벤트가 등록된 DOM 요소)
        // const target = e.target; // const target: EventTarget | null
        const target = e.target as HTMLElement;
        // >> 클릭이 발생한 요소는 card 내부의 h2, p 태그가 될 가능성 존재

        const userCard = target.closest('.user-card') as HTMLElement | null;
        // 이벤트가 발생한 요고와 가장 가까운(closest) .user-card 요소를 반환

        if(userCard) {
          const userId = parseInt(userCard.dataset.userId || '0', 10); // 10진수 정수로 변환
          const user = users.find(u => u.id === userId); // users 배열에서 userId와 일치하는 사용자 객체 반환
          if(user) {
            showModal(user);
          }
        }
      })
    }

    // ! 모달 안보이게(display = 'none')
    const modal = document.getElementById('user-modal') as HTMLElement;
    const closeModal = document.querySelector('.close') as HTMLElement;

    if(modal && closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      // window: 브라우저 전체 영역 -> DOM 요소로 반환
      // <=> document: window에 로드되는 HTML 문서 그 자체
      window.addEventListener('click', (e) => {
        if(e.target === modal) {
          modal.style.display = 'none';
        }
      })
    }
  }

  // !
  const init = async(): Promise<void> => {
    const users = await fetchUsers();
    displayUsers(users);
    addEventListener(users);
  }

  document.addEventListener('DOMContentLoaded', init);
}