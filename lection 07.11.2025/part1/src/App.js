import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  // Компонент карточки
  const Card = () => (
    <div className="card mb-4">
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="Image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container mt-4">
        {/* Первые три колонки */}
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>

        {/* Дополнительные три колонки, которые показываются/скрываются */}
        {isShown && (
          <div className="row mt-3">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        )}

        {/* Кнопка для показа/скрытия */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleClick}>
            {isShown ? "Скрыть" : "Показать еще"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
