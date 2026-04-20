import PortfolioNavbar4 from "../Navbar/Navbar4";
import PortfolioHero4 from "../Hero/Hero4";
import PortfolioProjects4 from "../Projects/Projects4";
import PortfolioSkills4 from "../Skills/Skills4";
import PortfolioFooter4 from "../Footer/Footer4";

export default function PortfolioTemplate5({ content = {}, editor }) {
	const {
		navbarContent = {},
		heroContent = {},
		projectsContent = {},
		skillsContent = {},
		footerContent = {},
	} = content;

	return (
		<div className="w-full">
			<PortfolioNavbar4 content={navbarContent} editor={editor} />
			<PortfolioHero4 content={heroContent} editor={editor} />
			<PortfolioProjects4 content={projectsContent} editor={editor} />
			<PortfolioSkills4 content={skillsContent} editor={editor} />
			<PortfolioFooter4 content={footerContent} editor={editor} />
		</div>
	);
}