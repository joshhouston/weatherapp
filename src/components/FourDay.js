import React, {Component} from 'react';
import axios from 'axios';

class FourDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todayMin: '',
            todayMax: '',
            tomorrowMin: '',
            tomorrowMax: '',
            thirdMin: '',
            thirdMax: '',
            thirdDate: '',
            fourthMin: '',
            fourthMax: '',
            fourthDate: ''
        }
    }

    componentDidMount(){
        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=14591153586b9b9f00539b13c8a274a1`)
            .then(response => {
                console.log(response.data.daily[2].dt)

                //Third Day Date xoxo
                let dt3 = response.data.daily[2].dt,
                    date3 = new Date(dt3 * 1000).toString().substring(0,4),
                    dt4 = response.data.daily[3].dt,
                    date4 = new Date(dt4 * 1000).toString().substring(0,4)

                // Min & Max Temps
                let todayMin = Math.floor(response.data.daily[0].temp.min * 9/5 - 459.67),
                    todayMax = Math.floor(response.data.daily[0].temp.max * 9/5 - 459.67),
                    tomorrowMin = Math.floor(response.data.daily[1].temp.min * 9/5 - 459.67),
                    tomorrowMax = Math.floor(response.data.daily[1].temp.max * 9/5 - 459.67),
                    thirdMin = Math.floor(response.data.daily[2].temp.min * 9/5 - 459.67),
                    thirdMax = Math.floor(response.data.daily[2].temp.max * 9/5 - 459.67),
                    fourthMin = Math.floor(response.data.daily[3].temp.min * 9/5 - 459.67),
                    fourthMax = Math.floor(response.data.daily[3].temp.max * 9/5 - 459.67)

                
                this.setState({
                    todayMin: todayMin,
                    todayMax: todayMax,
                    tomorrowMin: tomorrowMin,
                    tomorrowMax: tomorrowMax,
                    thirdMin: thirdMin,
                    thirdMax: thirdMax,
                    thirdDate: date3,
                    fourthMin: fourthMin,
                    fourthMax: fourthMax,
                    fourthDate: date4
                })
                 
            })
    }

    render(){
        return (
            <div className="main">
                <div className="today">
                    Today
                    <p>{this.state.todayMin}-{this.state.todayMax}</p>
                </div>
                <div className="tomorrow">
                    Tomorrow
                    <p>{this.state.tomorrowMin}-{this.state.tomorrowMax}</p>
                </div>
                <div className="third-day">
                    {this.state.thirdDate}
                    <p>{this.state.thirdMin}-{this.state.thirdMax}</p>
                </div>
                <div className="fourth-day">
                    {this.state.fourthDate}
                    <p>{this.state.fourthMin}-{this.state.fourthMax}</p>
                </div>
            </div>
        )
    }
}

export default FourDay;