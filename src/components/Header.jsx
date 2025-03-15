// import { useRef, useContext } from "react";
// import { CartContext } from "../store/Shopping-Cart-Context.jsx";
// import CartModal from "./CartModal.jsx";

// export default function Header() {
//   const modal = useRef();
//   const { items } = useContext(CartContext);

//   const cartQuantity = items.length;

//   function handleOpenCartClick() {
//     modal.current.open();
//   }

//   let modalActions = <button>Close</button>;

//   if (cartQuantity > 0) {
//     modalActions = (
//       <>
//         <button>Close</button>
//         <button>Checkout</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <CartModal ref={modal} title="Your Cart" actions={modalActions} />
//       <header id="main-header">
//         <div id="main-title" >
//           <img src="logo.png" alt="Elegant model" />
//           <h1>Elegant Context</h1>
//         </div>
//         <p>
//           <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
//         </p>
//       </header>
//     </>
//   );
// }


import { useRef, useContext } from "react";
import { CartContext } from "../store/Shopping-Cart-Context.jsx";
import CartModal from "./CartModal.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div
          id="main-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            marginBottom: "10px",
            marginLeft: "20px",  // Increased margin on the left side
            marginRight: "20px",  // Increased margin on the right side
          }}
        >
          <img
            src="logo.png"
            alt="Elegant model"
            style={{
              width: "50px",  // Adjust logo size
              height: "auto",
            }}
          />
          <h1
            style={{
              fontSize: "1.5rem",  // Default font size
              marginLeft: "10px",  // Margin between logo and title
            }}
          >
            Elegant Context
          </h1>
        </div>
        <p style={{ marginTop: "10px" }}>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}


