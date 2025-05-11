import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './Context/ProductContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CartProvider } from './Context/CartContext'
import { CheckoutProvider } from './Context/CheckoutContext'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='168690633241-mtndcres14guehjukti8vhbked2el0bh.apps.googleusercontent.com'>
  <StrictMode>
    <CartProvider>
    <ProductProvider>
    <CheckoutProvider>
    <App />
    </CheckoutProvider>
    </ProductProvider>
    </CartProvider>
  </StrictMode>
  </GoogleOAuthProvider>
)
