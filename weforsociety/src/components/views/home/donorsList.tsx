import React from "react";
import piyushImage from '../../../assets/images/piyush.jpg';
import dhananjayImage from '../../../assets/images/dhananjay.jpg';
import karishmaImage from '../../../assets/images/karishma.jpg';

interface TeamMember {
  picture: string;
  fullName: string;
}

interface TeamMemberItemProps {
  member: TeamMember;
}

const TeamMemberItem: React.FC<TeamMemberItemProps> = ({ member }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full border-4 p-1 border-blue-600 mx-auto"
      width="120"
    />
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
    </div>
  </div>
);

const teamMembers: TeamMember[] = [
    {
		picture: piyushImage,
		fullName: "Piyush Agarwal",
	},
	{
		picture: dhananjayImage,
		fullName: "Dhananjay Singh",
	},
	{
		picture: karishmaImage,
		fullName: "Karishma Rastogi",
	},
];

const TeamMember9: React.FC = () => {
  return (
    <section className="ezy__team9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Our Experts Team
            </h2>
            <p>
                Not to be taken on, the distinction of nothing said by the wise, some greater ones, but those who are.
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

export default TeamMember9;
