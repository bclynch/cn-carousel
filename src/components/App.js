import React, { Component } from 'react';
import Slider from './Slider.js';

export default class App extends Component {

    constructor(props) {
      super(props);

      this.state = {

      }
    }

    componentDidMount() {
      //Typically make API calls at this point in the React component lifecycle
      //CORS is not enabled on the API this information is being fetched from
      //As such it will not work with my HTTPS heroku app so I am mocking the data here just like if it came through the API response
      //Normally would ask whoever created the API to enable CORS or use HTTPS
      fetch('http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/catalog.json').then((response) => {
        console.log(response.json());
      }).catch((err) => {
        this.setState({bikes: [
              {
                  "description": "Matte black, and black, and more black. Fast, light, and fun. Named after our shop address, 766 Valencia, this bike feels like home.",
                  "id": 1,
                  "images": [
                      {
                          "main-view": "/images/slideshow/IMG_Valencia.jpg"
                      },
                      {
                          "alt-view-1": "/images/overlay/1.jpg"
                      },
                      {
                          "alt-view-2": "/images/overlay/2.jpg"
                      },
                      {
                          "alt-view-3": "/images/overlay/3.jpg"
                      },
                      {
                          "alt-view-4": "/images/overlay/4.jpg"
                      },
                      {
                          "alt-view-5": "/images/overlay/5.jpg"
                      }
                  ],
                  "name": "Model No. 01 Valencia",
                  "price": 766.00
              },
              {
                  "description": "Blue and brown",
                  "id": 2,
                  "images": [
                      {
                          "main-view": "/images/slideshow/IMG_Celeste.jpg"
                      },
                      {
                          "alt-view-1": "/images/overlay/1.jpg"
                      },
                      {
                          "alt-view-2": "/images/overlay/2.jpg"
                      },
                      {
                          "alt-view-3": "/images/overlay/3.jpg"
                      },
                      {
                          "alt-view-4": "/images/overlay/4.jpg"
                      },
                      {
                          "alt-view-5": "/images/overlay/5.jpg"
                      }
                  ],
                  "name": "Model No. 02 Celeste",
                  "price": 995.95
              },
              {
                  "description": "Black and blue with white accents. Featuring custom Velocity Deep V wheels, an extra strong gold Izumi chain, and handmade German Continental tires.",
                  "id": 3,
                  "images": [
                      {
                          "main-view": "/images/slideshow/IMG_DoloresPark.jpg"
                      },
                      {
                          "alt-view-1": "/images/overlay/1.jpg"
                      },
                      {
                          "alt-view-2": "/images/overlay/2.jpg"
                      },
                      {
                          "alt-view-3": "/images/overlay/3.jpg"
                      },
                      {
                          "alt-view-4": "/images/overlay/4.jpg"
                      },
                      {
                          "alt-view-5": "/images/overlay/5.jpg"
                      }
                  ],
                  "name": "Model No. 03 Dolores Park",
                  "price": 999.00
              },
              {
                  "description": "Our one-of-a-kind gloss clear coat over raw steel provides total frame protection while displaying unique frame details. Two color Velocity Deep V's and a matching headset complete this build.",
                  "id": 4,
                  "images": [
                      {
                          "main-view": "/images/slideshow/IMG_4130Raw.jpg"
                      },
                      {
                          "alt-view-1": "/images/overlay/1.jpg"
                      },
                      {
                          "alt-view-2": "/images/overlay/2.jpg"
                      },
                      {
                          "alt-view-3": "/images/overlay/3.jpg"
                      },
                      {
                          "alt-view-4": "/images/overlay/4.jpg"
                      },
                      {
                          "alt-view-5": "/images/overlay/5.jpg"
                      }
                  ],
                  "name": "Model No. 04 4130 Raw",
                  "price": 999.00
              },
              {
                  "description": "A curated mix of silver and black components compliment the Drupal Blue frame and matching Vittoria tires. Upgrades include Sugino crankset, Thomson seatpost, and silicon GripRings.",
                  "id": 5,
                  "images": [
                      {
                          "main-view": "/images/slideshow/IMG_Drupal.jpg"
                      },
                      {
                          "alt-view-1": "/images/overlay/1.jpg"
                      },
                      {
                          "alt-view-2": "/images/overlay/2.jpg"
                      },
                      {
                          "alt-view-3": "/images/overlay/3.jpg"
                      },
                      {
                          "alt-view-4": "/images/overlay/4.jpg"
                      },
                      {
                          "alt-view-5": "/images/overlay/5.jpg"
                      }
                  ],
                  "name": "Model No. 05 Drupal",
                  "price": 1599.00
              }
          ]
        });
        console.log(this.state.bikes);
      });
    }

    render() {
      const styles = {
        container: {
          width: '80%',
          margin: '0 auto',
          height: '100vh'
        },
        wrapper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        },
        header: {
          maxHeight: '10vh',
          margin: '3vh 0'
        }
      }
      return (
        <div style={styles.container}>
          <div style={styles.wrapper}>
            <img style={styles.header} src={'https://4.bp.blogspot.com/_Te7gnWyYYgg/TMduvamFExI/AAAAAAAAAFw/0mkmZEd5HeA/s1600/MB_Logo_01.jpg'} />
            <Slider bikes={this.state.bikes} deviceType={this.props.deviceType} />
          </div>
        </div>
      );
    }
}
