import React from "react"

const OfferComponent = ({textBtn, imgSrc}) => {
	return (
		<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-4 lg:overflow-visible">
			<figure className="relative w-full">
				<img
					className="object-contain object-center w-full h-full rounded-xl"
					src={imgSrc}
					alt="nature image"
				/>

				{textBtn && (
					<button className="btn_secondary_outline absolute uppercase right-2 bottom-2 ">
						{textBtn}
					</button>
				)}
			</figure>
		</div>
	)
}

export default OfferComponent
