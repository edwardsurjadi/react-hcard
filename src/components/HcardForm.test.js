import React from 'react';
import { configure, mount } from 'enzyme';
import HcardForm from "./HcardForm";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter()});

describe("HcardForm", () => {
	let props;
	let mountedHcardForm;
	const hcardForm = () => {
		if(!mountedHcardForm){
			mountedHcardForm=mount(
				<HcardForm {...props}/>
			);
		}
		return mountedHcardForm;
	}

	beforeEach(() => {
		props = {
			onCardDataChange: undefined
		};
		mountedHcardForm = undefined;
	});

	//All test go here
	it("always render a article", () => {
		const divs = hcardForm().find("article");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("renders the upload button component", () => {
		const divs = hcardForm().find("CustomImageUpload");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("renders more than 1 textboxes", () => {
		const divs = hcardForm().find("input[type='text']");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("calls updateCardData when form is entered", () => {
	 	const onFormEntered = sinon.spy();
		const wrapper = mount(<HcardForm onCardDataChange={onFormEntered}/>);

		const textbox = wrapper.find("input[type='text']").first();

		textbox.simulate("change", {target: {value:'myname'}});
		expect(onFormEntered.callCount).toEqual(1);
	});

});