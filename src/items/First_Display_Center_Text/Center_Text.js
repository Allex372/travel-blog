import './center_text.css';

import instagram from '../../images/center-text/instagram.svg';
import twitter from '../../images/center-text/twitter.svg';
import arrow from '../../images/center-text/arrow_downward_24px.svg';
import sliderBg from '../../images/center-text/slider/Slider BG.svg';
import indicator from '../../images/center-text/slider/Slider Indicator.svg';

function Center_Text() {
    return (
        <div className='center-main'>
            <div className='center-left'>
                <p className='header-title-small'>Follow us</p>
                <img src={instagram} alt='instagram'/>
                <img src={twitter} alt='twitter'/>
            </div>
            <div className='center-center'>
                <div className='center-div'>
                    <hr style={{backgroundColor: '#FBD784', width: '72px', height: '2px'}}/>
                    <p className='header-title-small gold'>A Hiking guide</p>
                </div>
                <div>
                    <p className='p-bigletter'>
                        Be prepared for the<br/> Mountains and beyond!
                    </p>
                </div>
                <div className='center-div'>
                    <p className='header-title-small'>scroll down</p>
                    <img src={arrow} alt='arrow' style={{marginLeft:'10px'}}/>
                </div>
            </div>
            <div className='center-right'>
                <div className='slider-left'>
                    <p className='header-title-small'>Start</p>
                    <p className='header-title-small'>01</p>
                    <p className='header-title-small'>02</p>
                    <p className='header-title-small'>03</p>
                </div>
                <div className='slider-right'>
                    <img src={sliderBg} alt='slider animation' id='slider-bg'/>
                    <img src={indicator} alt='slider animation' id='slider-indicator'/>
                </div>
            </div>
        </div>
    )
}

export default Center_Text;
