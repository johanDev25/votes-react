import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';

class AppPost extends Component {

	render(){
		return(
			<Row className="section">
				<Col md={{ span: 2, offset: 2 }}>
					<Image src={this.props.post_image_url} fluid />
				</Col>
				<Col md={1}>
					<i className="fas fa-angle-up" onClick={this.props.upVote(this,this.props.id, true)}></i>
					<div className="vote" >{this.props.votes}</div>
					<i className="fas fa-angle-down" onClick={this.props.downVote(this,this.props.id, false)}></i>
				</Col>
				<Col md={5}>
					<h5><a href={this.props.url}>{this.props.title}</a></h5>
					<p>{this.props.description}</p>
					<p><span className="text-muted">Escrito por: </span><Image width={40}
						height={40} src={this.props.post_image_url} roundedCircle /></p>
				</Col>
				<Col></Col>
			</Row>

		)}

	}

	export default AppPost
