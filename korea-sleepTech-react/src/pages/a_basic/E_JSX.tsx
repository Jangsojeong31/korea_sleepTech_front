import React from 'react'

function E_JSX() {
  // 픽사베이 이미지 주소 복사 
  // https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_1280.jpg

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2022/06/19/04/25/',
    imageId: 'cat-7271017_1280.jpg',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      height: '150px'
    },
    theme: {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <>
    <div style={cat.theme}>
      <p>{cat.name}'s picture</p>
      <img 
      src={cat.catUrl + cat.description + cat.imageId} 
      alt={cat.name} 
      width={cat.imageTheme.width} 
      height={cat.imageTheme.height}
      />
    </div>
    </>
  )
}

export default E_JSX