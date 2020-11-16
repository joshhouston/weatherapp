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
            temp: '',
            city: 'Houston',
            country: '',
            humidity: '',
            wind: ''

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
                console.log(response.data.hourly[0])
                const timestamp = response.data.hourly[0].dt
                const date = new Date(timestamp * 1000);
                let hours = date.getHours();
                // const minutes = "0" + date.getMinutes();
                // const seconds = "0" + date.getSeconds();
                // const formatted = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                const AmOrPm = hours >= 12 ? 'pm' : 'am';
                hours = (hours % 12) || 12;
                const minutes = date.getMinutes();
                const finalTime = hours + AmOrPm
                
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

                
                {/* <div className="logo">
                    <h3>Thermo</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li>Dashboard</li>
                        <li>Map</li>
                        <li>Calendar</li>
                    </ul>
                </div>
                <div className="widget">
                    <button onClick={this.test}>test</button>
                    <div className="widget-compact">
                        <div className="widget-icon">
                            <WbSunnyIcon/>
                        </div>
                        <div className="widget-date">
                            <h3>Today</h3>
                            <p>{this.state.currentTime}</p>
                            <p>{this.state.currentDate}</p>
                        </div>
                    </div>
                    <p id="widget-temp">{this.state.temp} &#8457;</p>
                    <p id="widget-city">{this.state.city}</p>
                    <p>{this.state.country}</p>
                    <LinearProgress variant="determinate" value={this.state.humidity} />
                    <p>{this.state.humidity}</p>
                    <p>{this.state.wind}</p>
                </div> */}
            </div>
        )
    }
}

export default SideBar;