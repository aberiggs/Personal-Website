
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const NavbarDiv = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: auto;
    background-color: black;
    
`

const Selections = styled.ul`
    display: flex;
    justify-content: right;
    background-color: white;
    list-style-type: none;
    width: 80%;
    margin: 0;
    padding: 0;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: black;
    text-decoration: none;
    font-size: 3vmin;
    padding: .5em 2vw;
    
    

    &:hover {
        background-color: grey;
    }
`

function Navbar () {
    return (
        <NavbarDiv>
            <Selections>
                <StyledLink to="">Return</StyledLink>
                <StyledLink to="signup">Signup</StyledLink>
                <StyledLink to="login">Login</StyledLink>
            </Selections>
        </NavbarDiv>
    );
}

export default Navbar