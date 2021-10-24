import styled from 'styled-components';

import Home from "./Home.js";
import About from "./About.js";

import "./FrontPage.css";

//TODO: Smooth scroll?

const PrimaryDiv = styled.div`
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
   
`;

const SnappingDiv = styled.div`
    //TODO: Customize snapping div?
    scroll-snap-align: start;
`;

function FrontPage() {
    return(
        <PrimaryDiv>
            <SnappingDiv>
                <Home />
            </SnappingDiv>

            <SnappingDiv>
                <About  />
            </SnappingDiv>
        </PrimaryDiv>
    );

}

export default FrontPage;