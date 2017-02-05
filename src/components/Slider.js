import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Modal from 'react-modal';

//Since the endpoints for images don't seem to be working/hosted I created an array of the ones I am using here and included them in the project
const images = [
  './img/IMG_Valencia.jpg',
  './img/IMG_Celeste.jpg',
  './img/IMG_DoloresPark.jpg',
  './img/IMG_4130Raw.jpg',
  './img/IMG_Drupal.jpg'
]

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedBike: {}
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(slide) {
    //on click setting the state of 'selectedBike' to whichever slide was chosen
    this.setState({selectedBike: this.props.bikes[slide]});
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    //Some dynamic styling based on the deviceType passed down form index.js
    var widthStyle, buttonWidth, descriptionSize, imgHeight;
    if(this.props.deviceType === 'mobile') {
      widthStyle = '90%';
      buttonWidth = '8%';
      descriptionSize = '20px';
      imgHeight = '100%'
    } else {
      widthStyle = '60%';
      buttonWidth = '4%';
      descriptionSize = '1.5em';
      imgHeight = '40vh';
    }

    return (
      <div>
        <Carousel
          wrapAround={true}
          width='1000px'
        >
          <img onClick={() => this.openModal(0)} src={images[0]} />
          <img onClick={() => this.openModal(1)} src={images[1]} />
          <img onClick={() => this.openModal(2)} src={images[2]} />
          <img onClick={() => this.openModal(3)} src={images[3]} />
          <img onClick={() => this.openModal(4)} src={images[4]} />
        </Carousel>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: '30px',
              border: '1px solid #ccc',
              width: widthStyle,
              maxHeight: '90vh',
            }
          }}
          contentLabel="Detail Modal"
        >
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{fontSize: '3em'}}>{this.state.selectedBike.name}</h2>
            <img style={{maxHeight: imgHeight, overflow: 'none'}} className='modalImg' src={images[this.state.selectedBike.id - 1]} />
          </div>
          <div style={{fontSize: descriptionSize, margin: '2vh 0'}}>{`Description: ${this.state.selectedBike.description}`}</div>
          <div style={{fontSize: '2em'}}>{`Price: $${this.state.selectedBike.price}`}</div>
          <div
            style={{
              padding: '2% 5%',
              width: buttonWidth,
              border: 'solid 2px black',
              margin: '0 auto',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onClick={this.closeModal}
          >
          Close
          </div>
        </Modal>
      </div>
    )
  }
}
