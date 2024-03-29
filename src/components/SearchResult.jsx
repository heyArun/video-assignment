import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();

    console.log("getting", searchQuery)

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


    useEffect(() => {

        const filterData = data.videos.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResult(filterData)

    }, [searchQuery])

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {result?.map((item) => {
                        return (
                            <SearchResultVideoCard
                                key={item?.videoId}
                                video={item?.sources}
                                description={item.description}
                                thumb={item.thumb}
                                subtitle={item.subtitle}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
