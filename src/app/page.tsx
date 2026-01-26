import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
// import { AcademyBanner } from "@/components/academy-banner";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Languages } from "@/components/languages";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
		<div className="min-h-screen bg-white">
			<Header />
			<main>
				<Hero />
				{/* <AcademyBanner /> */}
				<About />
				<HowItWorks />
				<Features />
				<Languages />
				<CTA />
			</main>
			<Footer />
		</div>
  );
}
