import { Minus, MultiWindow, Maximize, Xmark } from 'iconoir-react'
import { useEffect, useState } from 'react'

/**
 * TitleBar
 * Electron 프레임리스 창의 커스텀 타이틀바 컴포넌트
 */
export default function TitleBar() {
	const [isMaximized, setIsMaximized] = useState(false)

	useEffect(() => {
		(async () => setIsMaximized(await window.windowControls.isMaximized()))()
		window.windowControls.onMaximize(() => setIsMaximized(true))
		window.windowControls.onUnmaximize(() => setIsMaximized(false))
	}, [])

	return (
		<div id="customTitleBar" className="fixed w-full top-0 left-0 right-0 flex items-center justify-between px-4 h-12 bg-neutral-900 border-b border-neutral-700 text-neutral-50 select-none z-50">
			<div className="flex items-center gap-3">
				<div className="w-8 h-8 bg-cprimary-600 rounded-lg flex items-center justify-center">
					<span className="text-white font-bold text-sm">GL</span>
				</div>
				<span className="text-sm font-medium">MS소프트 게임 런처</span>
			</div>
			<div className="window-controls flex items-center gap-1">
				<button className="px-1 py-1 hover:bg-neutral-800 rounded" onClick={() => window.windowControls.minimize()}>
					<Minus />
				</button>
				<button className="px-1 py-1 hover:bg-neutral-800 rounded" onClick={() => window.windowControls.toggleMaximize()}>
					{isMaximized ? <MultiWindow strokeWidth={1} width={20} height={20} /> : <Maximize strokeWidth={1} width={20} height={20} />}
				</button>
				<button className="px-1 py-1 hover:bg-red-500/80 rounded" onClick={() => window.windowControls.close()}>
					<Xmark />
				</button>
			</div>
		</div>
	)
}


