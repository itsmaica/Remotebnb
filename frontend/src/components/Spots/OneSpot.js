import "./OneSpot.css"

function OneSpot(){
    return(
        <>
        <div className="container">
            <div className="title">
                <h1>Title of spot</h1>
            </div>

            <div className="spot-gallery">
                <div className="house-pics">
                    <div className='pic' id='p1'><img/>picture 1</div>
                    <div className='pic' id='p2'><img/>picture 2</div>
                    <div className='pic' id='p3'><img/>picture 3</div>
                    <div className='pic' id='p4'><img/>picture 4</div>
                    <div className='pic' id='p5'><img/>picture 5</div>
                </div>
            </div>

            <div id='user-div'>
                <div id='home-by'>Entire Home Hosted by "USER FIRST NAME"</div>
                <div id='user-pic'>
                    picture
                    <img id='user' />
                </div>
            </div>

            <div className="amenities">
                Amenities Amenities Amenities Amenities Amenities Amenities
            </div>

            <div className="description">
                description
            </div>

            <div className="reviews-container">
                <div id='r1'>reviews</div>
                <div id='r2'>reviews</div>
                <div id='r3'>reviews</div>
                <div id='r4'>reviews</div>
            </div>
        </div>


        </>
    )
}
export default OneSpot;
