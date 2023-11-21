import React from 'react'
import { UiButton, UiAddRegionDrawer } from 'src/components/ui'
import { TItemData } from 'src/store/shared/shared.types'
import { RegionsTable } from './RegionsTable'
import { Search } from 'src/components/shared'
import { Import } from 'src/utils/Import'

const Regions: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
	const [editData, setEditData] = React.useState<TItemData | undefined>(
		undefined
	)

	const handleClickAdd = () => {
		setEditData(undefined)
		setIsDrawerOpen(true)
	}

	return (
		<div className='flex flex-col gap-y-5 bg-white m-5 p-5 rounded-2xl'>
			<div className='flex items-center justify-between'>
				<Search />
				<div className='flex items-center gap-10'>
					<Import url='region' />
					<UiButton type='primary' onClick={handleClickAdd}>
						Добавить
					</UiButton>
				</div>
				<UiAddRegionDrawer
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
					editData={editData}
					setEditData={setEditData}
				/>
			</div>
			<RegionsTable
				setEditData={setEditData}
				setIsDrawerOpen={setIsDrawerOpen}
			/>
		</div>
	)
}

export { Regions }
