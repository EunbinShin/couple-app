import ImageItem from "./ImageItem"
import { forwardRef } from "react";

const ImageList = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
        </div>
    )
})
export default ImageList