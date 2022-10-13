import { Carousel as Cas } from "flowbite-react";
import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="my-0 mx-auto flex-row ">
        <img
          src={images[active]}
          alt="animal"
          className="object-cover h-48 w-96 "
        />
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
          <Cas>
            {images.map((photo, index) => (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
                onClick={this.handleIndexClick}
                data-index={index}
              />
            ))}
          </Cas>
        </div>
      </div>
    );
  }
}

export default Carousel;
