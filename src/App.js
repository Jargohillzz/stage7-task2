import './App.css';
import Navbar from './components/Navbar';
import { Container, Row, } from 'react-bootstrap';
import MyTabs from './components/MyTabs';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';




function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 1700)
    }, [])

    return (
      <>
        {
          loading ? <Loader/>:
        <Container className="p-5">
          <Row className="justify-content-center">
            <Navbar/>
          </Row>
          <MyTabs/>
        </Container>
        }
      </>
    );
}

export default App;
