import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap';

class AppButtons extends Component{
	render(){
		return(
			<Row className="order">
				<Col md={{ span: 2, offset: 3 }}>
					<h2>Oder :</h2>
				</Col>
				<Col md={2}>
					<Button variant="outline-info" onClick={this.props.asc}>Ascendente</Button>
				</Col>
				<Col md={2}>
					<Button variant="info" onClick={this.props.desc}>Desendente</Button>
				</Col>
			</Row>
		)
	}
}


export default AppButtons
