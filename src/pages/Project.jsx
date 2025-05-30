import { Link, useParams } from 'react-router-dom';
import { useStore } from '../store/projectStore';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export function Project() {
  const { id } = useParams();
  const getProjectById = useStore((state) => state.getProjectById);
  const project = getProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="font-clash text-dark-green bg-light-green px-4 pt-24">
      <h1 className="text-5xl font-bold mb-3">{project.name}</h1>
      <div className="flex gap-2 mb-8">
        {project.tags.map((tag) => (
          <p
            key={tag}
            className="border border-dark-green rounded-full px-2 uppercase text-sm"
          >
            {tag}
          </p>
        ))}
      </div>
      <ul>
        <li>
          <Link
            to={project.url}
            target="_blank"
            className="bg-yellow flex items-center w-fit rounded-full pl-3 pr-1.5 py-1 gap-1.5 group"
          >
            <span className="overflow-hidden">
              <span className="text-slide">Go to website</span>
            </span>
            <span className="w-6 h-6 bg-dark-green flex items-center justify-center rounded-full text-slide">
              <ArrowOutwardOutlinedIcon className="text-yellow !w-4 !h-4" />
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={project.github}
            target="_blank"
            className="bg-yellow flex items-center w-fit rounded-full pl-3 pr-1.5 py-1 gap-1.5 group"
          >
            <span className="overflow-hidden">
              <span className="text-slide">Github</span>
            </span>
            <span className="w-6 h-6 bg-dark-green flex items-center justify-center rounded-full">
              <GitHubIcon className="text-yellow !w-4 !h-4" />
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={project.github}
            target="_blank"
            className="bg-yellow flex items-center w-fit rounded-full pl-3 pr-1.5 py-1 gap-1.5 group"
          >
            <span className="overflow-hidden">
              <span className="text-slide">Share</span>
            </span>
            <span className="w-6 h-6 bg-dark-green flex items-center justify-center rounded-full">
              <ShareOutlinedIcon className="text-yellow !w-4 !h-4 -ml-0.5" />
            </span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-8">
        <li>
          <p className="font-medium mb-1">Goal</p>
          <p>{project.goal}</p>
        </li>
        <li>
          <p className="font-medium mb-1">Technologies</p>
          {project.technologies.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </li>
        <li>
          <p className="font-medium mb-1">Year</p>
          <p>{project.year}</p>
        </li>
        {project.registration ? (
          <li>
            <p className="font-medium mb-1">Demo account</p>
            <p className="mb-4">
              You can use the following demo account to log in and try out the
              features of the site.
            </p>
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="font-medium mr-1.5">Username:</span>
                {project.registration.username}
              </p>
              <p>
                <span className="font-medium mr-1.5">Email:</span>
                {project.registration.email}
              </p>
              <p>
                <span className="font-medium mr-1.5">Password:</span>
                {project.registration.password}
              </p>
            </div>
          </li>
        ) : (
          ''
        )}
      </ul>
      <div>
        {project.medias?.map((media) => (
          <img src={media.url} alt={media.alt} key={media.alt} />
        ))}
      </div>
      <Link to="/">
        <KeyboardBackspaceOutlinedIcon />
        <p>Go back to home</p>
      </Link>
    </div>
  );
}
