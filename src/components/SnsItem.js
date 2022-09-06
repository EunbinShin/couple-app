import './SnsItem.css'

const SnsItem = (props) => {
    return (
        <div className="sns">
            <a href={props.link} target='_blank'>
                <img 
                    src={props.image}
                    alt={props.image}
                />
            </a>
        </div>
    )
}

export default SnsItem