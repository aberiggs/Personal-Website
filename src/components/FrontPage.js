import styled from 'styled-components';

import { MdOutlineClose } from "react-icons/md";

import { useEffect, useContext, useState } from 'react';
import { UserContext } from "./frontPage/UserContext";
import ScrollSnap from 'scroll-snap';
import ReactDOM from 'react-dom';

import Home from "./frontPage/Home.js";
import About from "./frontPage/About.js";
import SiteAbout from "./frontPage/SiteAbout.js"

import "./FrontPage.css";
import { createRef } from 'react';
import React from 'react';

const snapConfig = {
    /**
     * snap-destination for x and y axes
     * should be a valid css value expressed as px|%|vw|vh
     */
    snapDestinationX: '0%',
    snapDestinationY: '90%',
    /**
     * time in ms after which scrolling is considered finished
     * [default: 100]
     */
    timeout: 100,
    /**
     * duration in ms for the smooth snap
     * [default: 300]
     */
    duration: 300,
    /**
     * threshold to reach before scrolling to next/prev element, expressed as a percentage in the range [0, 1]
     * [default: 0.2]
     */
    threshold: 0.2,
    /**
     * when true, the scroll container is not allowed to "pass over" the other snap positions
     * [default: false]
     */
    snapStop: false,
    /**
     * custom easing function
     * [default: easeInOutQuad]
     * for reference: https://gist.github.com/gre/1650294
     * @param t normalized time typically in the range [0, 1]
     */
    easing: t => t,
  }
  
  function callback() {
    console.log('element snapped')
  }

const Button = styled.a` 
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
  display: flex;
  flex-direction: row;
  border-radius: 100%;
  padding: 0rem 0rem;
  width: auto;
  font-size: 3vmin;
  white-space: nowrap;  
  font-family: 'Dosis', sans-serif;
  color: #494949;
  border: .3vmin solid #494949;
  background: #f76464;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  pointer-events: all;
  cursor: pointer;

  ${this}:hover {
    background-color: #FAF6E9;
  }
`;


// TODO: Smooth scroll?
// TODO: Better snapping scroll?
const PrimaryDiv = styled.div `
    max-height: 100vh;
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    

`;

const SnappingDiv = styled.div`
    // TODO: Customize snapping div?
    scroll-snap-align: start;
`;

/*
function FrontPage() {
   

    const [renderWhole, setRenderWhole] = useState(true);

    const dontRender = () => setRenderWhole(false);

    const doRender = () => setRenderWhole(true);


    const user = useContext(UserContext);

    const handleClose = () => user.setShowModal(false);

    const Modal = () => {
        // TODO: Make className values less confusing.
        return(
            <div className="Contact-modal">
                <div onClick={handleClose} className="Contact-background">

                </div>
                <div className="Contact-form">
                    <div className="Contact-outer">
                        
                        <Button onClick={handleClose}><MdOutlineClose /></Button>
                        
                    </div>
                    <h1>Purdue Email</h1>
                    <h2>riggs22@purdue.edu</h2>
                    <div className="Contact-divider"></div>
                    <h1>Personal Email</h1>
                    <h2>aberiggsiv@gmail.com</h2>
                </div>
                
            </div>
          );
         
        }
        
        // TODO: Make it so I'm not forced to stop rendering the rest of the page.
        useEffect(() => { 
            this.bindScrollSnap()
            if(user.showModal) {
                document.documentElement.scrollTop = 0;
                document.documentElement.style.overflow = "hidden";
                //dontRender();
            } else { 
                document.documentElement.style.overflow = "unset";
                //doRender(); 
             }
             }, [user.showModal]);
        
      
    function callback() {
        console.log('element snapped')
    }


    const bindScrollSnap = () => {
        const element = this.container.current
        const snapElement = new ScrollSnap(element, {
          snapDestinationY: '90%',
        })
        snapElement.bind(callback)
    }



    return(
        <div id="container" ref={this.container}>
            { user.showModal ? <Modal /> : null }

            <Home id="Home" />
            <About id="About" />
            <SiteAbout />

        </div>


    );
    
}
*/

const Combo = () => {
    return(
        <div>
            <About />
            <SiteAbout />
        </div>
    )
}

class FrontPage extends React.Component {
    container = React.createRef();

    bindScrollSnap() {
        console.log("Snap")
        const element = this.container.current
        const snapElement = new ScrollSnap(element, {
          snapDestinationY: '90%',
        })
        snapElement.bind(callback)
    }

    componentDidMount() {
        this.bindScrollSnap()
        console.log("Mounted")
    }
    

    render() {
        
        return (
            <div id="container" ref={this.container}>
              
                    
                <Home />
         
                <div>
                    <Combo />
                </div>

            </div>

        )
        
        /*
        return (
            <div id="container" ref={this.container}>
              <div className="page first-page">
                <div>I</div>
                <div className="hint">scroll down</div>
              </div>
              <div className="page second-page">
                <div>II</div>
              </div>
              <div className="page third-page">
                <div>III</div>
              </div>
              <div className="page fourth-page">
                <div>IV</div>
                <div className="hint">scroll up</div>
              </div>
            </div>
          )
          */
    }
}

export default FrontPage;