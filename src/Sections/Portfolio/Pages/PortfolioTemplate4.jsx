import PortfolioNavbar1 from "../Navbar/Navbar1";
import PortfolioHero2 from "../Hero/Hero2";
import PortfolioProjects2 from "../Projects/Projects2";
import PortfolioSkills3 from "../Skills/Skills3";
import PortfolioFooter1 from "../Footer/Footer1";

export default function PortfolioTemplate4({ content = {}, editor }) {
	const {
		navbarContent = {},
		heroContent = {},
		projectsContent = {},
		skillsContent = {},
		footerContent = {},
	} = content;

	return (
		<div className="w-full">
			<PortfolioNavbar1 content={navbarContent} editor={editor} />
			<PortfolioHero2 content={heroContent} editor={editor} />
			<PortfolioProjects2 content={projectsContent} editor={editor} />
			<PortfolioSkills3 content={skillsContent} editor={editor} />
			<PortfolioFooter1 content={footerContent} editor={editor} />
		</div>
	);
}
