import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

// Define el contexto
const DeviceContext = createContext<{ isMobile: boolean }>({ isMobile: false });

// Crea un provider
export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_BREAKPOINT,
	);

	useEffect(() => {
		const handleResize = () =>
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<DeviceContext.Provider value={{ isMobile }}>
			{children}
		</DeviceContext.Provider>
	);
};

// Hook para consumir el contexto
export const useDevice = () => useContext(DeviceContext);
