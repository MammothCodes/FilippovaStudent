import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { articles } from "./data.js";

function List({ showAll }) {
  // Первые 3 статьи всегда показываются
  const visibleArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <div className="container">
      <div className="row">
        {visibleArticles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={article.url_img}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text flex-grow-1">{article.description}</p>
                <a href={article.url} className="btn btn-primary mt-auto">
                  Почитать
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="App">
      {/* Показываем компонент List с карточками из данных */}
      <List showAll={isShown} />

      {/* Кнопка для показа/скрытия дополнительных карточек */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleClick}>
          {isShown ? "Скрыть" : "Показать еще"}
        </button>
      </div>
    </div>
  );
}

export default App;
