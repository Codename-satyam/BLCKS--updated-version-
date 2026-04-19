import PortfolioNavbar1 from "../Navbar/Navbar1";
import PortfolioHero1 from "../Hero/Hero1";
import PortfolioProjects1 from "../Projects/Projects1";
import PortfolioSkills1 from "../Skills/Skills1";
import PortfolioFooter1 from "../Footer/Footer1";

export default function PortfolioTemplate1({ content = {}, editor }) {
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
			<PortfolioHero1 content={heroContent} editor={editor} />
			<PortfolioProjects1 content={projectsContent} editor={editor} />
			<PortfolioSkills1 content={skillsContent} editor={editor} />
			<PortfolioFooter1 content={footerContent} editor={editor} />
		</div>
	);
}
