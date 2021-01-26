import './main.css'
import Card from './components/Card'
import NavigationBar from "./components/NavigationBar";
import Item from "./components/Item";
import './components/main.scss';
import {Container, Row, Col} from 'reactstrap'
function App() {
    return (
        <div>
            <NavigationBar/>

            <Item/>

            <h3 className="text"> Lorem ipsum dolor.</h3>

            <img src="logo192.png" alt=""/>

            <p style={{color:"red", fontSize: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum deleniti doloremque, esse eveniet
                incidunt inventore ipsum iure odit officia pariatur porro quam quasi quod, temporibus vel veniam vitae
                voluptatibus?</p>


            <Container>
                <Row>
                    <Col md="4">
                        <Card/>
                    </Col>

                    <Col md="4">
                        <Card/>
                    </Col>

                    <Col md="4">
                        <Card/>
                    </Col>

                </Row>
            </Container>


            <Card/>
            <Card/>
            <Card/>
        </div>


    );
}

export default App;
