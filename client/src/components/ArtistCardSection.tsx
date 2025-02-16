import { LuInstagram } from "react-icons/lu";
import type { Artist } from "@/data/artists";

interface ArtistCardProps {
	artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
	return (
		<div className="flex items-center justify-center md:min-h-screen p-4">
			<div className="flex flex-col md:flex-row border border-gray-300 p-6 shadow-lg bg-transparent max-w-4xl w-full">
				<img
					src={artist.image}
					alt={`Artist ${artist.name}`}
					className="w-full md:w-1/2 h-auto object-cover md:mr-4 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 pr-0 md:pr-4 filter grayscale hover:grayscale-0 transition-all duration-300"
				/>
				<div className="md:w-1/2 flex flex-col justify-between p-4">
					<div>
						<h3 className="text-2xl font-bold ">{artist.name.toUpperCase()}</h3>
						<p className="text-base mt-3">{artist.bio}</p>
					</div>
					<div className="flex flex-nowrap justify-between border-t border-gray-300 pt-4 mt-4">
						<div className="flex flex-wrap gap-2">
							{artist.styles.map((style) => (
								<span
									key={style}
									className="text-sm md:text-base uppercase px-3 py-1"
								>
									{style}
								</span>
							))}
						</div>
						<a
							href={artist.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Visit ${artist.name}'s Instagram`}
						>
							<LuInstagram className="text-2xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
