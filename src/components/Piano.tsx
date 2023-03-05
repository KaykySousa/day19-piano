import { useEffect, useState } from "react"
import Key from "./Key"

interface IKey {
	playKey: string
	color: "white" | "black"
}

const keys: IKey[] = [
	{
		playKey: "a",
		color: "white",
	},
	{
		playKey: "w",
		color: "black",
	},
	{
		playKey: "s",
		color: "white",
	},
	{
		playKey: "e",
		color: "black",
	},
	{
		playKey: "d",
		color: "white",
	},
	{
		playKey: "f",
		color: "white",
	},
	{
		playKey: "t",
		color: "black",
	},
	{
		playKey: "g",
		color: "white",
	},
	{
		playKey: "y",
		color: "black",
	},
	{
		playKey: "h",
		color: "white",
	},
	{
		playKey: "u",
		color: "black",
	},
	{
		playKey: "j",
		color: "white",
	},
	{
		playKey: "k",
		color: "white",
	},
	{
		playKey: "o",
		color: "black",
	},
	{
		playKey: "l",
		color: "white",
	},
	{
		playKey: "p",
		color: "black",
	},
	{
		playKey: ";",
		color: "white",
	},
]

export default function Piano() {
	const [activeKey, setActiveKey] = useState("")

	function onKeyDown(e: KeyboardEvent) {
		const allowedKeys = keys.map((key) => key.playKey)

		if (allowedKeys.indexOf(e.key) === -1) return

		setActiveKey(e.key)

		playAudio(`/audios/${e.key}.wav`)
	}

	function onKeyUp(e: KeyboardEvent) {
		setActiveKey("")
	}

	function playAudio(src: string) {
		const audio = new Audio()
		audio.src = src
		audio.play()
	}

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown)
		document.addEventListener("keyup", onKeyUp)

		return () => {
			document.removeEventListener("keydown", onKeyDown)
			document.removeEventListener("keyup", onKeyUp)
		}
	}, [])

	return (
		<div className="flex bg-neutral-800 p-6 gap-x-[2px] rounded-md">
			{keys.map(({ playKey, color }, index) => (
				<Key
					key={index}
					playKey={playKey}
					color={color}
					active={activeKey === playKey ? true : false}
					onClick={() => {
						playAudio(`/audios/${playKey}.wav`)
					}}
				/>
			))}
		</div>
	)
}
