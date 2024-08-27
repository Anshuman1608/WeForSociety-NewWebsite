import aboutSectionImage from '../../../assets/images/about2.webp';

const AboutUs = () => {
	return (
		<section className="ezy__about12 dark-gray pt-14 md:pt-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 justify-center items-center">
					<div className="col-span-12 lg:col-span-6">
						<div className="lg:px-7">
							<h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
								ABOUT US
							</h1>
							<p className="text-lg leading-normal opacity-75 my-6">
							Established in 2019, We For Education Welfare Society is a young NGO that has significantly impacted the lives of animals and underprivileged children. The organization is dedicated to the welfare of animals and the promotion of technical education.We For Education Welfare Society's Birds Care program is one of its efforts. As part of this program, the NGO distributes water pots for birds in various city areas. Particularly during the scorching summer months, these water pots help provide birds with clean water. The group also runs awareness campaigns to raise awareness about the value of water for birds and the impacts of climate change on bird populations.
							</p>
							<p className="text-lg leading-normal opacity-75 my-6">
							We For Education Welfare Society offers technical education to poor kids and promotes animal care. The NGO provides computer, career, and entrepreneurship training programs to assist kids in gaining the knowledge and skills necessary to thrive in today's competitive society.The NGO's Dog Care program is another major project. The organization strives to give pets in need—including stray and abandoned dogs—a secure and loving environment. To ensure that the dogs get the love and care they deserve, the organization's staff of volunteers and vets constantly works to provide them with food, shelter, and medical care.
							</p>
							{/* <div className="mt-12">
								<button className="bg-gray-900 text-white hover:bg-opacity-90 dark:bg-white dark:text-black rounded-md px-7 py-3 transition">
									Download CV
								</button>
							</div> */}
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="flex justify-center lg:justify-start lg:ml-12">
							<img
								src={aboutSectionImage}
								alt=""
								className="max-w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutUs;