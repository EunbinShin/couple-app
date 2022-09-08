import ImageItem from "./ImageItem"

const ImageList = (props) => {
    return (
        <div>
            {props.images.map((image, idx)=><ImageItem key={idx} src={image}/>)}
        </div>
    )
}
export default ImageList