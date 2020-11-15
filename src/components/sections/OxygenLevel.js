import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ReactApexChart from "react-apexcharts";

class OxygenLevel extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                            color: 'white'
                        }
                    },
                },
                labels: ['Oxygen'],
            },


        };
    }

    render() {
        return ( <
            Col md = "6" > <
            Card className = "bg-dark text-white shadow-lg" >
            <
            Card.Body >

            <
            div id = "chart" >
            <
            ReactApexChart options = { this.state.options }
            series = { this.state.series }
            type = "radialBar"
            height = { 200 }
            /> < /
            div > <
            p className = "text-uppercase" >
            <
            p > Oxygen Level < /p> < /
            p > < /
            Card.Body > < /
            Card > < /
            Col >
        );
    }
}
export default OxygenLevel;