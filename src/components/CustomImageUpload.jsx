import React, { Component } from 'react';
import '../common/control.css';

class CustomImageUpload extends Component{

	constructor(props){
		super(props);

		this.fileUpload = React.createRef();
	}

	handleFileUploadChange (evt){
		const file = evt.target.files[0];
		const reader = new FileReader();
		const url = reader.readAsDataURL(file);

		reader.onloadend=function(e){

			this.props.onImageSourceChange([reader.result]);

		}.bind(this);
	}

	showUploadDialog(){
		this.fileUpload.current.click();
	}

	render(){

		return(
			<div className="m-file-upload">
				<button className={this.props.cssClassName} onClick={() => this.showUploadDialog()}>{this.props.title}</button>
				<input type="file"
					style={{display: "none"}}
					ref={this.fileUpload}
					name="fileUpload"
					onChange={event => this.handleFileUploadChange(event)}
					/>
			</div>
		)
	}
}


export default CustomImageUpload;