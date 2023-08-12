import { useRef } from "react";

import DisplaySection from "./components/display-section";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/nav";
import SoundSection from "./components/sound-section";
import WebGIViewer from "./components/webgi-viewer";
import Loader from "./components/loader";

function App() {
	const webgiViewerRef = useRef(null);
	const contentRef = useRef(null);

	const handlePreview = () => {
		webgiViewerRef.current.triggerPreview();
	};

	return (
		<div className="App">
			<Loader />
			<div id="content" ref={contentRef}>
				<Navbar />
				<Jumbotron />
				<SoundSection />
				<DisplaySection triggerPreview={handlePreview} />
			</div>
			<WebGIViewer ref={webgiViewerRef} contentRef={contentRef} />
		</div>
	);
}

export default App;
