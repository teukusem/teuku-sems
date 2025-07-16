import { motion } from 'framer-motion';
import { childVariants } from '../constants/animations';
import { ANIMATION_DURATIONS } from '../constants/ui';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <motion.div
      variants={childVariants}
      className="p-6 overflow-hidden shadow-lg cursor-pointer rounded-xl"
      style={{ background: 'transparent', border: 'none' }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
      transition={{ duration: ANIMATION_DURATIONS.HOVER }}
      onClick={handleClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-48 mb-4 rounded-[1rem] border border-gray-700"
      />
      <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
      <p className="mb-4 text-[#9CA3AF]">{project.desc}</p>
    </motion.div>
  );
};