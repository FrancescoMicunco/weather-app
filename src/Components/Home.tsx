import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { ICity, IWeather } from '../Types/types'
import { Search } from 'react-bootstrap-icons'
import React from 'react'

const Home = () => {

    const [milano, setMilano] = useState<ICity>()
    const [london, setLondon] = useState<ICity>()
    const [newYork, setNewYork] = useState<ICity>()
    const [tokyo, setTokyo] = useState<ICity>()
    const [searchedCity, setSearchedCity] = useState<ICity>()
    const [query, setQuery] = useState('')
    // 1 create a search field   DONE
    // 2 create a handle function 
    // 3 get data from api fro each main City  DONE

    const getMilanoCity = async () => {
        const key = process.env.REACT_APP_PRIVATE_KEY
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Milano&appid=6f896249659a343e39e46c930ba2be89')
            if (res.ok) {
                const data = await res.json() as ICity
                setMilano(data)
                console.log("this is Milano", milano)
            }
            else {
                console.log("Something goes wrong during fetch")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getNewYorkCity = async () => {
        const key = process.env.REACT_APP_PRIVATE_KEY
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=New York&appid=6f896249659a343e39e46c930ba2be89')
            if (res.ok) {
                const data = await res.json() as ICity
                setNewYork(data)
                console.log("this is New York", newYork)
            }
            else {
                console.log("Something goes wrong during fetch")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getLondonCity = async () => {
        const key = process.env.REACT_APP_PRIVATE_KEY
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=6f896249659a343e39e46c930ba2be89')
            if (res.ok) {
                const data = await res.json() as ICity
                setLondon(data)
                console.log("this is London", london)
            }
            else {
                console.log("Something goes wrong during fetch")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getTokyoCity = async () => {
        const key = process.env.REACT_APP_PRIVATE_KEY
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=6f896249659a343e39e46c930ba2be89')
            if (res.ok) {
                const data = await res.json() as ICity
                setTokyo(data)
                console.log("this is Tokyo", tokyo)
            }
            else {
                console.log("Something goes wrong during fetch")
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        console.log("This is the query", query)
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        try {
            console.log("query: ", query)
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=6f896249659a343e39e46c930ba2be89`)
           console.log("this is res", res)
            if (res.ok) {
                const data = await res.json() as ICity
                setSearchedCity(data)
                console.log("this is searched city", searchedCity)
            }
            else {
                console.log("Something goes wrong during fetch")

            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMilanoCity()
        getNewYorkCity()
        getLondonCity()
        getTokyoCity()
    }, [])
    // 4 create a state DONE
    // 5 update the state with api DONE

    //  6 create card fo show first four results  DONE



    return (
        <>
            <h1 className="mb-4">WEATHER FORECAST</h1>
            <Container>
                <Row className="d-block">
                    <Col xs={4} >
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Group>

                                <Form.Control
                                    type="text"
                                    className="mx-sm-3"
                                    placeholder="insert a city"
                                    value={query}
                                    aria-describedby="text"
                                    onChange={handleChange}
                                />

                            </Form.Group>
                            <Button type="submit"><Search /></Button>
                        </Form>
                    </Col>
                    <Row className="w-100">
                        <Col xs="12" md="6" style={{ marginTop: "3.5rem" }}>
                            <Row className="w-100 justify-content-center">
                                <Col xs="12"><Card style={{ backgroundColor: "#489dfe", marginBottom: "2rem", borderRadius: "10%", width: "75%" }}>
                                    <Card.Img src={`http://openweathermap.org/img/wn/${milano?.list[0].weather[0].icon}@2x.png`} />
                                    <Card.ImgOverlay>
                                        <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{milano?.city.name}</Card.Title>
                                        <Card.Text>
                                            {milano?.list[0].weather[0].main} <span style={{ color: "blue" }}> {milano?.list[0].main.temp}F° </span>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic", color: "blue" }}>
                                            "{milano?.list[0].weather[0].description}"
                                            {/* <img src={`http://openweathermap.org/img/wn/${milano?.list[0].weather[0].icon}@2x.png`} alt="" /> */}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Col>

                                <Col xs="12"><Card style={{ backgroundColor: "#489dfe", borderRadius: "10%", width: "75%" }}>
                                    <Card.Img src={`http://openweathermap.org/img/wn/${london?.list[0].weather[0].icon}@2x.png`} />
                                    <Card.ImgOverlay>
                                        <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{london?.city.name}</Card.Title>
                                        <Card.Text>
                                            {london?.list[0].weather[0].main} <span style={{ color: "blue" }}> {london?.list[0].main.temp}F° </span>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic", color: "blue" }}>
                                            "{london?.list[0].weather[0].description}"
                                            {/* <img src={`http://openweathermap.org/img/wn/${london?.list[0].weather[0].icon}@2x.png`} alt="" /> */}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs="12" md="6" style={{ marginTop: "5.5rem" }}>
                            <Row className="w-100">
                                <Col xs="12" className="w-100"><Card style={{ backgroundColor: "#489dfe", marginBottom: "2rem", borderRadius: "10%", width: "75%" }}>
                                    <Card.Img src={`http://openweathermap.org/img/wn/${newYork?.list[0].weather[0].icon}@2x.png`} />
                                    <Card.ImgOverlay>
                                        <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{newYork?.city.name}</Card.Title>
                                        <Card.Text>
                                            {newYork?.list[0].weather[0].main} <span style={{ color: "blue" }}> ({newYork?.list[0].main.temp}-273.15)C° </span>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic", color: "blue" }}>
                                            "{newYork?.list[0].weather[0].description}"
                                            <img src={newYork?.list[0].weather[0].icon} alt="" />

                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Col>
                                <Col xs="12"><Card style={{ backgroundColor: "#489dfe", borderRadius: "10%", width: "75%" }}>
                                    <Card.Img src={`http://openweathermap.org/img/wn/${tokyo?.list[0].weather[0].icon}@2x.png`} />
                                    <Card.ImgOverlay>
                                        <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{tokyo?.city.name}</Card.Title>
                                        <Card.Text>
                                            {tokyo?.list[0].weather[0].main} <span style={{ color: "blue" }}> {tokyo?.list[0].main.temp}F° </span>
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: "1.2rem", color: "blue", fontStyle: "italic" }}>
                                            {tokyo?.list[0].weather[0].description}

                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Row>
            </Container>
        </>


    )
}

export default Home

function e(e: any) {
    throw new Error('Function not implemented.')
}
