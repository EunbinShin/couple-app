import ImageItem from "./ImageItem"
import { forwardRef } from "react";

const ImageList = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            {props.images.map((image, idx)=><ImageItem key={idx} src={image}/>)}
        </div>
    )
})
export default ImageList