import React from 'react';
import BannerSearch from '../components/bannerSearch/BannerSearch';
import Explore from '../components/explore/Explore';
import Hotels from '../components/hotels/Hotels';
import Tours from '../components/Tours/Tours';
import Video from '../components/vedio/Video';

function Home() {
    return (
        <div>
            <BannerSearch />
            <Tours />
            <Explore />
            <Video />
            <Hotels />
        </div>
    );
}

export default Home;
