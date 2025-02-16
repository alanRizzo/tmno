import ArtistCardSection from "@/components/ArtistCardSection";
import HeaderSection from "@/components/HeaderSection";
import { artists } from "@/data/artists";
import { shuffleArray } from "@/utils/shuffle";
import type React from "react";
import { useMemo } from "react";
import MegaScroll from "react-mega-scroll";

const BackgroundTexture = () => (
	<div className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-30 bg-[url('/texture.jpg')]" />
);

const Section = ({ children }): React.JSX.Element => (
	<div className="relative flex flex-col h-screen w-screen bg-black">
		<BackgroundTexture />
		<div className="relative z-10">{children}</div>
	</div>
);

export default function FullPageComponent() {
	const shuffledArtists = useMemo(() => shuffleArray(artists), []);

	return (
		<div className="fixed top-0 left-0 h-screen w-screen">
			<MegaScroll>
				<Section>
					<HeaderSection />
				</Section>
				{shuffledArtists.map((artist) => (
					<Section key={artist.id}>
						<ArtistCardSection artist={artist} />
					</Section>
				))}
			</MegaScroll>
		</div>
	);
}
