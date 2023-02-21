export const getGenresListEach = (
	index: number,
	length: number,
	name: string
) => (index + 1 === length ? name : name + ', ') // Запятая не ставится, если это идет последний элемент
