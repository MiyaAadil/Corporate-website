import { team } from "../data/team";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-7">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Meet Our Team
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Our passionate professionals work together to create innovative
          digital solutions that help businesses grow.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

        {team.map((member) => (
          <TeamCard
            key={member.id}
            {...member}
          />
        ))}

      </div>

    </section>
  );
};

export default Team;