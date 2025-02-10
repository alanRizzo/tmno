import { useMemo } from "react";
import { LuMapPinHouse, LuInstagram } from "react-icons/lu";
import { shuffleArray } from "../utils/shuffle";
import { artists } from "../data/artists";
import ArtistCard from "./ui/ArtistCard";
import IconLink from "./ui/IconLink";

const ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
	}),
};

export default function ArtistSection() {
	const shuffledArtists = useMemo(() => shuffleArray(artists), []);

	return (
		<section
			id="artists"
			className="mx-6 py-10 bg-background/60 rounded-lg relative"
		>
			<div className="slider">
				<div className="list">
					{shuffledArtists.map((artist, index) => (
						<div
							key={artist.name}
							className="item"
							style={{ "--position": index + 1 }}
						>
							<ArtistCard
								artist={artist}
								index={index}
								cardVariants={ANIMATION_VARIANTS}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="fixed top-1/2 right-4 md:right-10 transform -translate-y-1/2 flex flex-col gap-4">
				<IconLink
					href="https://www.instagram.com/tumadrenosodia/"
					label="Instagram"
					Icon={LuInstagram}
				/>
				<IconLink
					href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
					label="Google Maps"
					Icon={LuMapPinHouse}
				/>
			</div>
		</section>
	);
}
