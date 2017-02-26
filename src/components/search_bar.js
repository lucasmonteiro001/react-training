/**
 * Created by lucas on 12/11/16.
 */
import React, {Component} from 'react';


class SearchBar extends Component {

    render() {

        let {value, onChange} = this.props;

        return (
            <div className="search-bar">
                <input value={value} onChange={(e) => onChange(e.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;