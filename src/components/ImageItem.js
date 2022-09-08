import './ImageItem.css'

const ImageItem = (props) =>{
    return(
        <img className='image_item'
            src={props.src}
            alt={props.src}
        />
    )
}

export default ImageItem