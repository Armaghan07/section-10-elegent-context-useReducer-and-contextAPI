// import { forwardRef, useImperativeHandle, useRef } from "react";
// import { createPortal } from "react-dom";
// import Cart from "./Cart";
// // import { CartContext } from '../store/Shopping-Cart-Context';

// const CartModal = forwardRef(function Modal({ title, actions }, ref) {
//   const dialog = useRef();
//   // const { items, updateItemQuantity } = useContext(CartContext);

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//     };
//   });

//   return createPortal(
//     <dialog id="modal" ref={dialog}>
//       <h2>{title}</h2>
//       <Cart />
//       <form method="dialog" id="modal-actions">
//         {actions}
//       </form>
//     </dialog>,
//     document.getElementById("modal")
//   );
// });

// export default CartModal;




import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
// import { CartContext } from '../store/Shopping-Cart-Context';

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();
  // const { items, updateItemQuantity } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      style={{
        width: "90%",  // Default for mobile screens
        maxWidth: "500px",  // Max width for larger screens
        margin: "auto",  // Center the modal
      }}
    >
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>

      <style>
        {`
          @media (min-width: 768px) {  /* Tablet and larger screens */
            #modal {
              width: 70%;
            }
          }

          @media (min-width: 1024px) {  /* Laptops and larger screens */
            #modal {
              width: 50%;
            }
          }
        `}
      </style>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
