import './ImageItem.css'

const ImageItem = (props) =>{
    return(
        <img className='image_item'
            src={props.link}
            alt={props.link}
        />
    )
}

export default ImageItem