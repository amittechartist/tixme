import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Timelogo from "../../common/icon/time 1.svg";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Whitestarbtn from "../../component/Whitestarbtn";
import { apiurl, app_url, isEmail, organizer_url } from '../../common/Helpers';
import { useState, useEffect } from "react";
const Page = ({ title }) => {
    const [cartItems, setCartItems] = useState([]);
    const [allItemsTotalPrice, setAllItemsTotalPrice] = useState(0);
    const [eventTotalPrice, setEventTotalPrice] = useState(0);
    const [localQuantities, setLocalQuantities] = useState({});
    useEffect(() => {
        // Load cart and local quantities from localStorage when component mounts
        loadCartFromLocalStorage();
    }, []);
    
  const addToCart = (item) => {
    // Initialize cartItems as an empty array if it's undefined
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // If item already exists in cart, update quantity
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    }

    // Update local quantity state
    setLocalQuantities({
      ...localQuantities,
      [item.name]: (localQuantities[item.name] || 0) + 1,
    });
    
    
  };

  const removeFromCart = (itemName, quantity) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.name === itemName ? { ...cartItem, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0 } : cartItem
    );

    const filteredCart = updatedCart.filter((cartItem) => cartItem.quantity > 0);
    setCartItems(filteredCart);

    // Update local quantity state
    setLocalQuantities({
      ...localQuantities,
      [itemName]: quantity > 0 ? quantity - 1 : 0,
    });
    
  };

  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      setAllItemsTotalPrice(0);
      setEventTotalPrice(0);
      return;
    }

    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    setAllItemsTotalPrice(total);
  };

  const saveCartToLocalStorage = () => {
    // Save cart items and local quantities to localStorage
    localStorage.setItem('cart', JSON.stringify({ items: cartItems}));
  };

    const loadCartFromLocalStorage = () => {
        // Load cart items, local quantities, and eventId from localStorage
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const { items, quantities } = JSON.parse(storedCart);
            // Check if items and quantities exist in the stored data
            if (items && quantities) {
                setCartItems(items);
            }
        }
    };
    console.log(cartItems);
    return (
        <div className="content-data">
            <Container>
                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="Your-cart-text font-weight-bold">Your cart</h2>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={8}>
                                {cartItems.map((item, index) => (
                                    <div>
                                        <Card>
                                            <Card.Body>
                                                <div className="cart-details-box">
                                                    <div className="right-box-con in-event-page-cart-sec">
                                                        <Row>
                                                            <Col md={12}>
                                                                <p className="Ticket-title">{item.event.display_name} | <span><img height={20} width={20} src={Timelogo} alt="" /></span>Event Time - {item.event.start_time}</p>
                                                            </Col>
                                                            <Col md={4}>
                                                                <p className="mb-0 cart-ticket-name">{item.name}</p>
                                                            </Col>
                                                            <Col md={4}>
                                                                <span className="cart-price">Price : ${item.price}</span>
                                                            </Col>
                                                            <Col md={4}>
                                                                <div className="d-inline-block">
                                                                    <span>
                                                                        <span className="cart-minus cart-btn" onClick={() => removeFromCart(item.name, localQuantities[item.name] || 0)}>-</span>
                                                                        <span className="cart-number">{localQuantities[item.name] || 0}</span>
                                                                        <span className="cart-plus cart-btn" onClick={() => addToCart(item.ticket)}>+</span>
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Col>
                            <Col md={4}>
                                <div className="cart-amount-box">
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col md={6} className="my-2">
                                                    <h5 className="cart-amount-small-title">Subtotal</h5>
                                                </Col>
                                                <Col md={6} className="my-2 text-end">
                                                    <h5 className="cart-amount-small-amount">$200</h5>
                                                </Col>
                                                <Col md={12} className="py-3">
                                                    <div className="border-bottom"></div>
                                                </Col>
                                                <Col md={6}>
                                                    <h3 className="cart-amount-small-title theme-color font-600">Total</h3>
                                                </Col>
                                                <Col md={6} className="text-end">
                                                    <h3 className="cart-amount-small-amount theme-color font-600">$200</h3>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="mt-3 paynow-btn-box">
                                                        <span>
                                                            <Whitestarbtn title={'Pay now'} />
                                                        </span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Page;