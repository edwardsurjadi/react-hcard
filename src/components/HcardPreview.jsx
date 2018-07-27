import React, { Component } from 'react';
import './HcardPreview.css';
import AvatarIcon from '../images/avatar.jpg';
import Dropzone from 'react-dropzone';

class HcardPreview extends Component{

	constructor(props){
		super(props);

		this.state={
			newImage:this.props.avatarSource
		};
	}

	handleImageDropped = (acceptedFiles) => {
		if(acceptedFiles.length>0){
			this.setState({newImage:acceptedFiles[0].preview});
		}
	}

	render(){
		return(
			<article className="m-hcard-preview">

				<div className="h-card">

					<div className="header">
						<div className="title">HCARD PREVIEW</div>

						<div className="p-name">
							{this.props.givenName} {this.props.lastName}
						</div>
						<img src={this.state.newImage} alt="avatar" className="u-photo"/>
						<Dropzone className="drop-zone" onDrop={this.handleImageDropped} accept="image/jpef,image/png">
						</Dropzone>						
					</div>
					<div className="body">
						<div className="row">
							<div className="field">
								<div className="label">EMAIL</div>
								<div id="email" className="content u-email">{this.props.email}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">PHONE</div>
								<div id="phone" className="content p-tel">{this.props.phone}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">ADDRESS</div>
								<div id="address-line1" className="content p-street-address">{this.props.streetNumber} {this.props.streetAddress}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">&nbsp;</div>
								<div id="address-line2" className="content">
									<span className="p-locality">{this.props.suburb}</span>
									{ this.props.suburb && this.props.state  && 
										<span>, </span>
									}
				 					<span className="p-region">{this.props.state}</span>
			 					</div>
							</div>
						</div>
						<div className="row">
							<div className="field-half">
								<div className="label">POSTCODE</div>
								<div id="postcode" className="content p-postal-code">{this.props.postcode}</div>
							</div>
							<div className="field-half">
								<div className="label">COUNTRY</div>
								<div id="country" className="content p-country-name">{this.props.country}</div>
							</div>
						</div>

					</div>
				</div>
			</article>
		)
	}
};

HcardPreview.defaultProps={
	avatarSource:AvatarIcon	
}


export default HcardPreview;