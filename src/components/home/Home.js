import React,{ useState } from 'react'
import { Card,Button ,Modal} from 'react-bootstrap';
import img2 from '../../assets/2.png';
import card1 from '../../assets/01.jpg'
import card2 from '../../assets/02.jpg'
import card3 from '../../assets/03.jpg'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/1.jpg'
import slide2 from '../../assets/2 (1).jpg'
import img from '../../assets/1.png'
import './home.css'

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <header id='header'>
        
        <div className="container">
            
            <div className="row">
                <div className="col-md-6">
                    <div className='info'>
                    <h1>
                    Good food choices <br/> are good <br/> investments.
                    </h1>
                    <p className='text-muted my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Etiam et purus a odio finibus bibendum amet leo.</p>
                    <Button className="btn-def">Order Now </Button>{' '}
                    <Button className="btn-def">Learn More </Button>{' '}
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </header>
    <section className='py-5 Numbers text-white '>

    <div className="container">

        <div className="row justify-content-center ">
            <div className="col-md-3 col-sm-4 text-center my-3">
                <h5>1287+</h5>
                <span>SAVINGS</span>
            </div>
            <div className="col-md-3 col-sm-4 text-center my-3">
                <h5>5786+</h5>
                <span>PHOTOS</span>
            </div>
            <div className="col-md-3 col-sm-4 text-center my-3">
                <h5>1440+</h5>
                <span>ROCKETS</span>
            </div>
            <div className="col-md-3 col-sm-4 text-center my-3">
                <h5>7110+</h5>
                <span>GLOBES</span>
            </div>
        </div>

    </div>

    </section>
            <section className="py-5 aboutUs" id="aboutUs">

                <div className="container">

                    <div className="row">

                        <div className=" col-lg-7 col-md-12  pt-5">
                            <img src={img} className="rounded w-100 " alt="Image" />
                        </div>
                        <div className=" col-lg-5 col-md-12  ">
                            <h4 className="mt-5 pt-5 ">
                                We pride ourselves on making real food from the best ingredients.
                            </h4>
                            <p className="text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <Button className="btn-def m-4 ">Learn More </Button>{' '}
                        </div>

                    </div>

                </div>

            </section>
            <section className="py-5 Menu">
        
            <div className="container ">
                
                <div className="row">
                    <div className="col-lg-5 ">
                        <h2 >
                        We make everything by hand with the best possible ingredients.
                        </h2>
                        <p className="text-muted fs-5 my-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul className='list-group'>
                            <li> <i className="fa-solid fa-check"></i>  Etiam sed dolor ac diam volutpat.</li>
                            <li ><i className="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
                            <li> <i className="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat.</li>
                        </ul>
                        <button className="btn-def text-white mt-4">LEARN MORE</button>
                    </div>
                    <div className="col-lg-7 ">
                        <img src={img2} className="w-100" alt=''/>
                    </div>
                    
                </div>
                
            </div>
            
        </section>
        <section className="videos text-center">

        <div className="container">

            <div className="row justify-content-center align-items-center">
                <h2 >When a man's stomach is full it makes no <br/>
                    difference whether he is rich or poor.</h2>
                <p className="text-muted fs-5 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <Button className="video mt-3"   onClick={handleShow}>
                <i className="fa-solid fa-play mx-3"></i>
                Watch Our Story
                </Button>

                <Modal show={show} onHide={handleClose} >
                
                    <Modal.Body className="bg-dark">
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/lzs5u0jIYnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark">
                        <Button  className="bg-dark" onClick={handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </div>

        </div>

    </section>
    <section className="Explore" id='Explore'>
    <div className="container  my-5">

                <div className="info text-center">
                    <h2>Explore Our Foods</h2>
                    <p className="text-muted fs-5 w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-4 mb-4">
                        <Card className='text-left border-0'>
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Text className="text-muted fs-5">
                                    Time: 15 - 20 Minutes | Serves: 1
                                </Card.Text>
                                <Card.Text className=" p-card fs-4 fw-bold">
                                    $10.50 <span className='line'> $11.70</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-4 bg-white">
                                <a href='!#' className="btn-def">OREDER NOW</a>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card className='text-left border-0'>
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Vegetarian Burger
                                </Card.Title>
                                <Card.Text className="text-muted fs-5">
                                    Time: 30 - 45 Minutes | Serves: 1
                                </Card.Text>
                                <Card.Text className=" p-card fs-4 fw-bold">
                                    $9.50 <span className='line'> $10.70</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-4 bg-white">
                                <a href='!#' className="btn-def">OREDER NOW</a>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card className='text-left border-0'>
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>Raspberry Stuffed French Toast
                                </Card.Title>
                                <Card.Text className="text-muted fs-5">
                                    Time: 10 - 15 Minutes | Serves: 1
                                </Card.Text>
                                <Card.Text className=" p-card fs-4 fw-bold">
                                    $8.50 <span className='line'> $9.70</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-4 bg-white">
                                <a href='!#' className="btn-def">OREDER NOW</a>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

            </div>
    </section>
    <section className='Testimonials py-5 text-center' id='Testimonials'>
                <div className='container'>
                    <h2 className="text-white">Testimonials</h2>
                    <Carousel className="sliderX " touch>
                        <Carousel.Item className="p-4">
                            <img
                                src={slide1}
                                alt="Slide 1"
                            />
                            <Carousel.Caption className="text-muted  fs-5 w-50 mx-auto">
                                
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                                <span >Maccy Doe - Front End</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="p-4">
                        <img
                        src={slide2}
                        alt="Slide 2"
                    />

                            <Carousel.Caption className="text-muted fs-5  w-50 mx-auto">
                                
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
                            <span >Johnthan Doe - UX Designer</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                    
                    </Carousel>
                </div>
            </section>
            <section className='py-5'>
            
            <div className="container text-center py-5">
            <h2 className=" mx-auto">Hurry up! Subscribe our newsletter <br/>
            and get 25% Off</h2>
            <p className="text-muted fs-5  my-4">Limited time offer for this month. No credit card required.</p>
            <div className="d-flex justify-content-center">
            <input type="text" className='form-control w-50 '/>
            <a href="!#" className='btn-def'>Subscribe</a>
            </div>
            </div>
            
            </section>
        </>
    )
}

export default Home