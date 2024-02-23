import React from "react"
import {POPULAR_PRODUCTS} from "../utils/contants"
import CardComponent from "./CardComponent"

const PopularComponent = () => {
	return (
		<section className="bg-primary">
			<div className="max_add_container py-10 xl:py-28 xl:w-[88%]">
				<h3 className="text-title-h3-desktop text-center">Quần áo trẻ em</h3>
				<hr
					className="h-[30px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black
                to-transparent mb-16
                "
				/>

				{/*  */}
				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
					{POPULAR_PRODUCTS.map((item) => {
						return (
							<CardComponent
								key={item.id}
								id={item.id}
								name={item.name}
								img={item.img}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						)
					})}
				</div>
				<button className="btn_dark_rounded w-full mt-4">Xem thêm</button>
			</div>
		</section>
	)
}

export default PopularComponent
