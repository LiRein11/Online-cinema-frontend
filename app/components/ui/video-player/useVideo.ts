import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from './video.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	/* time */
	useEffect(() => {
		if (videoRef.current?.duration) setVideoTime(videoRef.current?.duration)
	}, [videoRef.current?.duration])

	/* Play */
	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	/* forward 10 sec */
	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}

	/* revert 10 sec */
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	/* fullscreen */
	const fullScreen = () => {
		const video = videoRef.current

		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		} // Для всех браузеров
	}

	/* progress bar */
	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100) // Процент просмотра видео
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress) // Отписка от eventListener
		}
	}, [videoTime]) // Отслеживание изменения таймкода видео

	/* hotkeys - ' ' 'f' '→' '←' */
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight': {
					forward()
					break
				}
				case 'ArrowLeft': {
					revert()
					break
				}
				case ' ': {
					e.preventDefault() // Выключение всех кнопок (чтобы пробел сработал адекватно)
					toggleVideo()
					break
				}
				case 'f': {
					fullScreen()
					break
				}

				default: {
					return
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			actions: { fullScreen, revert, forward, toggleVideo },
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[isPlaying, currentTime, progress, videoTime, toggleVideo]
	)
}
