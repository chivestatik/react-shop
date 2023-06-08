import React, { useEffect, useState } from 'react';
import { Header, Sort, Categories, CartButton, Skeleton, ItemCard } from '../components';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="home-page">
      <Header />
      <Categories />
      <div className="home-page__flex">
        <Sort />
        <CartButton />
      </div>
      <div className="home-page__list">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : products.map((item) => <ItemCard key={item.id} />)}
      </div>
      <span>показать еще</span>
    </div>
  );
}

export default Home;
