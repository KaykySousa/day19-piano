import DeveloperInfo from "./components/DeveloperInfo"
import Piano from "./components/Piano"

export default function App() {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center">
			<Piano />
			<DeveloperInfo />
		</div>
	)
}
