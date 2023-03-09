import dynamic from 'next/dynamic'
import { FC } from 'react'

import FavoriteMovies from './FavoriteMovies/FavoriteMovies'
import PopularMovies from './PopularMovies'

const DynamicFavoriteMovies = dynamic(()=> import('./FavoriteMovies/FavoriteMovies'), {ssr:false})

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
