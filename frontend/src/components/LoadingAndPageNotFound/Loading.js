// import { useState } from "react";

import loading from "../../images/loading.gif";

import "./Loading.css"

function Loading(){
    // const [isLoaded, setIsLoaded] = useState(false);

    // if (!isLoaded) {
    //     return null;
    // } else {
        return(
            <>
                <div id='bg'>
                    <img src={loading} alt='gif'/>
                </div>
            </>
        )
}

export default Loading;
