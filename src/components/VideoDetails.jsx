import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const { id } = useParams();

    const [videoDetails,setVideoDetails]=useState([])
    const [playListVideos,setPlayListVideos]=useState([])
    
    useEffect(()=>{
        const filterValue =data.videos.filter((item)=>item.title ===id)
        const filterValuePlaylist =data.videos.filter((item)=>item.title !==id)
        setVideoDetails(filterValue)
        setPlayListVideos(filterValuePlaylist)
    },[id])
    

    let data = {

        videos: [
            {
                description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                sources: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                subtitle: "By Blender Foundation",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                title: "Big Buck Bunny"
            },
            {
                description: "The first Blender Open Movie from 2006",
                sources: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                subtitle: "By Blender Foundation",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
                title: "Elephant Dream"
            },
            {
                description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
                sources: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                subtitle: "By Google",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
                title: "For Bigger Blazes"
            },
            {
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                subtitle: "By Google",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
                title: "For Bigger Escape"
            },
            {
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                subtitle: "By Google",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
                title: "For Bigger Fun"
            },
            {
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with dtube and more at google.com/chromecast.",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                subtitle: "By Google",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
                title: "For Bigger Joyrides"
            },
            {
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                subtitle: "By Google",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
                title: "For Bigger Meltdowns"
            },
            {
                description: "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                subtitle: "By Blender Foundation",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
                title: "Sintel"
            },
            {
                description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                sources: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                subtitle: "By Blender Foundation",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                title: "Big Buck Bunny"
            },
            {
                description: "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
                sources: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
                subtitle: "By Blender Foundation",
                thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
                title: "Tears of Steel"
            },

        ]
    };

    

    return (
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            {videoDetails.length > 0 ?(
                 <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                 <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                     <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                         <ReactPlayer
                             url={videoDetails[0].sources}
                             controls
                             width="100%"
                             height="100%"
                             style={{ backgroundColor: "#000" }}
                             playing={true}
                         />
                     </div>
                     <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                         {videoDetails[0]?.title}
                     </div>
                     <div className="flex justify-between flex-col md:flex-row mt-4">
                         <div className="flex">
                             <div className="flex items-start">
                                 <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                     <img
                                         className="h-full w-full object-cover"
                                         src={videoDetails[0].thumb}
                                     />
                                 </div>
                             </div>
                             <div className="flex flex-col ml-3">
                                 <div className="text-white text-md font-semibold flex items-center">
                                     {videoDetails[0].title}
                                     {video?.author?.badges[0]?.type ===
                                         "VERIFIED_CHANNEL" && (
                                         <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                     )}
                                 </div>
                                 <div className="text-white/[0.7] text-sm">
                                     {videoDetails[0].subtitle}
                                 </div>
                             </div>
                         </div>
                         <div className="flex text-white mt-4 md:mt-0">
                             <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                 <AiOutlineLike className="text-xl text-white mr-2" />
                                 {`${abbreviateNumber(
                                     120,
                                     2
                                 )} Likes`}
                             </div>
                             <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                                 {`${abbreviateNumber(
                                     90,
                                     2
                                 )} Views`}
                             </div>
                         </div>
                        
                     </div>
                     <div className="text-white/[0.7] text-sm mt-5">
                                     {videoDetails[0]?.description}
                                 </div>
                 </div>
                 
                 <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                     {playListVideos?.length>0 ? playListVideos?.map((item, index) => {
                         return (
                             <SuggestionVideoCard
                             key={index}
                             video={item?.sources}
                             description={item.description}
                             thumb={item.thumb}
                             subtitle={item.subtitle}
                             title={item.title}
                             />
                         );
                     }):(
                        <p>Loading...</p>
                     )}
                    
                 </div>
             </div>
            ):
            <p>
                Loading...</p>}
           
        </div>
    );
};

export default VideoDetails;
