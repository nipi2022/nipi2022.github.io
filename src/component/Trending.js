import { Card, Container, Row, Col, Image } from "react-bootstrap"
import DuneImage1 from "../assets/image/treding/prog1.png"
import DuneImage2 from "../assets/image/treding/prog2.jpg"
import DuneImage3 from "../assets/image/treding/prog3.jpeg"
import DuneImage4 from "../assets/image/treding/prog4.jpg"
import DuneImage5 from "../assets/image/treding/prog5.png"
import DuneImage6 from "../assets/image/treding/prog6.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
            <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="Trending">
                        <Card className=" text-white movieImage">
                            <Image src={DuneImage1} alt="Dune Movie" className="trendingImage"/>
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
                            <Image src={DuneImage2} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">JOHN WICK</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col> 
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={DuneImage3} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">LUCIFER</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage">
                            <Image src={DuneImage4} alt="Dune Movie"  className="trendingImage"/>
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">BLACKHAT</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text l lead-in
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className=" text-white movieImage" >
                            <Image src={DuneImage5} alt="Dune Movie" className="trendingImage" />
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
                            <Image src={DuneImage6} alt="Dune Movie" className="trendingImage" />
                            <div className="bg-dark">
                                <div className="p-2 m-2">
                                </div>
                                <Card.Title className="text-center">Dune</Card.Title>
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

export default Trending;