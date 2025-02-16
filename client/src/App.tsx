import React from "react";
import FullPageComponent from "@/components/ScrollPage.tsx";
import { DeviceProvider } from "@/hooks/DeviceContext.tsx";

function App() {
	return (
		<DeviceProvider>
			<FullPageComponent />
		</DeviceProvider>
	);
}

export default App;
