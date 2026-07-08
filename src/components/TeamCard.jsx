import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">

      <img
        src={image}
        alt={name}
        className="h-80 w-full object-cover"
      />

      <div className="p-6 text-center">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-gray-500 mt-2">
          {role}
        </p>

        <div className="flex justify-center gap-4 mt-5">

          <FontAwesomeIcon className="cursor-pointer hover:text-blue-600 transition" icon={faLinkedin} />
          <FontAwesomeIcon className="cursor-pointer hover:text-gray-700 transition" icon={faGithub} />

        </div>

      </div>

    </div>
  );
};

export default TeamCard;