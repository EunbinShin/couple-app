import SnsItem from "./SnsItem"
import './SnsContainer.css'

const SnsContainer = (props) => {
    //https://icons8.com/icons/set/blog
    return (
        <div className="sns_container">
            <h2>- contact -</h2>
            <div className="sns_item_container">
                {props.snsData.map((sns)=><SnsItem 
                    image={sns.icon}
                    link={sns.link}
                />)}
            </div>
        </div>
    )
}

export default SnsContainer