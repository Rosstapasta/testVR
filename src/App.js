import React, { Component } from 'react';
import aframe from 'aframe';
import 'super-hands';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import './App.css';
import sky from './media/sky3.png';
import wall from './media/brickwall.jpg';
import city from './media/city.jpg';

import 'aframe-controller-cursor-component';
import test from './media/testgtlf/microphone.gltf';
import man from './man/man.dae';


//drag entity
import registerClickDrag from 'aframe-click-drag-component';
registerClickDrag(aframe);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'purple'};
    
  }


  render() {
    return (
      <div className="App">
              <Scene background="color: #ECECEC">
                <Entity primitive="a-sky" height="1500" radius="30" src={city} theta-length="140" width="4000"/>

                <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" color="grey" static-body></a-plane>

                <Entity primitive="a-sky" height="1500" radius="30" src={city} theta-length="140" width="4000"/>


                  {/* back */}
                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="-4 2 -10" 
                ></Entity>

                  {/* left */}
                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="-15.5 2 0" 
                rotation="0 90 0"></Entity>

                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="-15.5 2 0" 
                rotation="0 90 0"></Entity>

                  {/* right */}
                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="7.4 2 0" 
                rotation="0 90 0"></Entity>

                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="3.2 7.5 0" 
                rotation="110 90 0"></Entity>




                <Entity position="0 0 20">
                  <a-camera >
                      <a-cursor></a-cursor>
                      <a-entity oculus-touch-controls="hand: left"></a-entity>
                      <a-entity oculus-touch-controls="hand: right"></a-entity>
                  </a-camera>
                </Entity>

              </Scene>
      </div>
    );
  }
}

export default App;