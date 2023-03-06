import { ISlide } from '@/components/ui/slider/slider.interface'

import { IGalleryItem } from './../../ui/gallery/gallery.interface'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
