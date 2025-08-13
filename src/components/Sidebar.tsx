import { NavLink } from 'react-router-dom'
import { 
  Gamepad, 
  Shop, 
  Settings, 
  Download,
  User,
  Search
} from 'iconoir-react'

export default function Sidebar() {
  const navItems = [
    { to: '/', label: '라이브러리', icon: Gamepad, end: true },
    { to: '/store', label: '스토어', icon: Shop },
    { to: '/downloads', label: '다운로드', icon: Download },
    { to: '/profile', label: '프로필', icon: User },
    { to: '/settings', label: '설정', icon: Settings },
  ]

  return (
    <aside className="fixed w-48 h-[calc(100vh-3rem)] mt-12 bg-neutral-800 border-r border-neutral-700 flex flex-col">
      {/* 검색 바 */}
      <div className="p-4 border-b border-neutral-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-[18px] h-[18px]" />
          <input 
            type="text" 
            placeholder="게임 검색..."
            className="w-full bg-neutral-700 text-neutral-200 pl-10 pr-4 py-2 rounded-lg border border-neutral-600 focus:border-cprimary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-cprimary-600 text-neutral-50'
                      : 'text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* 사용자 정보 */}
      <div className="p-4 border-t border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cprimary-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-neutral-200">게이머</div>
            <div className="text-xs text-neutral-400">온라인</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
