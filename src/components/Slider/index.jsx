import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./slider-style.css";
import Copy from "@/components/Copy";

export const Slider = ({ isMobile }) => {
	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			slidesPerView={"auto"}
			loop={true}
			navigation={true}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			// // pagination={{
			// 	clickable: true,
			// 	el: ".swiper-pagination",
			// 	type: "bullets",
			// }}
			className="mySwiperRetreat"
			onPaginationUpdate={() => {}}
		>
			<SwiperSlide className="styled">
				<div className="slider-slide">
					<div className="avatar-container">
						<div className="avatar">
							<img
								src="/reviews/review1.png"
								alt=""
							/>
						</div>
						<div className="row">
							<p className="body-text sub">
								Marina B. {isMobile && <br />} Business Owner
							</p>
						</div>
					</div>
					<div className="container-stars">
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<p className="body-text sub">(5.0)</p>
					</div>
					<p className="body-text">
						"I felt so seen and understood by Anastasia. One of a kind services,
						attention and expertise. <br />
						100% Recommend."
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div className="slider-slide">
					<div className="avatar-container">
						<div className="avatar">
							<img
								src="/reviews/review4.png"
								alt=""
							/>
						</div>
						<div className="row">
							<p className="body-text sub">
								Alina L.{isMobile && <br />} Business Owner
							</p>
						</div>
					</div>
					<div className="container-stars">
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<p className="body-text sub">(5.0)</p>
					</div>
					<p className="body-text">
						"So easy and fun to work with Anastasia. I love my new website."
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div className="slider-slide">
					<div className="avatar-container">
						<div className="avatar">
							<img
								src="/reviews/review2.png"
								alt=""
							/>
						</div>
						<div className="row">
							<p className="body-text sub">
								Mila Z.{isMobile && <br />} Business Owner
							</p>
						</div>
					</div>
					<div className="container-stars">
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<p className="body-text sub">(5.0)</p>
					</div>
					<p className="body-text">
						"Absolutely love my website. Everything was very fast and
						professional. I'm so glad I met Anastasia."
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div className="slider-slide">
					<div className="avatar-container">
						<div className="avatar">
							<img
								src="/reviews/review3.png"
								alt=""
							/>
						</div>
						<div className="row">
							<p className="body-text sub">
								Olena S.{isMobile && <br />} Business Owner
							</p>
						</div>
					</div>
					<div className="container-stars">
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<img
							src="/star1.png"
							alt=""
						/>
						<p className="body-text sub">(5.0)</p>
					</div>
					<p className="body-text">
						"I'm so happy I finally decided to update my website! I was a bit
						scared at first, but Anastasia made everything go smooth and
						painless. Thank you!
					</p>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
