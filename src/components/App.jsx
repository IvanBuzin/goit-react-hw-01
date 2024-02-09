// src/components/App.jsx

import { Product } from "..components/Product";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" />
      <Product name="Fries and Burger" />
    </div>
  );
}
