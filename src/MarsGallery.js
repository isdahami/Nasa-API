import { useState, useEffect } from 'react'

export function MarsGallery(props) {

    const [currentEl, setCurrentEl] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEl((currentEl) => {
                let nextEl = currentEl + 1;
                if(nextEl >= 3) nextEl =0;
                return nextEl;
            })
        }, 3000);

        return () => clearInterval(interval);
    }, [])


    /* Creating a new array of div elements with the className of marsImage and showImage or hideImage
    depending on the currentEl value. */
    const imageEls = props.images.slice(0,3).map((imageData, index) => 
        /* Creating a div element with a className of marsImage and showImage or hideImage depending on
        the currentEl value. */
        <div key={index} className={`marsImage ${ currentEl === index ? "showImage" : "hideImage"}`}>
            <img src={imageData.img_src} alt="marsImage" />
        </div>
    );

  return (
    <div className='galleryHolder'>{imageEls}</div>
  )
}
