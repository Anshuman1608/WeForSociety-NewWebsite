import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import PropTypes from "prop-types";
import piyushImage from './../../../assets/images/piyush.jpg'
import dhananjayImage from './../../../assets/images/dhananjay.jpg'
import karishmaImage from './../../../assets/images/karishma.jpg'
import ashishImage from './../../../assets/images/ashish.jpg'

// Define type for social links
interface SocialLink {
	icon: IconDefinition;
	href: string;
}

// Define type for team member
interface TeamMember {
	picture: string;
	fullName: string;
	designation: string;
	bio: string;
	socialLinks: SocialLink[];
}

// Define props for TeamMemberItem component
interface TeamMemberItemProps {
	member: TeamMember;
}

const teamMembers: TeamMember[] = [
	{
		picture: piyushImage,
		fullName: "Piyush Agarwal",
		designation: "Founder / Treasurer",
		bio: "",
		socialLinks: [
			{ icon: faFacebookF, href: "https://www.facebook.com/midaspiyush" },
			{ icon: faLinkedinIn, href: "https://www.linkedin.com/in/midaspiyush/" },
			{ icon: faTwitter, href: "https://twitter.com/MidasPiyush" },
			{ icon: faInstagram, href: "https://www.instagram.com/midaspiyush/" },
		],
	},
	{
		picture: dhananjayImage,
		fullName: "Dhananjay Singh",
		designation: "Member",
		bio: "",
		socialLinks: [
			{ icon: faFacebookF, href: "https://www.facebook.com/mr.singhdj1305" },
			{ icon: faLinkedinIn, href: "https://www.linkedin.com/in/mrsingh1305/" },
			{ icon: faTwitter, href: "https://twitter.com/Mrsingh_dj" },
			{ icon: faInstagram, href: "https://www.instagram.com/mr.singh_dj/" },
		],
	},
	{
		picture: karishmaImage,
		fullName: "Karishma Rastogi",
		designation: "Member",
		bio: "",
		socialLinks: [
			{ icon: faFacebookF, href: "https://www.facebook.com/kari.rastogi" },
			{ icon: faLinkedinIn, href: "https://www.linkedin.com/in/karirastogi/" },
			{ icon: faInstagram, href: "https://www.instagram.com/kari.rastogi/" },
		],
	},
	{
		picture: ashishImage,
		fullName: "Ashish Agarwal",
		designation: "Joint Secretary",
		bio: "",
		socialLinks: [
			// { icon: faFacebookF, href: "#" },
			// { icon: faLinkedinIn, href: "#" },
			// { icon: faTwitter, href: "#" },
			// { icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({ member }) => (
	<div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8" data-aos="fade-up" data-aos-delay="200">
		<img
			src={member.picture}
			alt={member.fullName}
			className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto -mt-20"
			width="120"
		/>
		<div className="mt-6">
			<h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
			<p className="mb-4 text-sm">{member.designation}</p>
			<p className="opacity-50">{member.bio}</p>
			<div className="mt-6">
				{member.socialLinks.map((item, i) => (
					<a
						href={item.href}
						className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
							i + 1 !== member.socialLinks.length && "mr-4"
						}`}
						key={i}
					>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		</div>
	</div>
);

const TeamMember = () => {
	return (
		<section className="ezy__team10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="max-w-lg text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Our Experts Team
						</h2>
						<p>
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-6 text-center pt-6">
					{teamMembers.map((member, i) => (
						<div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamMember;
