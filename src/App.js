import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Header from './components/Header/Header';
import Sidebar from './components/Sidbar/Sidebar';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("Rasta")
  const [isChanged,setIsChanged] = useState("Rasta")

  const addUser = (e)=>{
    e.preventDefault();
    setIsChanged(true)
  }

  return (
    <div className="App">
        {/* <Header name={name} isChanged={isChanged}/>  */}
        {/* Hello Redux */}
        <Header  />
        <div className='main'> 
        {/* <Sidebar name={name} isChanged={isChanged}/> */}
        <Sidebar />
        {/* <Form setName={setName} addUser={addUser}/> */}
        <Form/>
        {/* <Counter></Counter> */}
        </div> 
    </div>
  );
}

export default App;
