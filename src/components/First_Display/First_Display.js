import './first_display.css';

import bg from '../../images/bg/BG Hero.svg';
import sky from '../../images/bg/HG.png';
import mountain from '../../images/bg/MG.svg';
import human from '../../images/bg/VG.svg';
import gradient from '../../images/bg/BG Content.svg';
import Header from "../../items/header/Header";
import Center_Text from "../../items/First_Display_Center_Text/Center_Text";


function First_Display() {
    return (
        <div className='fd-main'>
            <img src={sky} id='img2' alt='background'/>
            <img src={bg} id='img1' alt='background'/>
            <img src={mountain} id='img3' alt='background'/>
            <img src={human} id='img4' alt='background'/>
            <img src={gradient} id='img5' alt='background'/>
            <div className='header'>
                <Header/>
            </div>
            <div className='center-text'>
                <Center_Text/>
            </div>
        </div>
    )
}

export default First_Display;
