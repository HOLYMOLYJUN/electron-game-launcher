import { User, Trophy, Clock, Gamepad, Star, Settings, Medal } from 'iconoir-react'

export default function Profile() {
  const stats = [
    { label: "총 플레이 시간", value: "324시간", icon: Clock, color: "text-cprimary-500" },
    { label: "보유 게임", value: "14개", icon: Gamepad, color: "text-blue-500" },
    { label: "획득 업적", value: "156개", icon: Trophy, color: "text-yellow-500" },
    { label: "런처 레벨", value: "27", icon: Star, color: "text-purple-500" }
  ]

  const recentGames = [
    { 
      title: "DK 온라인", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp",
      hours: "89.2시간", 
      lastPlayed: "2시간 전",
      tags: ["MMORPG", "PC"]
    },
    { 
      title: "프리스톤테일", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_pt.webp",
      hours: "156.7시간", 
      lastPlayed: "어제",
      tags: ["MMORPG", "PC"]
    },
    { 
      title: "건즈", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz.webp",
      hours: "67.1시간", 
      lastPlayed: "3일 전",
      tags: ["TPS", "PC"]
    },
    { 
      title: "에이스온라인", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ao.webp",
      hours: "11.3시간", 
      lastPlayed: "1주일 전",
      tags: ["MMORPG", "PC"]
    }
  ]

  const achievements = [
    { 
      title: "용사의 시작", 
      description: "DK 온라인에서 레벨 10에 도달하세요", 
      game: "DK 온라인", 
      rarity: "일반",
      date: "2일 전"
    },
    { 
      title: "전설의 기사", 
      description: "프리스톤테일에서 100시간 플레이하세요", 
      game: "프리스톤테일", 
      rarity: "희귀",
      date: "1주일 전"
    },
    { 
      title: "K-스타일 마스터", 
      description: "건즈에서 연속 10킬을 달성하세요", 
      game: "건즈", 
      rarity: "전설",
      date: "2주일 전"
    },
    { 
      title: "에이스 파일럿", 
      description: "에이스온라인에서 첫 승리를 거두세요", 
      game: "에이스온라인", 
      rarity: "일반",
      date: "3주일 전"
    }
  ]

  const favoriteGames = [
    { 
      title: "프리스톤테일", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_pt.webp",
      hours: "156.7시간"
    },
    { 
      title: "DK 온라인", 
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp",
      hours: "89.2시간"
    },
  ]

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      {/* 프로필 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-cprimary-600 to-cprimary-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-neutral-900"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-neutral-100">MasangGamer</h1>
            <p className="text-neutral-400 mb-2">마상소프트 게임 마스터</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-green-400 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                온라인
              </span>
              <span className="text-neutral-400">가입일: 2023년 1월</span>
              <span className="text-neutral-400">마지막 접속: 방금 전</span>
            </div>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
          <Settings className="w-4 h-4" />
          프로필 설정
        </button>
      </div>

      {/* 통계 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:border-neutral-600 transition-colors text-center group">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-neutral-700 group-hover:bg-neutral-600 rounded-full flex items-center justify-center transition-colors">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-neutral-100 mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* 최근 플레이한 게임 */}
        <div className="lg:col-span-2 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-cprimary-500" />
            최근 플레이한 게임
          </h3>
          <div className="space-y-4">
            {recentGames.map((game, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-700 transition-colors">
                <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-medium text-neutral-100">{game.title}</div>
                    <div className="flex gap-1">
                      {game.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-neutral-400">{game.hours} 플레이</div>
                </div>
                <div className="text-sm text-neutral-400">{game.lastPlayed}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 즐겨찾는 게임 */}
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center gap-2">
            <Medal className="w-5 h-5 text-yellow-500" />
            즐겨찾는 게임
          </h3>
          <div className="space-y-4">
            {favoriteGames.map((game, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-900/80 text-white text-xs px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                </div>
                <div className="font-medium text-neutral-100 text-sm mb-1">{game.title}</div>
                <div className="text-xs text-neutral-400">{game.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 최근 획득 업적 */}
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            최근 획득 업적
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-600">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  achievement.rarity === '전설' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
                  achievement.rarity === '희귀' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                  'bg-gradient-to-r from-neutral-600 to-neutral-500'
                }`}>
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-neutral-100 mb-1">{achievement.title}</div>
                  <div className="text-sm text-neutral-400 mb-2">{achievement.description}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-neutral-500">{achievement.game}</span>
                      <span className={`px-2 py-1 rounded text-white ${
                        achievement.rarity === '전설' ? 'bg-gradient-to-r from-yellow-600 to-orange-600' :
                        achievement.rarity === '희귀' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        'bg-neutral-600'
                      }`}>
                        {achievement.rarity}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">{achievement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
