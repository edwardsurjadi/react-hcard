import React from 'react';
import { configure, mount } from 'enzyme';
import HcardPreview from "./HcardPreview";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter()});

describe("HcardPreview", () => {
	let props;
	let mountedHcardPreview;
	const hcardPreview = () => {
		if(!mountedHcardPreview){
			mountedHcardPreview=mount(
				<HcardPreview {...props}/>
			);
		}
		return mountedHcardPreview;
	}

	beforeEach(() => {
		props = {
			givenName: undefined, 
			lastName: undefined,
			email: undefined,
			phone: undefined,
			streetNumber: undefined,
			streetAddress: undefined,
			suburb: undefined,
			state: undefined,
			postcode: undefined,
			country: undefined,
			avatarSource: undefined
		};
		mountedHcardPreview = undefined;
	});

	//All test go here
	it("always render an article", () => {
		const divs = hcardPreview().find("article");
		expect(divs.length).toBeGreaterThan(0);
	});
	it("renders full name correctly by concatenating first and last", () => {
		const wrapper = mount(<HcardPreview givenName="first" lastName="last"/>);

		const buttonLabel =  wrapper.find("div.name").first().text();
		expect(buttonLabel).toEqual('first last');
	});
	it("does not display comma if state is not passed", () => {
		const wrapper = mount(<HcardPreview suburb="Pyrmont"/>);

		expect(wrapper.contains(<span>, </span>)).toEqual(false);
	});
	it("displays comma if suburb and state are passed", () => {
		const wrapper = mount(<HcardPreview suburb="Pyrmont" state="NSW"/>);

		expect(wrapper.contains(<span>, </span>)).toEqual(true);
	});


});