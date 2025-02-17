import FullPageComponent from "@/components/ScrollPage.tsx";
import { DeviceProvider } from "@/hooks/DeviceContext.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";

function App() {
	return (
		<DeviceProvider>
			<SpeedInsights />
			<FullPageComponent />
		</DeviceProvider>
	);
}

export default App;
