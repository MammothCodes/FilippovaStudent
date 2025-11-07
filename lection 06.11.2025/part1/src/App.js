import React, { useState } from 'react';
import './styles.css'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: ''
  });
  
  const [showData, setShowData] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(false);
    console.log('Данные отправлены:', formData);
    alert('Данные сохранены! Нажмите "Показать данные" для просмотра.');
  };
  
  const toggleShowData = () => {
    setShowData(!showData);
  };

  return (
    <div className="form-container">
      <h2>Введите данные пользователя</h2>
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Введите ваше имя"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Возраст:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            placeholder="Введите ваш возраст"
            min="1"
            max="120"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="profession">Профессия:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
            placeholder="Введите вашу профессию"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
      
      <button 
        onClick={toggleShowData} 
        className="show-data-btn"
      >
        {showData ? 'Скрыть данные' : 'Показать данные'}
      </button>
      
      {showData && (
        <div className="data-display">
          <h3>Введенные данные:</h3>
          <p><strong>Имя:</strong> {formData.name}</p>
          <p><strong>Возраст:</strong> {formData.age}</p>
          <p><strong>Профессия:</strong> {formData.profession}</p>
        </div>
      )}
    </div>
  );
}

export default App;