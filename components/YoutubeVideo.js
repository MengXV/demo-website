import React from 'react'

function YoutubeVideo() {
    return (

        <>
            <div className="col-span-1 md:grid lg:grid  md:grid-flow-col lg:grid-flow-col grid items-center justify-center md:justify-between lg:justify-between">
                <div className="">
                    <iframe className="youtube-video rounded-lg shadow-lg"  src="https://www.youtube.com/embed/e_E9W2vsRbQ?&autoplay=1&loop=1&playlist=e_E9W2vsRbQ" title="" frameBorder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                    <div className="justify-center grid md:grid-cols-1 lg:grid-cols-1   ">
                        <div className="">
                            <iframe className="small-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/-M_r8MKQ3mo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                        </div>
                    <div>
                        <iframe className="small-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/eU1l7eBy2_Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>                
                    </div>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-1 justify-center  ">
                        <div>
                            <iframe className="small-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/hhlgphVf-1g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                        </div>
                        <div>
                            <iframe className="small-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/ZGvz7jTVbc8" title="YouTube video player" frameBorder="0" allow="accelerometer; fullscreen; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>                
                        </div>
                    </div>
            </div>
            </>
    
    )
}

export default YoutubeVideo
