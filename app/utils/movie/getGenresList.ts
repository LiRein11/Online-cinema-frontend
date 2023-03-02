export const getGenresListEach = (
	index: number,
	length: number,
	name: string
) => (index + 1 === length ? name : name + ', ') // Запятая не ставится, если это идет последний элемент

interface IArrayItem {
	name: string
}

export const getGenresList = (array: IArrayItem[]) =>
	array.map((i) => i.name).join(', ')
