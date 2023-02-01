import React from 'react'
import './HomeConten.css'

const HomeContent = () => {
  return (
    <div>
      <div className="home">

        <h1 className="home-title">Добро пожаловать!</h1>
        <div className="description">
          <p className="desc">Интернет магазин 'BookHouse' - построен полностью на запросах.</p>
          <p className="desc">- Реализована корзина товаров, сортировка товаров по категориям, поиск по названию.</p>
          <p className="desc">- Есть личный кабинет для покупателей, где можно посмотреть информацию о пользователе и историю заказов & личный кабинет для администратора, где можно добавить категорию или новый товар.
          </p>
          <p className="desc">- Так же администратор можeт отредактировать уже имеющийся товар в карточке товара.
          </p>
          <p className="desc">- Есть возможность зарегестрироваться и выбрать категорию профиля (администратор/покупатель).
          </p>
          <p className="desc">- Реализована подгрузка товаров на страницу.
          </p>
          <p className="desc">- BackEnd сделан с помощью JSON Server.

          </p>
          <p className="desc">- Реализована подгрузка товаров на страницу.


          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent