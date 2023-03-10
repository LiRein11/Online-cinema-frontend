import React, { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collections.module.scss'
import { ICollection } from './collections.interface'
import CollectionItem from './CollectionItem'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((c) => (
					<CollectionItem key={c._id} collection={c} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
