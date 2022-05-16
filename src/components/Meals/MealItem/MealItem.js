import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const context = useContext(CartContext);

  const mealPrice = `$${props.mealPrice.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddtoCart={addToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
