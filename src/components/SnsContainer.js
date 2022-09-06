import SnsItem from "./SnsItem"
import './SnsContainer.css'

const SnsContainer = () => {
    //https://icons8.com/icons/set/blog
    return (
        <div className="sns_container">
            <h2>- contact -</h2>
            <div className="sns_item_container">
                <SnsItem 
                    image='https://img.icons8.com/color/96/000000/twitter-circled--v1.png'
                    link=''
                />
                <SnsItem 
                    image='https://img.icons8.com/color/144/000000/instagram-new--v1.png'
                    link=''
                />
                <SnsItem 
                    image='https://img.icons8.com/ios-filled/100/000000/github.png'
                    link=''
                />
                <SnsItem 
                    image='https://img.icons8.com/color/96/000000/blog.png'
                    link=''
                />
            </div>
        </div>
    )
}

export default SnsContainer