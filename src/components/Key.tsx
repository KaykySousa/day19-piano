import { ButtonProps } from "../types/components"

interface KeyProps extends ButtonProps {
	color?: "black" | "white"
	playKey: string
	active?: boolean
}

export default function Key({
	color = "white",
	active = false,
	playKey,
	className,
	...props
}: KeyProps) {
	const themes = {
		white: `h-60 active:h-[14.75rem] active:bg-neutral-100 w-16 bg-white rounded-b-md text-black ${
			active ? "h-[14.75rem] bg-neutral-100" : ""
		}`,
		black: `h-36 active:h-[8.75rem] active:bg-neutral-900 w-11 bg-neutral-800 rounded-b -mr-[1.4375rem] -ml-[1.4375rem] z-10 text-white  ${
			active ? "h-[8.75rem] bg-neutral-900" : ""
		}`,
	}

	return (
		<button
			className={`py-3 text-opacity-30 font-semibold relative outline-0 flex justify-center items-end after:content-[attr(data-play-key)] after:uppercase ${themes[color]} ${className}`}
			data-play-key={playKey}
			{...props}
		/>
	)
}
