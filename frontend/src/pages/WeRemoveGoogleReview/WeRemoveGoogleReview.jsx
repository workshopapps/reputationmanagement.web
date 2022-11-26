import React from 'react'
import Rating from '../../components/WeRemoveGoogleReview/WRDRRating';

import WRGRAbout from '../../components/WeRemoveGoogleReview/WRGRAbout';
import WRGRFooter from '../../components/WeRemoveGoogleReview/WRGRFooter';
import WRGRHero from '../../components/WeRemoveGoogleReview/WRGRHero';
import WRGRReview from '../../components/WeRemoveGoogleReview/WRGRReview';
import PageLayout from '../../layout/PageLayout';

const WeRemoveGoogleReview = () => {
	return (
		<>
			<PageLayout>
				<main>
					<WRGRHero />
					<WRGRAbout />
					<WRGRReview />
					<Rating />
					<WRGRFooter />
				</main>
			</PageLayout>
		</>
	);
};

export default WeRemoveGoogleReview;
