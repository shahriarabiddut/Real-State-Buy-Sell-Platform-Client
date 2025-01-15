import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import profileError from "../../../assets/profileError.png";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const reviews = [
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: profileError,
    name: "Roger Scott",
    position: "Marketing Manager",
  },
];
const UserReviews = () => {
  return (
    <section className="bg-gray-200 ">
      <div className="container mx-auto text-center py-20 w-11/12">
        <SectionTitle
          title={"Happy Clients"}
          subTitle={"User Reviews"}
          color="black"
        />
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: green;"></span>`;
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
          breakpoints={{
            250: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mb-12">
                <span className="text-4xl text-firstBg block mb-4">
                  <FaQuoteLeft />
                </span>
                <p className="text-gray-700 mb-6 text-justify">{review.text}</p>
                <div className="flex items-start justify-start">
                  <div
                    className="w-16 h-16 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${review.image})` }}
                  ></div>
                  <div className="ml-4 text-left">
                    <p className="font-semibold">{review.name}</p>
                    <span className="text-sm text-gray-500">
                      {review.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UserReviews;
