import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { RatingService } from '@/services/rating.service'

import { toastError } from '@/utils/toast-error'
import { useAuth } from '@/hooks/useAuth'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const {user} = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess: ({ data }) => {
				setRating(data)
			},
			onError: (error) => {
				toastError(error, 'Get rating')
			},
			enabled: !!movieId && !!user, // Срабатывай только когда queryId, иначе может срабатывать когда undefined (а должно быть точно не undefined)
		}
	) // refetch чтобы после запроса обновился рейтинг на новый

	const { mutateAsync } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError: (error) => {
				toastError(error, 'Rate movie')
			},
			onSuccess() {
				toastr.success('Rate movie', 'You have successful rated')

				setIsSended(true)
				refetch()
				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}
	return { handleClick, rating, isSended }
}
