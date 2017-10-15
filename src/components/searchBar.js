import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render(){
        // return (<input onChang(e={this.chnageEventHandler}/>);
        return (
            <div className='search-bar-container'>
            <input 
                value={this.state.term}
                onChange={(event)=>this.chnageEventHandler(event.target.value)}
            />
            
            </div>
        );
    }

    chnageEventHandler(value){
        console.log(value);
        this.setState({'term': value});
         this.props.onSearchInputValueChange(this.state.term);

    }
 }


export default SearchBar;