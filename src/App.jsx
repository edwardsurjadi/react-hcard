import React, { Component } from  'react';
import './App.css';
import HcardForm from './components/HcardForm';
import HcardPreview from './components/HcardPreview';


class App extends Component {

	constructor(props){
		super(props);
		this.state={
			givenName:'', 
			familyName:'',
			email:'',
			phone:'',
			streetNumber:'',
			streetAddress:'',
			suburb:'',
			state:'',
			postcode:'',
			country:''
		};
	}

	handleCardDataChange(cardData){
		this.setState(cardData);
	}

	render(){
		return(
			<div className="l-half">
				<HcardForm onCardDataChange={p => this.handleCardDataChange(p)}/>
				<HcardPreview 
					givenName={this.state.givenName} 
					lastName={this.state.lastName}
					email={this.state.email}
					phone={this.state.phone}
					streetNumber={this.state.streetNumber}
					streetAddress={this.state.streetAddress}
					suburb={this.state.suburb}
					state={this.state.state}
					postcode={this.state.postcode}
					country={this.state.country}
					avatarSource={this.state.avatarSource}
					/>
			</div>
		)
	}

}

export default App;