import { Card, Container, Row, Col, Image } from "react-bootstrap"
import Image1 from "../assets/image/superhero/1.jpg"
import Image2 from "../assets/image/superhero/2.png"
import Image3 from "../assets/image/superhero/3.jpg"
import Image4 from "../assets/image/superhero/4.jpg"
import Image5 from "../assets/image/superhero/5.jpg"
import Image6 from "../assets/image/superhero/6.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
            <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="Superhero">
                        <Card className=" text-white movieImage">
                            <Image src={Image1} alt="Dune Movie" className="trendingImage"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">BABYLON</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={Image2} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">THE SEVEN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col> 
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={Image3} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">AVENGERS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={Image4} alt="Dune Movie"  className="trendingImage"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">SEPERDERMEN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage" >
                            <Image src={Image5} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">SCREAM</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={Image6} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">SUPERHERO</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero;