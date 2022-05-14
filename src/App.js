import './App.css';
import Announcement from './Announcement';
import Database from './Database';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

function App() {
  const Distance = styled.div`
    height: 20px;
  `
  return(
   <>
    <Database/>
    <Distance/>
   </>
  )
}

export default App;
