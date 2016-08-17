'use strict'

import * as Yelp from './Yelp'


export const bestDomainFor = (locale) => {
	const localeDomain = Yelp.localeDomains[locale]
	if (localeDomain) {
		return localeDomain
	}
	
	return Yelp.localeDomains['en_US']
}

export const bestPageUrlFor = ({locale, id}) => {
	const domain = Yelp.localeDomains[locale]
	if (domain) {
		return `https://${domain}/biz/${id}`
	} else {
		return `https://${Yelp.localeDomains['en_US']}/biz/${id}?hl=${locale}`
	}
}