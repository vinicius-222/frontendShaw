import React, {useState} from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import frontendAPI from '../../../helpers/front-endAPI';
import { HeaderArea } from './styled';


const Header = (props) => {
    const api = frontendAPI();
    const [StDisplay, setStDisplay] = useState(false);

    return (
        <HeaderArea style={{display : window.location.pathname === '/raspadinha' ? 'none' : 'flex'}}>
            <h1>Challenge</h1>
        </HeaderArea>
    );
}

export default Header;
