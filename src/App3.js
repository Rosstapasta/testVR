import React, { Component } from 'react';
import aframe from 'aframe';
import 'super-hands';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import './App.css';
import sky from './media/sky3.png';
import wall from './media/brickwall.jpg';

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

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  render() {
    return (
      <div className="App">
              <Scene background="color: #ECECEC">

                {/* <Entity primitive="a-sky" height="2048" radius="30" src={sky} theta-length="140" width="2048"/> */}

                {/* < Entity primitive="a-curvedimage"  id="mozvr-logo" src={wall} radius="5.7" theta-length="200" height="9"
                              position="5 3 -3"  opacity="1">
                  <a-animation attribute="rotation" from="0 10 0" to="0 200 0" delay="500"
                              dur="1000"></a-animation>
                </Entity> */}


                {/* position x, y, z */}
                <Entity primitive="a-image" src={wall} theta-length="200" height="9"  width="23" position="-4 2 -10" ></Entity>
                



                {/* <Entity primitive="a-box" height="5" position="-1 0.5 -3" rotation="0 45 0" src={wall}
                  event-set__enter="_event: mouseenter; color: #8FF7FF"
                  event-set__leave="_event: mouseleave; color: #4CC3D9">
                </Entity> */}
                <Entity particle-system={{preset: 'snow'}} />
                <Entity light={{type: 'point'}}/>
                <Entity text={{value: 'Hello, WebVR!'}}/>

                

              {/* entity click functionality below */}
              <Entity id="box"
                      geometry={{primitive: 'box'}}
                      click-drag
                      material={{color: this.state.color, opacity: 0.6}}
                      animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
                      animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
                      position={{x: 0, y: 1, z: -3}}
                      events={{click: this.changeColor.bind(this)}}>
                      <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                              geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                              material={{color: '#24CAFF'}}/>
              </Entity>

              <a-camera >
                <a-cursor></a-cursor>
                <a-entity oculus-touch-controls="hand: left"></a-entity>
                <a-entity oculus-touch-controls="hand: right"></a-entity>
              </a-camera>

              </Scene>

              
      </div>
    );
  }
}

export default App;



{/* <Entity gltf-model={{src: 'virtualcity.gltf'}}/> */}

{/* <a-assets>
  <a-asset-item id="why-male-models" src="man/man.dae"></a-asset-item>
</a-assets> */}

{/* <Entity primitive="a-plane" src="https://cdn.aframe.io/a-painter/images/floor.jpg" rotation="-90 0 0" height="100" width="100"/> */}

{/* <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} /> */}

{/* <Entity gltf-model='url(/media/testgtlf/microphone.gltf)' scale="2 2 2" position={{x: 0, y: 0, z: -5}} ></Entity> */}

{/* guy model */}
 {/* <Entity id="model" position="0 0 -3">
   <a-animation attribute="rotation" from="0 -30 0" to="0 330 0" dur="15000"
               easing="linear" repeat="indefinite"></a-animation>
   <a-collada-model position="-.35 0 .55" rotation="0 -20 0" scale="1.5 1.5 1.5"
                   src={ man }></a-collada-model>
   <Entity primitive='a-image' src="#shadow2" rotation="-90 0 0" scale="0.5 0.5 0.5"></Entity>
 </Entity> */}

{/* <body>
  <a-scene>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"
                event-set__enter="_event: mouseenter; _target: #cylinderText; visible: true"
                event-set__leave="_event: mouseleave; _target: #cylinderText; visible: false">
      <a-text id="cylinderText" value="This is a cylinder" align="center" color="#FFF" visible="false" position="0 -0.55 0.55"
              geometry="primitive: plane; width: 1.75" material="color: #333"></a-text>
    </a-cylinder>

    <a-entity vive-controls="hand: left"></a-entity>
    <a-entity vive-controls="hand: right" controller-cursor></a-entity>

    <a-camera touchEnabled={true}>
      <a-cursor></a-cursor>
    </a-camera>
    <a-entity oculus-touch-controls="hand: left"></a-entity>
      <a-entity oculus-touch-controls="hand: right"></a-entity>
    </a-scene>
  </body> */}