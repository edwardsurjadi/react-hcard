import React from 'react';
import { configure, mount } from 'enzyme';
import CustomImageUpload from "./CustomImageUpload";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter()});

describe("CustomImageUpload", () => {
	let props;
	let mountedCustomImageUpload;
	const customImageUpload = () => {
		if(!mountedCustomImageUpload){
			mountedCustomImageUpload=mount(
				<CustomImageUpload {...props}/>
			);
		}
		return mountedCustomImageUpload;
	}

	beforeEach(() => {
		props = {
			title: undefined,
			cssClassName: undefined,
			updateImageSource: undefined
		};
		mountedCustomImageUpload = undefined;
	});

	//All test go here
	it("always render a div", () => {
		const divs = customImageUpload().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});
	it("only renders 1 button inside the parent div", () => {
		const button = customImageUpload().find("div").children().find("button");
		expect(button.length).toBe(1);
	});
	it("renders button label from the property received", () => {
		const wrapper = mount(<CustomImageUpload title="upload"/>);

		const buttonLabel =  wrapper.find("button").first().text();
		expect(buttonLabel).toEqual('upload');
	});
	it("renders button css from the property received", () => {
		const wrapper = mount(<CustomImageUpload cssClassName="btn"/>);

		const buttonCssClassName = wrapper.find("button").first().props().className;
		expect(buttonCssClassName).toEqual('btn');
	
	});


});