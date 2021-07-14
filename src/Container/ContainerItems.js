import classes from './ContainerItems.module.css';
// import { MailIcon } from 'react-mail-icon'
// import SKlogo from '../assets/logos/SK3.jpeg';
import { FcPhone } from "react-icons/fc";
import { AiFillMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

import Alexis from '../assets/logos/Alexis.png';
import Care from '../assets/logos/Care.png';
import Cipla from '../assets/logos/Cipla.png';
import CH from '../assets/logos/CH.jpg';
import Dalmia from '../assets/logos/Dalmia.png';
import Glenmark from '../assets/logos/Glenmark.png';
import GMC from '../assets/logos/GMC.jpg';
import SS from '../assets/logos/SS.png';
import wock from '../assets/logos/wock.png';

const ContainerItems = (props) => {
    var x=props.id%2
    // console.log(x)
    var content=props.label
    if (props.label==='About Us')
    {
        content = (
            <div id={props.label}>
                {/* <p>Checking content</p> */}
                <h2>{props.label}</h2>
                <p>We wish to introduce ourselves as SK Sales,Nagpur, parent company SK Sales Corporation, Nagpur established in 1990. </p>
                <p>With time, we have established our position as one of the leading marketing agencies. <br/>We are in business for providing surgical equipments, sutures and medical machineries.</p>
                <p>With time, we have consolidated exquisite relations with customers in and around Vidharbha region.</p>
            </div>
        )
        console.log(content)
    }
    else if (props.label==='Our clients')
    {
        const row_image={
            'display':'flex',
            'justifyContent':'space-evenly',
            paddingBottom:'50px',
            margin:'0 200px'
        };
        const image_style={
            width:"125px" ,
            height:"125px"

        };
        content = (
            <div id={props.label}>
                {/* <p>Checking content</p> */}
                <h2>{props.label}</h2>
                <div>
                    <div style={row_image}>
                        <img src={Alexis} alt='Alexis logo' style={image_style} />
                        <img src={Care} alt='Care logo' style={image_style}/>
                        <img src={CH} alt='CH logo' style={image_style}/>
                    </div>
                    <div style={row_image}>
                        <img src={Cipla} alt='Cipla' style={image_style}/>
                        <img src={Dalmia} alt='Dalmia' style={image_style}/>
                        <img src={Glenmark} alt='Glenmark logo' style={image_style}/>
                    </div>
                    <div style={row_image}>
                        <img src={GMC} alt='GMC logo' style={image_style}/>
                        <img src={SS} alt='SS logo' style={image_style}/>
                        <img src={wock} alt='wockhardt logo' style={image_style}/>
                    </div>

                </div>
            </div>
        )
        console.log(content)
    }
    
    else if (props.label==='Contact Us')
    {
        content = (
            <div id={props.label}>
                {/* <p>Checking content</p> */}
                <h2>{props.label}</h2>
                <div style={{'text-align':'left','padding-left':'300px'}}>
                    <h4>
                        SK Sales
                    {/* <h5>
                        Surgical and Healthcare products for medical professionals, hospitals and consumers
                    </h5> */}
                    </h4>
                    

                    
                    <p>Kapil Rathi <br/> (Managing Partner)</p>
                    <p><FcPhone/> +91 9422149764</p>
                    <p><AiFillMail/> sksales21@gmail.com</p>
                    <p><HiLocationMarker/> LG-001, Meghdoot Heights,<br/>  ShraddhaNand Peth,<br/> Nagpur 440010(M.S)</p>
                </div>
            </div>
        )
        console.log(content)
    }
    else
    {
        content=<h2 id={props.label}>{props.label}</h2>
        console.log(content)
    }
    return (
        <div className={x ? classes.box:classes.even_box}>
            {content} 
        </div>
    
    );
}

export default ContainerItems;
