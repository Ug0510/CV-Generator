import React from 'react';
// import CVForm from './pages/CVForm';
import Navbar from './components/Navbar/Navbar';
// import Form from './components/Form/Form';
import CV from './pages/CV';
import Footer from './components/Footer/Footer';

const App = () => {
  // const onHandleClick = () => {
  //   window.print();
  // }
  return (<>
    <Navbar/> 
    {/* <CVForm/> */}
    {/* <Form/> */}
    <CV />
    <Footer/>
  </>)
}

export default App;