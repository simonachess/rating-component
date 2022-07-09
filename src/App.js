import { useState } from 'react'
import classnames from 'classnames'

export default function App() {
	
	const [rating, setRating] = useState(null)

	const [showThankYou, setShowThankYou] = useState({
		showThankYouPage: false,
		selectedRating: null
	})

	const ratings = ['1', '2', '3', '4', '5']
console.log(showThankYou)
	return (
		<div className="h-screen flex justify-center items-start md:items-center px-4 py-7 md:px-0 md:py-0">
			<div className={classnames(showThankYou.showThankYouPage === true && "hidden","flex flex-col w-full md:w-[412px] md:h-[416px] bg-gradient-to-t from-[#232A34] to-[#181E27] rounded-3xl p-8")}>
				<span className="h-[51px] w-[51px] rounded-full flex justify-center items-center bg-[#262E38]">
					<img src="/img/icon-star.svg"></img>
				</span>
				<h1 className="pt-6 pb-3 text-[#FFFFFF] font-bold text-3xl">How did we do?</h1>
				<p className="pb-6 text-[#969FAD]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
				<div className="pb-6 flex justify-between">
					{ ratings.map(x => 
						<button onClick={()=>{setRating(x)}} 
							className={classnames("h-[51px] w-[51px] rounded-full bg-[#262E38] text-[#7C8798] text-base font-bold hover:bg-[#FC7614] hover:text-[#FFFFFF] transition ease-in-out",
							rating === x && "bg-[#7C8798] text-[#ffffff]")}
						>{x}</button>)
					}
				</div>
				<button onClick={()=>{setShowThankYou({ showThankYouPage: true, selectedRating: rating })}} className="w-full font-bold text-base uppercase rounded-full p-3 bg-[#FC7614] text-[#FFFFFF] tracking-[3px] hover:bg-[#FFFFFF] hover:text-[#FC7614] transition ease-in-out delay-100">Submit</button>
			</div>
			<div className={classnames(showThankYou.showThankYouPage === false && "hidden","flex flex-col items-center justify-center w-full md:w-[412px] md:h-[416px] bg-gradient-to-t from-[#232A34] to-[#181E27] rounded-3xl py-6 px-8")}>
				<img src="/img/illustration-thank-you.svg" width="162" height="108"></img>
				<span className="text-[#FC7614] rounded-full bg-[#262E38] mt-6 py-2 px-6">You selected {rating} out of 5</span>
				<h1 className="p-2 text-[#FFFFFF] font-bold text-3xl">Thank you!</h1>
				<p className="pb-6 text-[#969FAD] text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
				<button onClick={()=>{setShowThankYou({ showThankYouPage: false, selectedRating: null })}} 
					className={classnames("w-full font-bold text-base uppercase rounded-full p-3 bg-[#FC7614] text-[#FFFFFF] tracking-[3px] hover:bg-[#FFFFFF] hover:text-[#FC7614] transition ease-in-out delay-100")}
				>Back</button>
			</div>
		</div>
	)
}

