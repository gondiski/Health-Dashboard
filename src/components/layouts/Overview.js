import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactApexChart from 'react-apexcharts';

class Overview extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Blood Pressure',
                data: [78, 80, 82, 88, 95, 109, 100]
            }, {
                name: 'Heart Rate',
                data: [71, 70, 72, 67, 73, 78, 74]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2020-09-19T00:00:00.000Z", "2020-09-19T01:30:00.000Z", "2020-09-19T02:30:00.000Z", "2020-09-19T03:30:00.000Z", "2020-09-19T04:30:00.000Z", "2020-09-19T05:30:00.000Z", "2020-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },


        };
    }
    render() {
        return ( <
            Row >
            <
            Col md = "12"
            className = "text-white" > <
            h5 className = "lead" > Here is a view since you began tracking your health < /h5></Col >
            <
            Col md = "8"
            className = "bg-white rounded" >
            <
            div id = "chart" >
            <
            ReactApexChart options = { this.state.options }
            series = { this.state.series }
            type = "area"
            height = { 350 }
            /> < /
            div > < /Col > <
            Col md = "2" > < /Col> < /
            Row >
        );
    }
}

export default Overview;