import React from "react"
import {MdOutlineLocalOffer} from "react-icons/md"
import {FaStar} from "react-icons/fa"
import {NavLink} from "react-router-dom"
const HeroComponent = () => {
	return (
		<section className="relative bg-hero bg-center bg-no-repeat h-[90vh] w-full flex flex-col justify-around">
			<div className="px-[5%] h3 relative top-8 xs:top-14">
				<h1 className="text-gray-50 mt-6 max-w-[33rem] h1">Shop Hường Mỹ</h1>
				<p className="text-gray-700 max-w-lg text-base md:text-lg mt-4">
					Với công nghệ làm trắng răng mới nhất từ Thụy Điển, chúng tôi cam kết
					mang đến cho bạn một hàm răng không chỉ trắng bóng mà còn khỏe mạnh để
					bạn tự tin tỏa sáng mỗi ngày, nói lời ngọt ngào với người mình yêu.
					Liên hệ ngay hotline dưới đây để được hỗ trợ các bạn nhé!
				</p>
			</div>

			{/* <div className="flex gap-3 items-center px-[5%]">
				<div className="flexStart items-center gap-x-4">
					<FaStar className="text-red-400" size={24} />
					<FaStar className="text-red-400" size={24} />
					<FaStar className="text-red-400" size={24} />
					<FaStar className="text-red-400" size={24} />
				</div>
  <div className="text-3xl text-black-400 font-bold">
					176k
					<span className="p ml-3">Excellent Reviews</span>
				</div>  
			</div> */}
			<div className="max-xs:flex-col flex gap-2 px-[5%]">
				<NavLink to={""} className="btn_dark_rounded flexCenter">
					Mua ngay
				</NavLink>
				<NavLink to={""} className="btn_dark_rounded flexCenter">
					<MdOutlineLocalOffer className="text-2xl" />
					Mã giảm giá
				</NavLink>
			</div>
		</section>
	)
}

export default HeroComponent
