import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chart from 'react-apexcharts';
import AverageHealth from '../averages/AverageHealth';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]
                }
            },
            colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
                '#f48024', '#69d2e7'
            ],
            series: [{
                name: "Blood pressure levels",
                data: [70, 60, 68, 75, 79, 78, 77, 79, 88, 89, 91, 95]
            }, {
                name: "Heart Rate Levels",
                data: [78, 74, 77, 73, 70, 72, 72, 71, 67, 73, 72, 70]
            }]
        };
    }
    render() {
        return ( <
            Row className = "mx-4" >
            <
            Col md = "12 px-0" >
            <
            h3 className = "lead text-white mb-0 mx-0" > Reports < /h3> < p className = "text-white mt-0" > Performance timeline over the past year. < /p > < /Col > <
            Col md = "7"
            className = "bg-white rounded-left" > < div className = "mixed-chart" >
            <
            Chart options = { this.state.options }
            series = { this.state.series }
            type = "bar"
            width = "500" /
            >
            <
            /div> < /Col >
            <
            Col md = "5"
            className = "rounded-right bg-white" >
            <
            AverageHealth / >
            <
            /Col > < /
            Row >
        );
    }
}

export default Settings;