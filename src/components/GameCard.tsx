import { Play, Download, MoreHoriz } from 'iconoir-react'

interface GameCardProps {
  title: string
  image: string
  status: 'installed' | 'not_installed' | 'downloading'
  progress?: number
  lastPlayed?: string
  size?: string
  tags?: string[]
  description?: string
  viewMode?: 'grid' | 'list'
}

export default function GameCard({ 
  title, 
  image, 
  status, 
  progress = 0, 
  lastPlayed, 
  size,
  tags = [],
  description,
  viewMode = 'grid'
}: GameCardProps) {
  const getStatusButton = () => {
    switch (status) {
      case 'installed':
        return (
          <button className="w-[100px] flex items-center justify-center gap-2 cursor-pointer bg-cprimary-600 hover:bg-cprimary-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Play className="w-4 h-4" />
            플레이
          </button>
        )
      case 'downloading':
        return (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Download className="w-4 h-4" />
              다운로드 중... {progress}%
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2">
              <div 
                className="bg-cprimary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )
      case 'not_installed':
        return (
          <button className="w-[100px] flex items-center justify-center gap-2 cursor-pointer bg-neutral-700 hover:bg-neutral-600 text-neutral-200 px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            설치
          </button>
        )
    }
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors p-4">
        <div className="flex items-center gap-4">
          {/* 게임 이미지 */}
          <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 게임 정보 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg text-neutral-100 truncate">{title}</h3>
              {/* 태그 */}
              {tags.length > 0 && (
                <div className="flex gap-1">
                  {tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* 설명 */}
            {description && (
              <p className="text-sm text-neutral-400 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical'
              }}>
                {description}
              </p>
            )}
          </div>

          {/* 게임 정보 (크기, 마지막 플레이) */}
          <div className="flex flex-col items-end gap-1 text-sm text-neutral-400 min-w-0">
            {size && <div>크기: {size}</div>}
            {lastPlayed && <div>마지막 플레이: {lastPlayed}</div>}
          </div>

          {/* 상태 버튼 */}
          <div className="ml-4">
            {getStatusButton()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-colors group">
      {/* 게임 이미지 */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* 더보기 버튼 */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-neutral-900/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHoriz className="w-4 h-4 text-neutral-300" />
        </button>
      </div>

      {/* 게임 정보 */}
      <div className="p-4 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="font-semibold text-lg text-neutral-100 mb-2">{title}</h3>
          
          {/* 태그 */}
          {tags.length > 0 && (
            <div className="absolute top-0 left-3 shadow-lg flex gap-1 mt-2 mb-2 flex-wrap">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs bg-cprimary-900 text-neutral-50 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* 설명 */}
          {description && (
            <p className="text-md text-neutral-100 mb-2 overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {description}
            </p>
          )}
          
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-neutral-400 flex justify-between w-full">
              {size && <div></div>}
            </div>
          </div>
        </div>

        {/* 상태 버튼 */}
        <div className="flex items-end mt-auto">
          
          {lastPlayed && 
            <div className='text-sm text-neutral-400 mb-1' >{lastPlayed}</div>
          }
          <div className='flex justify-end ml-auto '>
            {getStatusButton()}
          </div>
        </div>
      </div>
    </div>
  )
}
