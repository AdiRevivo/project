import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './Component/Redux/Store/Store'
import Home from './Component/Home';
import Number from './Component/Number';
import Counter from './Component/Counter';
import  Product from './Component/Product';
import {AddNum,ShowColor} from './Component/AddNum';
import { useState } from 'react';
import { Table, Ul } from './Component/Ul';
import Parent from './Component/lesson4/Parent';
import Child1 from './Component/lesson4/Child1';
import  Child2 from './Component/lesson4/Child2';
import { TableHierOrderComponent, UlHierOrderComponent } from './Component/UlHierOrderComponent';
import Child3 from './Component/lesson4/Child3';
import User from './Component/lesson5/User';
import Company from './Component/lesson5/Company';

function App() 
{
  const [items,setItems]=useState(['red','blue','yellow','green'])
  const [ArrProduct,setArrProduct]=useState(['milk','coffi' ,'water'])
  const[Arrcolor ,setArrcolor]=useState(['pink','yellow','black']);
  return (
    <>
    <Provider store={store}>
    <div className="App">
      <User></User>
      <Company></Company>
    {/* <AddNum ></AddNum> 
    {/* <ShowColor items={items}></ShowColor> */}
    {/* <Table Arrcolor={Arrcolor} setArrcolor={setArrcolor}></Table> */}
    {/* <Ul ArrProduct={ArrProduct} setArrProduct={setArrProduct}></Ul> 
    // < UlHierOrderComponent ArrProduct={ArrProduct} setArrProduct={setArrProduct}></UlHierOrderComponent>
    <TableHierOrderComponent Arrcolor={Arrcolor} setArrcolor={setArrcolor}></TableHierOrderComponent>
    <Product></Product> */}
    {/* <Home></Home> */}
    {/* <Number></Number> */}
    {/* <Counter></Counter> */}
    <Parent>
      <Child1></Child1>
      <Child2></Child2>
      <Child3></Child3>
    </Parent>  
    </div>
    </Provider>
    </>
    
    
    
    )
  }
  
  export default App;
  