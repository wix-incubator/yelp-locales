'use strict'

import {expect} from 'chai'
import * as YelpLocales from '../src/YelpLocales'

describe('YelpLocales', () => {
	describe('bestDomainFor', () => {
		it ('supports English (United States)', () => {
			expect(YelpLocales.bestDomainFor('en_US')).to.equal('www.yelp.com')
		})
		
		it ('supports other Yelp-supported locales', () => {
			expect(YelpLocales.bestDomainFor('de_DE')).to.equal('www.yelp.de')
		})
		
		it ('falls back to English (United States)', () => {
			expect(YelpLocales.bestDomainFor('xx_XX')).to.equal('www.yelp.com')
		})
	})
	
	describe('bestPageUrlFor', () => {
		it ('supports English (United States)', () => {
			expect(YelpLocales.bestPageUrlFor({
				locale: 'en_US',
				id: 'some-business'
			})).to.equal('https://www.yelp.com/biz/some-business')
		})
		
		it ('supports other Yelp-supported locales', () => {
			expect(YelpLocales.bestPageUrlFor({
				locale: 'de_DE',
				id: 'some-business'
			})).to.equal('https://www.yelp.de/biz/some-business')
		})
		
		
		it ('makes best-effort in case of unsupported locales', () => {
			expect(YelpLocales.bestPageUrlFor({
				locale: 'xx_XX',
				id: 'some-business'
			})).to.equal('https://www.yelp.com/biz/some-business?hl=xx_XX')
		})
	})
})
