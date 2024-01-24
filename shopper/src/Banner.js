import banner from './banner.png'

const Banner = () => {
    return (
        <>
            <div className='main-banner'>
            <div className='banner-left'>
                    <div className='image-container'>
                        <img className='banner-main' src={banner} />
                        </div>
                </div>
                <div className='banner-right'>
                    <div className='first-heading'>
                        <h1>Products</h1>
                        <h2>For Everyone.</h2>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Banner;