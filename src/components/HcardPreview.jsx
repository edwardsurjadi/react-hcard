import React, { Component } from 'react';
import './HcardPreview.css';
import AvatarIcon from '../images/avatar.jpg';

class HcardPreview extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<article className="m-hcard-preview">

				<div className="card">

					<div className="header">
						<div className="title">HCARD PREVIEW</div>

						<div className="name">
							{this.props.givenName} {this.props.lastName}
						</div>
						<img src={this.props.avatarSource} alt="avatar" className="avatar"/>
					</div>
					<div className="body">
						<div className="row">
							<div className="field">
								<div className="label">EMAIL</div>
								<div id="email" className="content">{this.props.email}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">PHONE</div>
								<div id="phone" className="content">{this.props.phone}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">ADDRESS</div>
								<div id="address-line1" className="content">{this.props.streetNumber} {this.props.streetAddress}</div>
							</div>
						</div>
						<div className="row">
							<div className="field">
								<div className="label">&nbsp;</div>
								<div id="address-line2" className="content">
									{this.props.suburb}
									{ this.props.suburb && this.props.state  && 
										<span>, </span>
									}
									{this.props.state}</div>
							</div>
						</div>
						<div className="row">
							<div className="field-half">
								<div className="label">POSTCODE</div>
								<div id="postcode" className="content">{this.props.postcode}</div>
							</div>
							<div className="field-half">
								<div className="label">COUNTRY</div>
								<div id="country" className="content">{this.props.country}</div>
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