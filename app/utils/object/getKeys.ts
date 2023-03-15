export const getKeys = <T extends Object>(obj: T) =>
	Object.keys(obj) as Array<keyof T>
