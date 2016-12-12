/**
 * Created by lucas on 12/11/16.
 */
import React from 'react';

const VideoListItem = (props) => {

    let {video} = props;

    console.log(video)

    return (
        <li>{video.snippet.title}</li>
    );
};

export default VideoListItem;