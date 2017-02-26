import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
global.jQuery = require('jquery');
// require('bootstrap');
const API_KEY = "AIzaSyA6sKxGO33AaP1o3bkoLuaXr-Tq3d42BgY";

class Container extends Component {

    constructor() {
        super();

        this.state = {
            search: '',
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch = (term) => {

        YTSearch({key: API_KEY, term: term}, videos => {

            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    };

    onChangeSearch = (term) => {

        this.setState({
            search: term
        });

        this.videoSearch(term);
    };

    render() {

        return (
            <div>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <SearchBar
                    onSearchTermChange={term => this.videoSearch(term)}
                    value={this.state.search}
                    onChange={this.onChangeSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>

        )
    }


}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);
