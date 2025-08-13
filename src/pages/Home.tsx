import { useState } from 'react'
import GameCard from '../components/GameCard'
import { Filter, ViewGrid, List } from 'iconoir-react'

export default function Home() {
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	// 샘플 게임 데이터
	const games = [
		{
			title: "DK 온라인",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp",
			status: "installed" as const,
			lastPlayed: "2시간 전",
			size: "70.2 GB",
			tags: ["MMORPG", "PC"],
			description: "판타지 세계에서 펼쳐지는 대규모 모험 MMORPG"
		},
		{
			title: "프리스톤테일",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_pt.webp",
			status: "installed" as const,
			progress: 65,
			size: "45.8 GB",
			tags: ["MMORPG", "PC"],
			description: "클래식 한국 MMORPG의 전설적인 게임"
		},
		{
			title: "콜오브카오스",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_cc.webp",
			status: "installed" as const,
			lastPlayed: "1일 전",
			size: "120.5 GB",
			tags: ["MMORPG", "PC"],
			description: "치열한 전투와 전술적 게임플레이가 특징인 TPS"
		},
		{
			title: "라그하임",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_lh.webp",
			status: "not_installed" as const,
			size: "95.2 GB",
			tags: ["MMORPG", "PC"],
			description: "신화적 세계관과 다양한 직업군이 매력적인 MMORPG"
		},
		{
			title: "에이스온라인",
			image: "	https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ao.webp",
			status: "installed" as const,
			lastPlayed: "30분 전",
			size: "1.2 GB",
			tags: ["MMORPG", "PC"],
			description: "실감나는 공중전투와 비행 시뮬레이션 게임"
		},
		{
			title: "출조낚시왕",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_fh.webp",
			status: "installed" as const,
			lastPlayed: "3일 전",
			size: "250 MB",
			tags: ["SPORTS", "PC"],
			description: "현실적인 낚시 체험을 제공하는 스포츠 시뮬레이션"
		},
		{
			title: "스키드러쉬",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_sr.webp",
			status: "installed" as const,
			lastPlayed: "3일 전",
			size: "250 MB",
			tags: ["RACING RPG", "PC"],
			description: "아케이드 스타일의 익스트림 스키 레이싱 게임"
		},
		{
			title: "능력자X",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_nx.webp",
			status: "installed" as const,
			lastPlayed: "3일 전",
			size: "250 MB",
			tags: ["TPS", "PC"],
			description: "초능력을 활용한 액션 RPG 어드벤처"
		},
		{
			title: "건즈",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz.webp",
			status: "installed" as const,
			lastPlayed: "3일 전",
			size: "250 MB",
			tags: ["TPS", "PC"],
			description: "스타일리쉬한 액션과 K-스타일이 인상적인 TPS"
		},
		{
			title: "건즈2",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz2.webp",
			status: "not_installed" as const,
			size: "250 MB",
			tags: ["TPS", "PC"],
			description: "진화된 K-스타일 액션의 건즈 시리즈 후속작"
		},
		{
			title: "아스다 글로벌",
			image: "	https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ag.webp",
			status: "not_installed" as const,
			size: "250 MB",
			tags: ["MMORPG", "PC"],
			description: "글로벌 서비스로 확장된 아스다 스토리의 새로운 모험"
		},
		{
			title: "아스다 스토리",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ad_1.webp",
			status: "not_installed" as const,
			size: "250 MB",
			tags: ["MMORPG", "PC"],
			description: "귀여운 캐릭터와 함께하는 캐주얼 MMORPG"
		},
		{
			title: "마이크로 볼츠 : 리차지드",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_mv.webp",
			status: "not_installed" as const,
			size: "250 MB",
			tags: ["TPS", "PC"],
			description: "미니어처 로봇들의 치열한 팀 배틀 TPS"
		},
		{
			title: "킹스레이드",
			image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_kr_1.webp",
			status: "not_installed" as const,
			size: "250 MB",
			tags: ["RPG", "PC"],
			description: "영웅들과 함께하는 판타지 어드벤처 RPG"
		},
	]

	return (
		<div className="h-full flex flex-col p-6">
			{/* 헤더 */}
			<div className="flex items-center justify-between mb-6">
				<div>
					<h1 className="text-3xl font-bold text-neutral-100">라이브러리</h1>
					<p className="text-neutral-400 mt-1">{games.filter(g => g.status === 'installed').length}개 게임 설치됨</p>
				</div>
				
				<div className="flex items-center gap-3">
					{/* 필터 */}
					<button className="flex items-center gap-2 px-3 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
						<Filter className="w-4 h-4" />
						필터
					</button>
					
					{/* 뷰 모드 */}
					<div className="flex bg-neutral-700 rounded-lg p-1">
						<button 
							onClick={() => setViewMode('grid')}
							className={`p-2 rounded transition-colors ${
								viewMode === 'grid' 
									? 'bg-neutral-600 text-neutral-200' 
									: 'text-neutral-400 hover:text-neutral-200'
							}`}
						>
							<ViewGrid className="w-4 h-4" />
						</button>
						<button 
							onClick={() => setViewMode('list')}
							className={`p-2 rounded transition-colors ${
								viewMode === 'list' 
									? 'bg-neutral-600 text-neutral-200' 
									: 'text-neutral-400 hover:text-neutral-200'
							}`}
						>
							<List className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>

			{/* 게임 리스트/그리드 */}
			<div className="flex-1 overflow-y-auto">
				{viewMode === 'grid' ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{games.map((game, index) => (
							<GameCard key={index} {...game} viewMode="grid" />
						))}
					</div>
				) : (
					<div className="space-y-2">
						{games.map((game, index) => (
							<GameCard key={index} {...game} viewMode="list" />
						))}
					</div>
				)}
			</div>
		</div>
	)
}


