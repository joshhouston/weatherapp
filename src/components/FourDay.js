import React, {Component} from 'react';
import axios from 'axios';

class FourDay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=14591153586b9b9f00539b13c8a274a1`)
            .then(response => {
                console.log(response)

                 
            })
    }

    render(){
        return (
            <div className="main">
                <div className="today">
                    Today
                </div>
                <div className="tomorrow">
                    Tomorrow
                </div>
                <div className="third-day">

                </div>
                <div className="fourth-day">

                </div>
            </div>
        )
    }
}

export default FourDay;