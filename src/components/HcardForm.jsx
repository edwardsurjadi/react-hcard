import React, { Component } from 'react';
import './HcardForm.css';
import '../common/control.css';
import CustomImageUpload from './CustomImageUpload';

class HcardForm extends Component{

	constructor(props){
		super(props);		
	}

	handleFormChange (evt){
		const name=evt.target.name;
		const val=evt.target.value;

		this.props.onCardDataChange({[name]: val});
	}

	handleImageSourceChange (imageSource){

		this.props.onCardDataChange({avatarSource:imageSource});
	}

	render(){
		return(
			<article className="m-hcard-form">
			<div className="form">

					<header><h1>hCard Builder</h1></header>
					<section>
						<h1>PERSONAL DETAILS</h1>
						<div className="row">
							<div className="col">
								<div className="label">GIVEN NAME</div>
								<input type='text' name='givenName' onChange={event => this.handleFormChange(event)}/>
							</div>
							<div className="col">
								<div className="label">LAST NAME</div>
								<input type='text' name='lastName' onChange={event => this.handleFormChange(event)}/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="label">EMAIL</div>
								<input type='email' name='email' onChange={event => this.handleFormChange(event)}/>
							</div>
							<div className="col">
								<div className="label">PHONE</div>
								<input type='tel' name='phone' onChange={event => this.handleFormChange(event)}/>
							</div>
						</div>

					</section>
					<section>
						<h1>ADDRESS</h1>
						<div className="row">
							<div className="col">
								<div className="label">HOUSE NAME OR #</div>
								<input type='text' name='streetNumber' onChange={event => this.handleFormChange(event)}/>
							</div>
							<div className="col">
								<div className="label">STREET</div>
								<input type='text' name='streetAddress' onChange={event => this.handleFormChange(event)}/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="label">SUBURB</div>
								<input type='text' name='suburb' onChange={event => this.handleFormChange(event)}/>
							</div>
							<div className="col">
								<div className="label">STATE</div>
								<input type='text' name='state' onChange={event => this.handleFormChange(event)}/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="label">POSTCODE</div>
								<input type='number' name='postcode' onChange={event => this.handleFormChange(event)}/>
							</div>
							<div className="col">
								<div className="label">COUNTRY</div>
								<input type='text' name='country' onChange={event => this.handleFormChange(event)}/>
							</div>
						</div>
					</section>
					<footer>
						<div className="row">
							<div className="col">
								<CustomImageUpload title="Upload Avatar" cssClassName="btn btn-secondary" onImageSourceChange={p => this.handleImageSourceChange(p)}/>
							</div>
							<div className="col">
								<button className="btn btn-primary">Create hCard</button>
							</div>
						</div>

					</footer>
				</div>
			</article>
		)
	}
}

export default HcardForm;