import Image from 'next/image'
import React, { FC } from 'react'

import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} layout="fill" draggable={false} />
}

export default CollectionImage
