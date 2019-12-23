import React from 'react';
import Woodburning from './woodburning';

const WorksWoodburning = (props) => {
    const images = props.images.woodburning
    return (
        <>
            {images.map(img, i => {<Woodburning props={img} key={`woodburningNum`+i} />})}
        </>                
        );
}
export default WorksWoodburning