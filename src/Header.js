import classes from './Header.module.css';
import SKlogo from './assets/SK3.jpeg';
import {Link} from 'react-scroll'
import { useState } from 'react';

// const active_id='1'
const Header = (props) => {
    const [active_id, setActiveId] = useState('1');

    const nav_buttons = props.labels.map((label) => (
    <Link  to={label.label} spy={true} smooth={true} offset={-250}>
        <li key={label.key}>
            <button className={classes.Button} onClick={() => setActiveId(label.id)} style={active_id===label.id?{'background-color':'gray'}:{'background-color':'black'}}>
                {label.label}
            </button>
        </li>
    </Link>    
    ));

    return (
    <header className={classes.Header}>
        <h1 className={classes.row1}>
            SK SALES <img src={SKlogo} alt='SK sales logo' width="100px" height="100px" align='right' margin-right='50px'/>
        </h1> 
        
        <h3 className={classes.row1}>Corporate Gifting<br/>Surgical and Healthcare products for medical professionals, hospitals and consumers</h3> 
        <div className={classes.row2}>
            <ul className={classes.Buttons}>
                {nav_buttons}
            </ul>
        </div>
    </header>
    );
}

export default Header;
