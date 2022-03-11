import React from "react";

const Sticky = (props) => {
    return(
        <div className='shadow-5' style={{position: '-webkit-sticky', position: 'sticky', top: '0', zIndex: '1', background: 'linear-gradient(to right, rgb(138, 255, 247), rgb(92, 255, 133)'}}>
            <div>
                { props.children }
            </div>
           
        </div>
    )
}

export default Sticky;