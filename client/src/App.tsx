import FullPageComponent from "@/components/ScrollPage.tsx";
import { DeviceProvider } from "@/hooks/DeviceContext.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

function App() {
	return (
		<>
			<DeviceProvider>
				<FullPageComponent />
			</DeviceProvider>
			<Analytics />
			<SpeedInsights />
		</>
	);
}

export default App;
