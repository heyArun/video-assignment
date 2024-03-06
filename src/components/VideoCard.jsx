import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/videoLength";

const VideoCard = ({video,thumb,subtitle,title}) => {

    return (
        <Link to={`/video/${title}`}>
            <div className="flex flex-col mb-8">
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={thumb}
                    />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={thumb}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-bold line-clamp-2">
                            {title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {subtitle}
                        </span>
                        
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
