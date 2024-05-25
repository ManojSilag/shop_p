import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAdress } from "../redux/slices/cartSlice";
import CheckOutSteps from "../components/CheckOutSteps";
function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;
  const [address, setAdress] = useState(shippingAdress?.address || "");
  const [city, setCity] = useState(shippingAdress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAdress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAdress?.country || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAdress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>

      <CheckOutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email address"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode" className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="Country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
