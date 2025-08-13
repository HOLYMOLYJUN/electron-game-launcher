import { Star, Download, Heart, Search } from 'iconoir-react'

export default function Store() {
  const featuredGames = [
    {
      title: "DK 온라인",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp",
      price: "무료",
      rating: 4.2,
      tags: ["MMORPG", "PC"],
      description: "판타지 세계에서 펼쳐지는 대규모 모험 MMORPG"
    },
    {
      title: "프리스톤테일",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_pt.webp",
      price: "무료",
      rating: 4.5,
      tags: ["MMORPG", "PC"],
      description: "클래식 한국 MMORPG의 전설적인 게임"
    },
    {
      title: "콜오브카오스",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_cc.webp",
      price: "무료",
      rating: 4.1,
      tags: ["MMORPG", "PC"],
      description: "치열한 전투와 전술적 게임플레이가 특징인 MMORPG"
    },
    {
      title: "라그하임",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_lh.webp",
      price: "무료",
      rating: 4.3,
      tags: ["MMORPG", "PC"],
      description: "신화적 세계관과 다양한 직업군이 매력적인 MMORPG"
    },
    {
      title: "에이스온라인",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ao.webp",
      price: "무료",
      rating: 4.0,
      tags: ["MMORPG", "PC"],
      description: "실감나는 공중전투와 비행 시뮬레이션 게임"
    },
    {
      title: "건즈",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz.webp",
      price: "무료",
      rating: 4.4,
      tags: ["TPS", "PC"],
      description: "스타일리쉬한 액션과 K-스타일이 인상적인 TPS"
    }
  ]

  const newReleases = [
    {
      title: "건즈2",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz2.webp",
      price: "무료",
      rating: 4.2,
      tags: ["TPS", "PC"],
      description: "진화된 K-스타일 액션의 건즈 시리즈 후속작",
      isNew: true
    },
    {
      title: "마이크로 볼츠 : 리차지드",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_mv.webp",
      price: "무료",
      rating: 4.1,
      tags: ["TPS", "PC"],
      description: "미니어처 로봇들의 치열한 팀 배틀 TPS",
      isNew: true
    },
    {
      title: "킹스레이드",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_kr_1.webp",
      price: "무료",
      rating: 4.3,
      tags: ["RPG", "PC"],
      description: "영웅들과 함께하는 판타지 어드벤처 RPG",
      isNew: true
    }
  ]

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-100 mb-2">스토어</h1>
          <p className="text-neutral-400">최신 게임을 다운로드하고 플레이하세요</p>
        </div>
        
        {/* 검색바 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input 
            type="text" 
            placeholder="게임 검색..."
            className="bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-4 py-2 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-cprimary-500 transition-colors w-80"
          />
        </div>
      </div>

      {/* featured 배너 */}
      <div className="mb-8">
        <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-r from-cprimary-900 to-cprimary-700">
          <img 
            src="https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp"
            alt="Featured Game"
            className="w-full h-full object-cover opacity-100"
          />
          <div className='absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-700 opacity-50'></div>
          <div className="absolute inset-0 flex items-center p-8 ">
            <div className="max-w-md">
              <div className="inline-block bg-cprimary-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                인기 게임
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">DK 온라인</h2>
              <p className="text-neutral-200 mb-6">
                판타지 세계에서 펼쳐지는 대규모 모험 MMORPG. 
                수많은 유저들과 함께 거대한 세계를 탐험하세요.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-cprimary-600 hover:bg-cprimary-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer  transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  무료 플레이
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10  cursor-pointer transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  위시리스트
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 추천 게임 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-neutral-100 mb-4">추천 게임</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <div key={index} className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-neutral-900/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-neutral-300" />
                </button>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-lg text-neutral-100 mb-2">{game.title}</h4>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-sm text-neutral-300">{game.rating}</span>
                  </div>
                  <div className="flex gap-1">
                    {game.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-neutral-400 mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cprimary-400 text-lg">{game.price}</span>
                  <button className="w-[100px] flex items-center justify-center gap-2 bg-cprimary-600 hover:bg-cprimary-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    설치
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 신작 게임 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-neutral-100 mb-4">신작 게임</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newReleases.map((game, index) => (
            <div key={index} className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors group relative">
              {game.isNew && (
                <div className="absolute top-3 left-3 bg-cprimary-600 text-white text-xs px-2 py-1 rounded-full z-10">
                  NEW
                </div>
              )}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-neutral-900/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-neutral-300" />
                </button>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-lg text-neutral-100 mb-2">{game.title}</h4>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-sm text-neutral-300">{game.rating}</span>
                  </div>
                  <div className="flex gap-1">
                    {game.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-neutral-400 mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cprimary-400 text-lg">{game.price}</span>
                  <button className="w-[100px] flex items-center justify-center gap-2 bg-cprimary-600 hover:bg-cprimary-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    설치
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
