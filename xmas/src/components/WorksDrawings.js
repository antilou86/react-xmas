import React from 'react';
import Drawing from './Drawing';

const WorksDrawings = (props) => {
    const images = props.images.drawings
    return (
        <>
            {images.map(img, i => {<Drawing props={img} key={`drawingNum`+i} />})}
        </>                
        );
}
export default WorksDrawings