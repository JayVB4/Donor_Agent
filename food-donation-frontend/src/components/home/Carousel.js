import React from 'react'

const Carousel = () => {
    return (
        <div><div className="carousel m-1 w-96 rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.scotaid.org.uk/wp-content/uploads/2022/10/sadqasinglepage-paraimg.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/564x/03/62/a2/0362a2994affd201e42bf3d3b689eb72.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/564x/70/ff/b4/70ffb439d8cd6fc4ae4574e6730f0068.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/564x/75/64/d4/7564d4b90ed117b4f90e663750e77819.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/564x/85/2c/b1/852cb1ca3105e4e5b899625816f801a4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div></div>
    )
}

export default Carousel