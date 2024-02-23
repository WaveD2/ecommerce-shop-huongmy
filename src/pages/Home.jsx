import React from "react"
import HeroComponent from "../components/HeroComponent"
import PopularComponent from "../components/PopularComponent"
import OfferComponent from "../components/OfferComponent"
import bgBeGai from "../assets/bg_be_gai.png"
import bgBeTrai from "../assets/bg_be_trai.png"
const HomePage = () => {
	return (
		<>
			<HeroComponent />
			<OfferComponent
				imgSrc={bgBeGai}
				textTitle={"Sale 80% đồ bé gái"}
				textBtn="Mua ngay"
			/>
			<PopularComponent />
			<OfferComponent
				imgSrc={bgBeTrai}
				textTitle={"Sale 79% đồ bé trai"}
				textBtn="Mua ngay"
			/>
			<PopularComponent />
		</>
	)
}

export default HomePage
