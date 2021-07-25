import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import Album from '../home/hero/Album';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MySwiper({ data }) {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
    //get data
    //map data and return slides
    // const handleMouseEnter = (e) => {
    //     console.log(e.target)
    //     e.target.querySelector('.blur').classList.add('visible');
    //     console.log(e.target)
    // }
    return (
        <Swiper
            id="hero-swiper"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}

        >
            {data.map((album) => (
                <SwiperSlide key={album.id}>
                    <Album imgLink={album.imgLink} titles={album.titles} description={album.description} spotifyLink={album.spotifyLink} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MySwiper
