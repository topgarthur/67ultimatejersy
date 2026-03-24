import React from 'react'

const Carousel = () => {
  return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- A division containing carousel content --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                    <div class="carousel-inner">
                        {/* <!-- Div with image 1 --> */}
                        <div class="carousel-item">
                            <img src="images/sd1.jpg" alt="slide1"/>
                        </div>
                        {/* <!-- Div with image 2 --> */}
                        <div class="carousel-item active">
                            <img src="images/sd2.jpg" alt="slide2"/>
                        </div>
                        {/* <!-- Div with image 4 --> */}
                        <div class="carousel-item">
                            <img src="images/sd4.jpg" alt="slide4"/>
                        </div>
                    </div>
                    {/* <!-- Previous control  --> */}
                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- Next control  --> */}
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Carousel