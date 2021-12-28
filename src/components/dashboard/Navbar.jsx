
import styled from 'styled-components'

const Text = styled.a.attrs({
    
})`
    color: red;
`

const Selections = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

function Navbar () {
    return (
        <Selections>
            <li><a href="">Test</a></li>
            <li>Test2</li>
        </Selections>
    );
}

export default Navbar