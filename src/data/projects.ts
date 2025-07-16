export interface Project {
  image: string;
  title: string;
  desc: string;
  link: string;
}

export const projects: Project[] = [
  {
    image: "/assets/nawasmara-saas.png",
    title: "Nawasmara",
    desc: "Nawasmara is a comprehensive wedding invitation platform built with Next.js 15 and TypeScript. It's a multi-tenant SaaS application that allows users to create, customize, and host digital wedding invitations with professional templates.",
    link: "https://nawasmara.com/",
  },
  {
    image: "/assets/nawatamu.png",
    title: "Nawatamu",
    desc: "All in one platform for sending ERC20 tokens across the Ethereum blockchain on the Goerli Testnet.ETH TRANSACT helps in transferring tokens fast and easy. ETHTRANSACT also gives real-time data of the prices of over 200 cryptocurrencies worldwide.",
    link: "https://tamu.nawagroup.id/login",
  },
  {
    image: "/assets/pilkada-pro.png",
    title: "Pilkada Pro",
    desc: "Developing a regional election web application focused on speed, modernity, and responsiveness. Built with Next.js for optimal performance and strong SEO, the project uses Tailwind CSS to streamline styling and Material-UI for ready-to-use components, accelerating development. React Query efficiently handles state management, ensuring real-time data availability. This project aims to deliver a high-performance website with enhanced visibility and accessibility through optimized SEO.",
    link: "https://frontend-web-livid.vercel.app/",
  },
  {
    image: "/assets/bebas-kirim.png",
    title: "Bebas Kirim",
    desc: "This logistics management platform optimizes and streamlines goods shipment. Built with TypeScript and Next.js, it ensures SEO optimization, code consistency, and stability. Styled Components and Reactstrap create a responsive, visually appealing interface for a smooth user experience. For form handling, React Hook Form manages state efficiently, while Yup provides reliable validation to ensure data integrity. This project follows front-end best practices to deliver a platform that combines functionality, aesthetic appeal, and user-friendliness.",
    link: "https://bebaskirim.com/",
  },
  {
    image: "/assets/phinnisi.png",
    title: "Phinnisi",
    desc: "Phinnisi-ID is a comprehensive Vessel Management System designed to streamline and manage ship services from end to end. The system integrates with INAPORTNET and covers the entire workflow, from initial service requests to final billing and reporting. It is built to enhance the efficiency and accuracy of port-related services by automating and optimizing various operational processes.",
    link: "https://www.ilcs.co.id/phinnisi-id",
  },
  {
    image: "/assets/pokemon-go.png",
    title: "Pokemon Go",
    desc: "This project is a Pokémon-themed website built with React.js to provide a dynamic and interactive experience. It utilizes pure CSS for foundational styling while incorporating styled-components for global components, ensuring a consistent look and feel across the site. Key features include a Pokémon-catching function that allows users to collect their favorite Pokémon, along with other exciting features that enhance engagement and bring the world of Pokémon to life in a fun, user-friendly way.",
    link: "https://grocir-one-test-pokemon-app.vercel.app/",
  },
];