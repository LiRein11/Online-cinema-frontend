import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/luto.svg'

const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10 flex justify-center" href="/">
			<Image
				src={logoImage}
				width={60}
				height={40}
				alt="Online cinema"
				draggable={false}
			/>
      <div className='mt-2 pl-2 text-xl text-white'>Online Cinema</div>
		</Link>
	)
}

export default Logo
