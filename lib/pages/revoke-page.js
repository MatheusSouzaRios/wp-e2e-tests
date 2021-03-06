/** @format */

import { By } from 'selenium-webdriver';

import AsyncBaseContainer from '../async-base-container';

import * as DriverHelper from '../driver-helper.js';

export default class RevokePage extends AsyncBaseContainer {
	constructor( driver ) {
		super( driver, By.css( '.people-invite-details__clear-revoke' ) );
	}

	async revokeUser() {
		return await DriverHelper.clickWhenClickable(
			this.driver,
			By.css( '.people-invite-details__clear-revoke [type]' )
		);
	}

	async revokeSent() {
		return await DriverHelper.isEventuallyPresentAndDisplayed(
			this.driver,
			By.css( '.notice.is-success' )
		);
	}
}
