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
            series: [{
                name: "Blood pressure levels",
                data: [70, 60, 68, 75, 79, 78, 77, 79, 88, 89, 91, 95]
            }]
        };
    }
    render() {
        return ( <
            Row >
            <
            Col md = "12" >
            <
            h3 className = "lead text-white mb-0" > Reports < /h3> < p className = "text-white mt-0" > Performance timeline over the past year. < /p > < /Col > <
            Col md = "7"
            className = "bg-white rounded" > < div className = "mixed-chart" >
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
            className = "rounded bg-white" >
            <
            AverageHealth / >
            <
            /Col > < /
            Row >
        );
    }
}

export default Settings;