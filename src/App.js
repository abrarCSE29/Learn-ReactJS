import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Api from "./api-practice/Api";
function App() {
  const [count, setCount] = useState(0);
  const [productList, setProduct] = useState([]);

  const handleAddToCart = (productName) => {
    setProduct([...productList, productName]);
    setCount(count + 1);
    //console.log(productList);
  };

  const [SocialProfile, setSocialProfile] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.online/api/social-profiles")
      .then((response) => response.json())
      .then((data) => setSocialProfile(data))
      .catch((error) => console.log(error));
  }, []);

  const [addedUser,setAddedUser] = useState([]);

  const  handleProfileClick = (profile) => {
    setAddedUser([...addedUser,profile]);
  }

  return (
    <div className="App">
      <div>
        {
          addedUser.map((user,index) =>(
            <p>{user}</p>
          ))
        }
      </div>
      <div style={{ background: "lightgray", border: "1px solid black" }}>
        <Api profiles={SocialProfile} handleProfileClick={handleProfileClick}></Api>
      </div>

      <h1>Hello My Name is Abrar</h1>
      <h4>Today we will be practicing REACT Concepts</h4>
      <p>Props, Destructuring, Map</p>
      <Users></Users>
      <Counter
        count={count}
        handleAddToCart={handleAddToCart}
        productList={productList}
      ></Counter>
      <Item
        itemName="HIKISUM 128GB Pendrive"
        itemDescription={["Good Performance", "USB 3.2"]}
        itemPrice="BDT 1249"
        handleAddToCart={handleAddToCart}
      ></Item>
      <Item
        itemName="ADATA 256GB SSD"
        itemDescription={["Good Performance", "USB 3.2"]}
        itemPrice="BDT 1249"
        handleAddToCart={handleAddToCart}
      ></Item>
      <Item
        itemName="CORSAIR 16GB DDR4 2400MHz"
        itemDescription={["Good Performance", "USB 3.2"]}
        itemPrice="BDT 1249"
        handleAddToCart={handleAddToCart}
      ></Item>
    </div>
  );
}

function Counter({ count, handleAddToCart, productList }) {
  return (
    <div>
      <h3>Number of Items added : {count}</h3>
      {productList.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //console.log(users);

  return (
    <div>
      <h3>Dynamic Users :</h3>
      <hr></hr>
      {users.map((user, index) => (
        <div key={index}>
          <p>
            Name : {user.name} Email : {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

function Item(props) {
  const style = {
    color: "blue",
    border: "black 1px solid",
    margin: "10px 100px 10px 100px",
    borderShadow: "black 10px smooth",
  };
  const itdes = props.itemDescription;

  return (
    <div style={style}>
      <h3>{props.itemName}</h3>
      {itdes.map((Description, index) => (
        <p key={index} style={{ color: "black" }}>
          {Description}
        </p>
      ))}
      <h1>{props.itemPrice}</h1>
      <button
        type="button"
        onClick={() => props.handleAddToCart(props.itemName)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default App;
