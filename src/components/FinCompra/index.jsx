import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import swal from "sweetalert";

function FinCompra() {

    const { cart } = useContext(CartContext)

  return (
    // <button 
    // onClick={
    //     swal("¿Está seguro que quiere finalizar la compra?", "El total de la comra es $"+addDot(cart.reduce((acc, element) => acc + element.producto.precio*element.producto.cantidad, 0)))}>
    //         Finalizar compra</button>
    <button onClick={
        swal("¿Está seguro que quiere finalizar la compra?", {
            buttons: {
              cancel: "Seguir comprando",
              catch: {
                text: "Finalizar",
                value: "finalize",
              },
            },
          })
          .then((value) => {
                swal("Gotcha!", "Pikachu was caught!", "success");
          })
    }>
        Finalizar compra
    </button>
  )
}

export default FinCompra