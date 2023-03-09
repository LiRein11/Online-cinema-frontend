import cn from 'classnames'
import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import MaterialIcon from '../MaterialIcon'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef } = useVideo()

	const { user } = useAuth()
	return (
		<div className={cn(styles.wrapper, { 'h-96': !user })}>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=8`} // Чтобы видео начиналось с 0.8 мс
						preload="metadata"
					/>
					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={styles.progressBar}
						/>
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>
							<button
								onClick={actions.toggleVideo}
								className={styles.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>
							<button onClick={actions.forward}>
								<MaterialIcon name="MdUpdate" />
							</button>
							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>
						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	) // Высота 96, только если юзер не авторизован
}

//quality buttons
//kmoskwiak.github.io/videojs-resolution-switcher/
//https://stackoverflow.com/questions/38626993/change-video-quality-with-sources-pointing-to-different-quality-versions

export default VideoPlayer
