import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Shop from './shop';
import Cart from './cart';
import { useState } from 'react';

function App() {
  
    const[arr,setdisable]=useState([
      {
      id:1,
      img:("https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"),
      title:"Samsung",
      star:false,
      rs1:false,
      rs:70000,
      sale:false,      
                
    },

    {
      id:2,
      img:("https://i.gadgets360cdn.com/large/lg_k30_image_1525501872764.jpg"),
      title:"LG",
      star:true,
      rs1:"$20.00",
      rs:18000,
      sale:true,
      
    },
    
    {
      id:3,
      img:("https://images.news18.com/ibnlive/uploads/2021/10/apple-iphone-13-pro-review-163353465816x9.jpeg"),
      title:"iphone-13",
      star:false,
      rs1:"$50.00",
      rs:150000,
      sale:true,
    
    },
    {
      id:4,
      img:("https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-5g-0.jpg"),
      title:"Redmi",
      star:true,
      rs1:false,
      rs:20000,
      sale:false,
     
    },
    
    {
      id:5,
      img:("https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-1.jpg"),
      title:"Sony",
      star:false,
      rs1:"$50.00",
      rs:25000,
      sale:true,
            
    },

    {
      id:6,
      img:("https://www.gizbot.com/images/2020-06/motorola-moto-g-fast_159160883100.jpg"),
      title:"Motorola",
      star:false,
      rs1:false,
      rs:8000,
      sale:false,
       
    },
    {
      id:7,
      img:("https://m.media-amazon.com/images/I/51pA6mh5kmL._AC_SS450_.jpg"),
      title:"Micromax",
      star:true,
      rs1:"$20.00",
      rs:16500,
      sale:true,
      
    },
    {
      id:8,
      img:("https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-pocophone-f1-2.jpg"),
      title:"poco",
      star:true,
      rs1:false,
      rs:20000,
      sale:false,
          }
  ]
  );
  const[cart,setcart]=useState([]);   //array for cart items
  const[total,settotal]=useState(0);  //total amount
    const[cartitem,setcartitem]=useState(0);  //No of items in the cart

function cartbtn(item)  //add to cart button onclick function
{
    setcart([...cart,item])
  setcartitem(cartitem+1)
  settotal(total+item.rs)
  
 }
function remove(item) //function for remove button
{
  let itemIndex = cart.findIndex(obj => item.id === obj.id);
  cart.splice(itemIndex,1)
  setcart([...cart])
  setcartitem(cartitem-1)
  settotal(total-item.rs)
}
  return (
    <div className="container-fluid">
      <div class="row">
      <div className="col-lg-8">
        {/* Nav bar */}
      <ul class="nav nav-pills">
     <li class="nav-item">
    <a class="nav-link disabled"><h5>Start Bootstrap</h5></a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">About</a>
  </li>
  <li class="nav-item dropdown">
    <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href=" " role="button" aria-expanded="false">Shop</button>
    
  </li>
</ul>
      </div>
       <div class="col-lg-3">
         <div class="p-1 d-flex justify-content-evenly cart">
         <i class="fa fa-shopping-cart"></i> Cart
         <button class="btn badge bg-dark rounded">{cartitem}</button>
         </div><ol>
          {
           cart.map((e)=>
           {
          return <Cart item={e} removecart={remove}></Cart>
           })
         } </ol>
         
          <span style={{color:"green"}}>Total price of the cart items:<br/></span><span style={{color:"red"}}>{total===0?"Empty cart":`Total=Rs.${total}`}</span>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <header className="App-header">
      Shop in style<br/>
<h5>With this shop hompage template</h5>
      </header>
      </div>

      <div class="row">
     
       {arr.map((e)=>
       {
         return <Shop shoparr={e} cartItem={cart} cartbtn1={cartbtn} ></Shop>
                 
       })
      }
            </div>
                    </div>
       
       
  );
}

export default App;
