import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalCheckoutButton from "./components/PayPalCheckoutButton";

function App() {
  return (
    <>
      0
      <PayPalScriptProvider options={{"clientId":"AUIEzJZvQhIL3gnI-jq6mGVTAgYcIzJPGMkCcyuF7vG4ER1MHMeUTaSIFEMtxG5hbnJmCzu7LJUYCEhx"}}>
        <PayPalCheckoutButton product={{description:'sss',price:95.99}}/>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
