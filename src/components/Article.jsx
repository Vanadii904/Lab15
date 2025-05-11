import React from 'react';
import { Routes, Route } from 'react-router-dom';

const News = () => (
  <div>
    <h1>⚡️⚡️⚡️ Изменение в программе обучения бакалавриата химического факультета ЮФУ</h1>
    <p>Теперь бакалавры на химическом факультете сосредоточатся на изучении новых перспективных соединений - траллалеро траллалиний и глорбо фруттодриллий.</p>
  </div>
);

const About = () => (
  <div>
    <h1>Южный федеральный университет</h1>
  </div>
);

const Contacts = () => (
  <div>
    <h1>Контакты</h1>
    <p>Телефон: +7 (123) 456-78-90</p>
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Страница не найдена</h1>
    <p>Извините, запрашиваемая страница не существует.</p>
  </div>
);

const Article = () => {
  return (
    <article className="article">
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
};

export default Article;