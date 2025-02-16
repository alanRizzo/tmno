import type React from "react";
import { useDevice } from "@/hooks/DeviceContext";

interface IconLinkProps {
	href: string;
	label: string;
	Icon: React.ComponentType<{ className?: string }>;
}

const IconLink = ({ href, label, Icon }: IconLinkProps) => {
	const { isMobile } = useDevice();

	return (
		<div className="relative flex items-center justify-center group">
			{!isMobile && (
				<div className="absolute right-full mr-2 px-2 py-1 bg-white text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
					{label}
				</div>
			)}
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				title={label}
				aria-label={label}
				className="inline-flex items-center justify-center"
			>
				<Icon className="text-3xl" />
			</a>
		</div>
	);
};

export default IconLink;
