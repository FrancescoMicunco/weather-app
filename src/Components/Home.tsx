import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { ICity, IWeather } from '../Types/types'


const Home = () => {

    const [milano, setMilano ] = useState<ICity>()
    const [london, setLondon ] = useState<ICity>()
    const [newYork, setNewYork ] = useState<ICity>()
    const [tokyo, setTokyo ] = useState<ICity>()
    // 1 create a search field   DONE
    // 2 create a handle function 
    // 3 get data from api fro each main City  DONE

const getMilanoCity =  async ()  =>{
const key:string= process.env.REACT_APP_PRIVATE_KEY
try {
    const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Milano&appid=6f896249659a343e39e46c930ba2be89')
    if(res.ok){
const data = await res.json() as ICity
setMilano(data)
console.log("this is Milano", milano)
}
    else{
console.log("Something goes wrong during fetch")
    }
} catch (error) {
    console.log(error)
}} 

const getNewYorkCity =  async ()  =>{
    const key:string= process.env.REACT_APP_PRIVATE_KEY
    try {
        const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=New York&appid=6f896249659a343e39e46c930ba2be89')
        if(res.ok){
    const data = await res.json() as ICity
    setNewYork(data)
    console.log("this is New York", newYork)
    }
        else{
    console.log("Something goes wrong during fetch")
        }
    } catch (error) {
        console.log(error)
    }} 

    const getLondonCity =  async ()  =>{
        const key:string= process.env.REACT_APP_PRIVATE_KEY
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=6f896249659a343e39e46c930ba2be89')
            if(res.ok){
        const data = await res.json() as ICity
        setLondon(data)
        console.log("this is London", london)
        }
            else{
        console.log("Something goes wrong during fetch")
            }
        } catch (error) {
            console.log(error)
        }} 

        const getTokyoCity =  async ()  =>{
            const key:string= process.env.REACT_APP_PRIVATE_KEY
            try {
                const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=6f896249659a343e39e46c930ba2be89')
                if(res.ok){
            const data = await res.json() as ICity
            setTokyo(data)
            console.log("this is London", tokyo)
            }
                else{
            console.log("Something goes wrong during fetch")
                }
            } catch (error) {
                console.log(error)
            }}






useEffect(()=>{
getMilanoCity()
getNewYorkCity()
getLondonCity()
getTokyoCity()
},[])
    // 4 create a state
    // 5 update the state with api

    //  6 create card fo show first four results  DONE



    return (
        <>
            <h1 className="mb-4">WEATHER FORECAST</h1>
            <Container>
                <Row className="d-block">
                    <Col>
                        <Form >
                            <Form.Group>

                                <Form.Control
                                    type="password"
                                    className="mx-sm-3"
                                    placeholder="insert a city"
                                    aria-describedby="passwordHelpInline"
                                />

                            </Form.Group>
                        </Form>
                    </Col>
                    <Row >
                        <Col xs="12" md="6">


                            <Card   style={{backgroundColor:"#489dfe"}}>
                                <Card.Img variant="top" src="holder.js/80px80" />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"1.8rem", fontWeight:"bold"}}>{milano?.city.name}</Card.Title>
                                    <Card.Text>
                                         {milano?.list[0].weather[0].main} <span style={{color:"blue"}}> {milano?.list[0].main.temp}C° </span>
                                         
                                    </Card.Text>
                                    <Card.Text style={{fontSize:"1.2rem", fontStyle:"italic"}}>
                                        "{milano?.list[0].weather[0].description}"  
                                         
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            
                        </Col>



                        <Col xs="12" md="6" >
                        <Card   style={{backgroundColor:"#489dfe"}}>
                                <Card.Img variant="top" src="holder.js/80px80" />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"1.8rem", fontWeight:"bold"}}>{london?.city.name}</Card.Title>
                                    <Card.Text>
                                         {london?.list[0].weather[0].main} <span style={{color:"blue"}}> {london?.list[0].main.temp}C° </span>
                                         
                                    </Card.Text>
                                    <Card.Text style={{fontSize:"1.2rem", fontStyle:"italic"}}>
                                        "{london?.list[0].weather[0].description}"  
                                         
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        
                        </Col>





                        <Col xs="12" md="6" >
                            
                        <Card  style={{backgroundColor:"#489dfe"}}>
                                <Card.Img variant="top" src="holder.js/80px80" />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"1.8rem", fontWeight:"bold"}}>{newYork?.city.name}</Card.Title>
                                    <Card.Text>
                                         {newYork?.list[0].weather[0].main} <span style={{color:"blue"}}> {newYork?.list[0].main.temp}C° </span>
                                         
                                    </Card.Text>
                                    <Card.Text style={{fontSize:"1.2rem", fontStyle:"italic"}}>
                                        "{newYork?.list[0].weather[0].description}"  
                                         
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        
                        </Col>



                        <Col xs="12" md="6">
                        <Card  w-100 style={{backgroundColor:"#489dfe"}}>
                                <Card.Img variant="top" src="holder.js/80px80" />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"1.8rem", fontWeight:"bold"}}>{tokyo?.city.name}</Card.Title>
                                    <Card.Text>
                                         {tokyo?.list[0].weather[0].main} <span style={{color:"blue"}}> {tokyo?.list[0].main.temp}C° </span>
                                         
                                    </Card.Text>
                                    <Card.Text style={{fontSize:"1.2rem", fontStyle:"italic"}}>
                                        "{tokyo?.list[0].weather[0].description}"  
                                         
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        
                        
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>


    )
}

export default Home