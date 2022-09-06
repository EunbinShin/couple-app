import './Envelope.css'

const Envelope = () => {
    return (
        <div className='envelope_wrapper'>
            <div className="envelope_body">
                <div className="envelope"></div>
                <div className="heart"></div>
                <div className="text">CONTENT</div>
                <div className="front"></div>
            </div>
        </div>
    )
}

export default Envelope