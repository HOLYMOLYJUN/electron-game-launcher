import { Settings, Palette, Download, Shield, InfoCircle } from 'iconoir-react'

export default function SettingsPage() {
  const settingsGroups = [
    {
      title: "일반",
      icon: Settings,
      settings: [
        { label: "시작 시 자동 실행", type: "toggle", value: true },
        { label: "백그라운드에서 실행", type: "toggle", value: false },
        { label: "업데이트 자동 확인", type: "toggle", value: true },
        { label: "언어", type: "select", value: "한국어", options: ["한국어", "English", "日本語"] }
      ]
    },
    {
      title: "테마",
      icon: Palette,
      settings: [
        { label: "테마", type: "select", value: "다크", options: ["다크", "라이트", "시스템"] },
        { label: "강조 색상", type: "color", value: "#49b34a" }
      ]
    },
    {
      title: "다운로드",
      icon: Download,
      settings: [
        { label: "다운로드 폴더", type: "folder", value: "C:\\Games" },
        { label: "최대 다운로드 속도", type: "select", value: "제한 없음", options: ["제한 없음", "10 MB/s", "5 MB/s", "1 MB/s"] },
        { label: "동시 다운로드 수", type: "number", value: 3 }
      ]
    },
    {
      title: "보안",
      icon: Shield,
      settings: [
        { label: "자동 로그인", type: "toggle", value: true },
        { label: "오프라인 모드 허용", type: "toggle", value: false }
      ]
    }
  ]

  const renderSetting = (setting: { type: string; value: string | number | boolean; options?: string[]; label: string }) => {
    switch (setting.type) {
      case 'toggle':
        return (
          <div className="relative">
            <input
              type="checkbox"
              defaultChecked={setting.value as boolean}
              className="sr-only"
              id={setting.label}
            />
            <label htmlFor={setting.label} className="flex items-center cursor-pointer">
              <div className={`w-11 h-6 rounded-full p-1 transition-colors ${
                setting.value ? 'bg-cprimary-600' : 'bg-neutral-600'
              }`}>
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  setting.value ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </div>
            </label>
          </div>
        )
      case 'select':
        return (
          <select className="bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 min-w-[120px]">
            {setting.options?.map((option: string) => (
              <option key={option} selected={option === setting.value}>{option}</option>
            ))}
          </select>
        )
      case 'folder':
        return (
          <div className="flex gap-2">
            <input 
              type="text" 
              value={setting.value as string} 
              className="flex-1 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200 min-w-[200px]"
              readOnly
            />
            <button className="px-3 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
              찾아보기
            </button>
          </div>
        )
      case 'number':
        return (
          <input 
            type="number" 
            defaultValue={setting.value as number}
            className="w-20 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-neutral-200"
          />
        )
      case 'color':
        return (
          <div className="flex items-center gap-2">
            <input 
              type="color" 
              defaultValue={setting.value as string}
              className="w-8 h-8 rounded border border-neutral-600"
            />
            <span className="text-neutral-400 text-sm">{setting.value}</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-full flex flex-col p-6">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-100 mb-2">설정</h1>
        <p className="text-neutral-400">게임 런처 설정을 관리하세요</p>
      </div>

      {/* 설정 그룹 */}
      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <group.icon className="w-5 h-5 text-cprimary-500" />
              <h3 className="text-lg font-semibold text-neutral-100">{group.title}</h3>
            </div>
            
            <div className="space-y-4">
              {group.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between">
                  <div className="text-neutral-200">{setting.label}</div>
                  {renderSetting(setting)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 정보 섹션 */}
      <div className="mt-8 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <div className="flex items-center gap-3 mb-4">
          <InfoCircle className="w-5 h-5 text-cprimary-500" />
          <h3 className="text-lg font-semibold text-neutral-100">정보</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-neutral-400">버전</div>
            <div className="text-neutral-200">1.0.0</div>
          </div>
          <div>
            <div className="text-neutral-400">빌드</div>
            <div className="text-neutral-200">2024.01.15</div>
          </div>
          <div>
            <div className="text-neutral-400">Electron</div>
            <div className="text-neutral-200">30.5.1</div>
          </div>
          <div>
            <div className="text-neutral-400">Node.js</div>
            <div className="text-neutral-200">20.17.0</div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-cprimary-600 hover:bg-cprimary-700 rounded-lg transition-colors">
            업데이트 확인
          </button>
          <button className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
            로그 폴더 열기
          </button>
        </div>
      </div>
    </div>
  )
}
