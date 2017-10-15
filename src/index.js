import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDMd9PkWiTXdVgwK7ugvRRm6EDYcAMNFw0';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null        };

        this.searchVideo('india');
    }

    searchVideo(term){
        let self = this;
        //debounce is a lodash function which return a funcion which can be called only every 3000 milisec.
        (_.debounce((term)=>{
            YTSearch({key: API_KEY, term: term}, 
            (videos)=> {
                self.setState({videos});
                self.setState({'selectedVideo': videos[0]})
                }
            );
        }, 3000))(term);

    }

    render(){
        return (
            <div>
                <SearchBar onSearchInputValueChange={(searchInputValue)=>{
                    console.log('search value', searchInputValue);
                    this.searchVideo(searchInputValue);
                    }}/>
                <VideoDetail 
                    video={this.state.selectedVideo}
                />
                <VideoList 
                    onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));