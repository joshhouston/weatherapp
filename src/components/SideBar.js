import React, {Component} from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import WbSunnyIcon from '@material-ui/icons/WbSunny';



class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: Date().slice(16, 21),
            currentDate: Date().slice(0, 10),
            temp: [],
            hourly: [],
            city: 'Houston',
            country: '',
            humidity: '',
            wind: '',
            icon: []

        }
        this.test = this.test.bind(this)
    }

    test(){
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&APPID=14591153586b9b9f00539b13c8a274a1`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
            console.log(this.state.currentDateTime)
    }

    componentDidMount(){

        axios
            .get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,daily&appid=14591153586b9b9f00539b13c8a274a1`)
            .then(response => {
                console.log(response.data);
                const hourlyTime = response.data.hourly.slice(0, 6);
                const finalTime = [];
                const finalTemp = [];
                const weatherIcon = [];
                
                for(let i=0; i < hourlyTime.length; i++){
                    
                    //Get time
                    let dt = hourlyTime[i].dt;
                    let date = new Date(dt * 1000);
                    let hours = date.getHours();
                    let AmOrPm = hours >= 12 ? 'pm' : 'am';
                    hours = (hours % 12) || 12;
                    const theTime = hours + AmOrPm;
                    finalTime.push(theTime)
                   
                    //Get temp
                    let temp = Math.floor(hourlyTime[i].temp * 9/5 - 459.67);
                    finalTemp.push(temp);

                    //Get Weather Icon status
                    let icons = hourlyTime[i].weather[0].icon;
                    weatherIcon.push(icons)


                    this.setState({
                        hourly: finalTime,
                        temp: finalTemp,
                        icon: weatherIcon
                    })
                    
                }
                // console.log(finalTime);
                // const temperature = Math.floor(response.data.main.temp * 9/5 - 459.67);
                // const city = response.data.name;
                // const country = response.data.sys.country;
                // const humidity = response.data.main.humidity;
                // const wind = response.data.wind.speed;
                
                // this.setState({
                //     temp: temperature,
                //     city: city,
                //     country: country,
                //     humidity: humidity,
                //     wind: wind
                // })
                
            })
            .catch(err => {
                console.log(err)
            })
          
    }

    render(){
        return (
            <div className="landing">
                <div className="stack">
                    {/* Time */}
                    {this.state.hourly.map((time, index) => {
                        return (
                            <div className="hourlies" key={index}>
                                <p>{time}</p>
                                <p>{this.state.temp[index]}</p>
                                <img src={`http://openweathermap.org/img/wn/${this.state.icon[index]}.png`} alt="Weather Icon"/>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default SideBar;