// Slide.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import"./Slide.css"
export const Slide = () => {

  return (
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702561445/f8yg29casftvtzs7f6bs.png" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702561445/f8yg29casftvtzs7f6bs.png" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702561445/f8yg29casftvtzs7f6bs.png" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
};


