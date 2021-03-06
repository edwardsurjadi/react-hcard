import React from 'react';
import { configure, mount } from 'enzyme';
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter()});

describe("App", () => {
	let mountedApp;
	const app = () => {
		if(!mountedApp){
			mountedApp=mount(
				<App/>
			);
		}
		return mountedApp;
	}

	beforeEach(() => {
		mountedApp = undefined;
	});

	//All test go here
	it("always render a div", () => {
		const divs = app().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("renders a HcardForm", () => {
		const divs = app().find("HcardForm");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("renders a HcardPreview", () => {
		const divs = app().find("HcardPreview");
		expect(divs.length).toBeGreaterThan(0);
	});
});