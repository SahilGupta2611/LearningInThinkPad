import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  // const cartIsVisible = useSelector((state)=>state.uiSlice.cartIsVisible);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
