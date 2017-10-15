import React, {Component} from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let videoList = this.props.videos.map((video)=>{
            return (
            <VideoListItem 
                onVideoSelect={this.props.onVideoSelect}
                key={video.etag}
                video={video}
            />);
        });

        return (
            <ul className='col-md-4 list-group video-list'> 
                {videoList}
            </ul>
        );
    }
}

export default VideoList;