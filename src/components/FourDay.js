import React, {Component} from 'react';
import axios from 'axios';

class FourDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minTemp: [],
            maxTemp: [],
            icon: [],
            dates: []
        }
    }

    componentDidMount(){
        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=27.800583&lon=-97.396378&exclude=minutely,hourly&appid=14591153586b9b9f00539b13c8a274a1`)
            .then(response => {
                console.log(response)
                const minMax = response.data.daily.slice(0,4);
                const minTemp = [];
                const maxTemp = [];
                const icon = [];
                const dates = [];
                
                
                for(let i=0; i < minMax.length; i++){

                    //Get Date
                    let dt = minMax[i].dt;
                    let date = new Date(dt * 1000).toString().substring(0,4);

                    dates.push(date)
                    
                    //Get Min & Max
                    let min = Math.floor(minMax[i].temp.min * 9/5 - 459.67);
                    console.log(min)
                    minTemp.push(min)
                    let max = Math.floor(minMax[i].temp.max * 9/5 - 459.67);
                    maxTemp.push(max)

                    //Get Weather Icon status
                    let icons = minMax[i].weather[0].icon;
                    icon.push(icons)
                }
                
                
                this.setState({
                    dates: dates,
                    minTemp: minTemp,
                    maxTemp: maxTemp,
                    icon: icon

                })
                 
            })
    }

    dateSwitch(param){

        switch(param) {
            case 'Mon':
                return 'Monday';
            case 'Tue':
                return 'Tuesday';
            case 'Wed':
                return 'Wednesday';
            case 'Thu':
                return 'Thursday';
            case 'Fri':
                return 'Friday';
            case 'Sat':
                return 'Saturday';
            case 'Sun':
                return 'Sunday';
            default:
                return param;
        }
    }

    render(){
        return (
            <div className="main">

                {this.state.dates.map((date, index) => {
                    return (
                        <div className="date" key={index}>
                            <img src={`http://openweathermap.org/img/wn/${this.state.icon[index]}.png`} alt="Weather Icon"/>
                            <p>{this.dateSwitch(date)}</p>
                            <p>{this.state.minTemp[index]}-{this.state.maxTemp[index]}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FourDay;