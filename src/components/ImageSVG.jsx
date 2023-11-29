import { ReactSVG } from 'react-svg';

import svg from '../assets/svg/image.svg';

export default function ImageSVG(){
    return (
        <div>
            <ReactSVG src={svg}/>
        </div>
   )     
}