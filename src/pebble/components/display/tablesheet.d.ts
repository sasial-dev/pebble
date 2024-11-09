import Vide from "@rbxts/vide"

interface TablesheetProps<T> {
	size?: UDim2 | (() => UDim2),

	/**
	 * the size of each column in pixels
	*/
	column_sizes: () => number[],

	column: () => T[][],
	max_characters_per_column?: number,

	on_click: (column: number, row: number) => void,
	on_click2: (column: number, row: number) => void,
	read_value: (column: number, row: number) => string,

	below: Vide.Node[],
}

declare function tablesheet<T>(props: TablesheetProps<T>): Vide.Node

export = tablesheet
