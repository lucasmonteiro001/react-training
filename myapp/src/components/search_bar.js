/**
 * Created by lucas on 12/11/16.
 */
import React, {Component} from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.info('render');

        let {value, onChange} = this.props;

        return (
            <input value={value} onChange={(e) => onChange(e.target.value)}/>
        );
    }
}

export default SearchBar;