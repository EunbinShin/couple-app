import SnsItem from "./SnsItem"
import { forwardRef } from "react";
import './SnsContainer.css'

const SnsContainer = forwardRef((props, ref) => {
    //https://icons8.com/icons/set/blog
    return (
        <div ref={ref} className="sns_container">
            <h2>- contact -</h2>
            <div className="sns_item_container">
                {props.snsData.map((sns)=><SnsItem 
                    image={sns.icon}
                    link={sns.link}
                />)}
            </div>
        </div>
    )
})

export default SnsContainer