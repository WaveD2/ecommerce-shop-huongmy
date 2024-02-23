import React from "react"
import {Link} from "react-router-dom"
import {FaSearch} from "react-icons/fa"
const CardComponent = ({id, name, img, new_price, old_price}) => {
	return (
		<div className="rounded-xl overflow-hidden shadow-lg">
			<div className="relative border-b border-gray-20 flexCenter group overflow-hidden transition-all duration-100">
				<Link
					to={`product/${id}`}
					className="h-12 w-12 bg-white rounded-full flexCenter
                absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700
                "
				>
					<FaSearch className="hover:rotate-90 hover:scale-125 transition-all duration-200" />
				</Link>
				<img
					src={img}
					alt={`ảnh sản phẩm ${name}`}
					className="h-[256px] w-full block object-cover group-hover:scale-110 transition-all duration-100"
				/>
			</div>
			<div className="p-4 overflow-hidden">
				<h4 className="my-[6px] text-lg font-medium line-clamp-2 text-gray-30">
					{name}
				</h4>
			</div>
			<div className="flex justify-between items-center gap-5 px-4 pb-4">
				<div className=" text-secondary font-bold text-base">
					{new_price}.000 VND
				</div>
				<div className=" font-semibold text-base line-through">
					{old_price}.000 VND
				</div>
			</div>
		</div>
	)
}

export default CardComponent
