import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	slug: string
	name: string
	photo: string
	countMovies: number
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	slug: string
	parameters: IParameters
	rating: number
	videoUrl: string
	countOpened: number
	genres: IGenre[]
	actors: IActor[]
}
