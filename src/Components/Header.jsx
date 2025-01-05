import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext.jsx";

export default function Header() {
  const auth = useContext(CartContext);

  console.log(auth, "authiscoming");
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>FoodShop</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
