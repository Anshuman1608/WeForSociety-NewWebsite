//NOT BEING USED
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import Rating from "./Rating";
import aboutSectionImage from '../../../assets/images/about2.webp';

const testimonialList = [
	{
		author: {
			fullName: "We Help People In Need",
			picture: aboutSectionImage,
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"Established in 2019, We For Education Welfare Society is a young NGO that has significantly impacted the lives of animals and underprivileged children. The organization is dedicated to the welfare of animals and the promotion of technical education.We For Education Welfare Society's Birds Care program is one of its efforts. As part of this program, the NGO distributes water pots for birds in various city areas. Particularly during the scorching summer months, these water pots help provide birds with clean water. The group also runs awareness campaigns to raise awareness about the value of water for birds and the impacts of climate change on bird populations.We For Education Welfare Society offers technical education to poor kids and promotes animal care. The NGO provides computer, career, and entrepreneurship training programs to assist kids in gaining the knowledge and skills necessary to thrive in today's competitive society.The NGO's Dog Care program is another major project. The organization strives to give pets in need—including stray and abandoned dogs—a secure and loving environment. To ensure that the dogs get the love and care they deserve, the organization's staff of volunteers and vets constantly works to provide them with food, shelter, and medical care.",
	},
];

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const Testimonial12 = () => {
	const [index, setIndex] = useState(0);
	const { author, description, rating } = testimonialList[index];

	const handleControl = (type: string) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section className="ezy__testimonial12 light relative py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mt-6">
					<div className="lg:max-w-5xl">
						<div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
							<div className="md:w-1/2 md:py-12">
								<div
									className="bg-center bg-no-repeat bg-cover rounded-xl h-full min-h-[450px] object-cover"
									style={{
										backgroundImage: `url(${author.picture})`,
									}}
								></div>
							</div>
							<div className="md:w-1/2 relative">
								<div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-blue-50 dark:bg-slate-800 -z-[1] rounded-xl"></div>
								<div className="flex flex-col justify-center h-full mb-10 md:mb-0">
									<div className="p-6 lg:py-16 mb-6">
										<h4 className="text-2xl font-bold mb-4">
											{author.fullName}
										</h4>
										{/* <Rating rating={rating} showLabel={false} /> */}
										<p className="opacity-50">{description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial12;
