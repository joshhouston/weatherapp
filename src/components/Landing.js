import React, {Component} from 'react';
import axios from 'axios';

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: 'Houston'
        }
        this.test = this.test.bind(this)
    }

    test(){
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&APPID=`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className="landing">
                <button onClick={this.test}>test</button>
            </div>
        )
    }
}

export default Landing;