import { LuMapPinHouse, LuInstagram } from "react-icons/lu";
import IconLink from "./ui/IconLink";
import { useDevice } from "@/hooks/DeviceContext.tsx";

export default function HeaderSection() {
	const { isMobile } = useDevice();

	return (
		<div className="relative h-screen">
			<div className="flex justify-center items-center h-full">
				<img
					src="/logo.svg"
					alt="TMNO"
					className="w-80 h-80 md:w-96 md:h-96 invert"
				/>
			</div>

			{isMobile ? (
				// Mobile
				<>
					<div className="absolute top-10 left-10">
						<IconLink
							href="https://www.instagram.com/tumadrenosodia/"
							label="Instagram"
							Icon={LuInstagram}
						/>
					</div>
					<div className="absolute top-10 right-10">
						<IconLink
							href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
							label="Google Maps"
							Icon={LuMapPinHouse}
						/>
					</div>
				</>
			) : (
				// Desktop
				<div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
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
			)}
		</div>
	);
}
