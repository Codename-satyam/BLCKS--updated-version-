import PortfolioNavbar2 from "../Navbar/Navbar2";
import PortfolioHero2 from "../Hero/Hero2";
import PortfolioProjects2 from "../Projects/Projects2";
import PortfolioSkills2 from "../Skills/Skills2";
import PortfolioFooter2 from "../Footer/Footer2";

export default function PortfolioTemplate2({ content = {}, editor }) {
	const {
		navbarContent = {},
		heroContent = {},
		projectsContent = {},
		skillsContent = {},
		footerContent = {},
	} = content;

	return (
		<div className="w-full">
			<PortfolioNavbar2 content={navbarContent} editor={editor} />
			<PortfolioHero2 content={heroContent} editor={editor} />
			<PortfolioProjects2 content={projectsContent} editor={editor} />
			<PortfolioSkills2 content={skillsContent} editor={editor} />
			<PortfolioFooter2 content={footerContent} editor={editor} />
		</div>
	);
}
