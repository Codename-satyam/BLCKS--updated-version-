import PortfolioNavbar3 from "../Navbar/Navbar3";
import PortfolioHero3 from "../Hero/Hero3";
import PortfolioProjects3 from "../Projects/Projects3";
import PortfolioSkills3 from "../Skills/Skills3";
import PortfolioFooter3 from "../Footer/Footer3";

export default function PortfolioTemplate3({ content = {}, editor }) {
	const {
		navbarContent = {},
		heroContent = {},
		projectsContent = {},
		skillsContent = {},
		footerContent = {},
	} = content;

	return (
		<div className="w-full">
			<PortfolioNavbar3 content={navbarContent} editor={editor} />
			<PortfolioHero3 content={heroContent} editor={editor} />
			<PortfolioProjects3 content={projectsContent} editor={editor} />
			<PortfolioSkills3 content={skillsContent} editor={editor} />
			<PortfolioFooter3 content={footerContent} editor={editor} />
		</div>
	);
}
