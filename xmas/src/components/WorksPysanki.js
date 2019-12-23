import React from 'react';
import Pysanki from './pysanki';

const WorksPysanki = (props) => {
    const images = props.images.pysanki
    return (
        <>
            {images.map(img, i => {<Pysanki props={img} key={`pysankiNum`+i} />})}
        </>                
        );
}
export default WorksPysanki