import { Pause, Play, Xmark, Check, Folder, Settings } from 'iconoir-react'

export default function Downloads() {
  const downloads = [
    {
      title: "프리스톤테일",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_pt.webp",
      progress: 65,
      speed: "12.5 MB/s",
      remaining: "15분",
      size: "45.8 GB",
      status: "downloading" as const,
      tags: ["MMORPG", "PC"]
    },
    {
      title: "DK 온라인",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_dk.webp",
      progress: 100,
      size: "70.2 GB",
      status: "completed" as const,
      tags: ["MMORPG", "PC"]
    },
    {
      title: "콜오브카오스",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_cc.webp",
      progress: 25,
      speed: "0 B/s",
      remaining: "일시정지됨",
      size: "120.5 GB",
      status: "paused" as const,
      tags: ["MMORPG", "PC"]
    },
    {
      title: "건즈2",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_gz2.webp",
      progress: 10,
      speed: "8.2 MB/s",
      remaining: "25분",
      size: "3.2 GB",
      status: "downloading" as const,
      tags: ["TPS", "PC"]
    },
    {
      title: "에이스온라인",
      image: "https://web-files-tokyo-cdn.masangsoft.com/public/COMPANY/images/gameBg_ao.webp",
      progress: 0,
      speed: "0 B/s",
      remaining: "대기 중",
      size: "1.2 GB",
      status: "queued" as const,
      tags: ["MMORPG", "PC"]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'downloading':
        return <Pause className="w-4 h-4" />
      case 'paused':
        return <Play className="w-4 h-4" />
      case 'completed':
        return <Check className="w-4 h-4" />
      case 'queued':
        return <Play className="w-4 h-4" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'downloading':
        return 'bg-cprimary-600 hover:bg-cprimary-700'
      case 'paused':
        return 'bg-yellow-600 hover:bg-yellow-700'
      case 'completed':
        return 'bg-green-600 cursor-default'
      case 'queued':
        return 'bg-neutral-600 hover:bg-neutral-500'
      default:
        return 'bg-neutral-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'downloading':
        return '다운로드 중'
      case 'paused':
        return '일시정지'
      case 'completed':
        return '완료'
      case 'queued':
        return '대기 중'
      default:
        return '알 수 없음'
    }
  }

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-100">다운로드</h1>
          <p className="text-neutral-400 mt-1">
            총 {downloads.length}개 항목 | {downloads.filter(d => d.status === 'downloading').length}개 다운로드 중 | {downloads.filter(d => d.status === 'completed').length}개 완료
          </p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
            <Settings className="w-4 h-4" />
            설정
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
            <Pause className="w-4 h-4" />
            모두 일시정지
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-cprimary-600 hover:bg-cprimary-700 rounded-lg transition-colors">
            <Play className="w-4 h-4" />
            모두 시작
          </button>
        </div>
      </div>
      {/* 다운로드 목록 */}
      <div className="space-y-3">
        {downloads.map((download, index) => (
          <div key={index} className="bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:border-neutral-600 transition-colors">
            <div className="flex items-center gap-4">
              {/* 게임 이미지 */}
              <div className="relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={download.image} 
                  alt={download.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 게임 정보 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg text-neutral-100">{download.title}</h3>
                  {/* 태그 */}
                  <div className="flex gap-1">
                    {download.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span>크기: {download.size}</span>
                  {download.speed && download.speed !== "0 B/s" && <span>속도: {download.speed}</span>}
                  {download.remaining && <span>{download.remaining}</span>}
                </div>
              </div>
              
              {/* 진행률 */}
              <div className="flex-1 max-w-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-300">{download.progress}%</span>
                  <span className="text-xs text-neutral-400">
                    {getStatusText(download.status)}
                  </span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      download.status === 'completed' ? 'bg-green-600' :
                      download.status === 'paused' ? 'bg-yellow-600' :
                      download.status === 'queued' ? 'bg-neutral-500' :
                      'bg-cprimary-600'
                    }`}
                    style={{ width: `${download.progress}%` }}
                  />
                </div>
              </div>
              
              {/* 컨트롤 버튼 */}
              <div className="flex gap-2">
                {download.status === 'completed' && (
                  <button className="w-10 h-10 bg-neutral-700 hover:bg-neutral-600 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white transition-colors">
                    <Folder className="w-4 h-4" />
                  </button>
                )}
                {download.status !== 'completed' && (
                  <button className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${getStatusColor(download.status)}`}>
                    {getStatusIcon(download.status)}
                  </button>
                )}
                <button className="w-10 h-10 bg-neutral-700 hover:bg-red-600 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white transition-colors">
                  <Xmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 대역폭 통계 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-neutral-400">현재 다운로드 속도</h4>
              <p className="text-2xl font-bold text-neutral-100">20.7 MB/s</p>
            </div>
            <div className="w-12 h-12 bg-cprimary-600/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-cprimary-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-neutral-400">총 다운로드 용량</h4>
              <p className="text-2xl font-bold text-neutral-100">240.7 GB</p>
            </div>
            <div className="w-12 h-12 bg-neutral-600/20 rounded-full flex items-center justify-center">
              <Folder className="w-6 h-6 text-neutral-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-neutral-400">남은 시간</h4>
              <p className="text-2xl font-bold text-neutral-100">40분</p>
            </div>
            <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 다운로드 설정 */}
      <div className="mt-6 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-5 h-5 text-neutral-400" />
          <h3 className="text-lg font-semibold text-neutral-100">다운로드 설정</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              최대 다운로드 속도
            </label>
            <select className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-cprimary-500 transition-colors">
              <option>제한 없음</option>
              <option>50 MB/s</option>
              <option>25 MB/s</option>
              <option>10 MB/s</option>
              <option>5 MB/s</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              동시 다운로드 수
            </label>
            <select className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-cprimary-500 transition-colors">
              <option>5개</option>
              <option>3개</option>
              <option>2개</option>
              <option>1개</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              자동 설치
            </label>
            <select className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-cprimary-500 transition-colors">
              <option>다운로드 완료 후</option>
              <option>수동으로만</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              다운로드 폴더
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value="C:\MasangGames" 
                className="flex-1 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 focus:outline-none focus:border-cprimary-500 transition-colors"
                readOnly
              />
              <button className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors flex items-center gap-1">
                <Folder className="w-4 h-4" />
                변경
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
