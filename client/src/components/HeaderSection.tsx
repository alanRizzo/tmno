import { LuMapPinHouse, LuInstagram } from "react-icons/lu";
import IconLink from "./ui/IconLink";
import { useDevice } from "@/hooks/DeviceContext.tsx";
import { motion } from "framer-motion";

export default function HeaderSection() {
	const { isMobile } = useDevice();

	return (
		<div className="relative h-screen">
			<div className="flex justify-center items-center h-full">
				<motion.div
					className="relative"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<img
						src="/logo.svg"
						alt="TMNO"
						className="w-80 h-80 md:w-96 md:h-96 invert glitch"
					/>
					{/* Clones para el glitch */}
					<img src="/logo.svg" alt="glitch" className="glitch-img glitch-red" />
					<img
						src="/logo.svg"
						alt="glitch"
						className="glitch-img glitch-blue"
					/>
				</motion.div>
			</div>

			{isMobile ? (
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
