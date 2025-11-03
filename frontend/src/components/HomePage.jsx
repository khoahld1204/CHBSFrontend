// src/components/HomePage.jsx
import React from 'react';
import PromoBanner from "./PromoBanner";
import HomeBanner from './HomeBanner';
import FlashSaleSection from './FlashSaleSection';
import ProductCategories from './ProductCategories';
import HalloweenSection from './HalloweenSection';
import ReferenceProducts from './ReferenceProducts';
import FeaturedBookshelf from './FeaturedBookshelf';
import BestsellerRankings from './BestsellerRankings';
import FeaturedBrands from './FeaturedBrands/FeaturedBrands';
import ComboTrending from './ComboTrending/ComboTrending';
import FeaturedCollections from './Collections/FeaturedCollections';
import PartnerSlider from './PartnerSlider/PartnerSlider';
import ProductList from './ProductList/ProductList';
import NewsletterSubscription from './Newsletter/NewsletterSubscription';

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <PromoBanner />
            <HomeBanner />
            <FlashSaleSection />
            <ProductCategories />
            <HalloweenSection />
            <ReferenceProducts />
            <FeaturedBookshelf />
            <BestsellerRankings />
            <FeaturedBrands />
            <ComboTrending />
            <FeaturedCollections />
            <PartnerSlider />
            <ProductList />
            <NewsletterSubscription />
        </div>
    );
}

export default HomePage;