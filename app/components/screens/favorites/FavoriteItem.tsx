import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={movie._id} />}
			<Link className={styles.item} href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.bigPoster}
					alt={movie.title}
					layout="fill"
					draggable={false}
					priority
				/>
				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
