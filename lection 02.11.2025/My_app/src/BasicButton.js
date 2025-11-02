import React from 'react';

function BasicButton() {
  const handleClick = () => {
    alert('Кнопка нажата!');
  };

  return (
    <button onClick={handleClick}>
      Нажми меня
    </button>
  );
}

export default BasicButton;