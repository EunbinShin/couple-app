import './HeadNavigator.css'

const HeadNavigator = (props) =>{

    const navigationHandler = (event) => {
        props.onScroll(parseInt(event.target.className))
    }

    return (
        <div className="head_navigator">
            <div className='0' onClick={navigationHandler}>
                맨위로
            </div>
            <div className='1' onClick={navigationHandler}>
                사진
            </div>
            <div className='2' onClick={navigationHandler}>
                기념일
            </div>
            <div className='3' onClick={navigationHandler}>
                SNS
            </div>
        </div>
    )
}

export default HeadNavigator