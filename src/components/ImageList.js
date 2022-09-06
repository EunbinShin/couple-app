import ImageItem from "./ImageItem"

const ImageList = () => {
    const test_url = 'https://image-notepet.akamaized.net/resize/620x-/seimage/20190419%2Fc8cbf27c85aaeb4be4ed833aab1c7621.jpg'

    return (
        <div>
            <ImageItem link={test_url}></ImageItem>
            <ImageItem link={test_url}></ImageItem>
            <ImageItem link={test_url}></ImageItem>
            <ImageItem link={test_url}></ImageItem>
            <ImageItem link={test_url}></ImageItem>
        </div>
    )
}
export default ImageList