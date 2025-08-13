import './App.css'
import TitleBar from './components/TitleBar'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className=" flex flex-col bg-neutral-900 text-neutral-50">
      {/* 커스텀 타이틀 바 */}
      <TitleBar />
      
      {/* 메인 레이아웃 */}
      <div className="flex">
        {/* 사이드바 */}
        <Sidebar />
        
        {/* 메인 컨텐츠 */}
        <main className="mt-12 flex-1 ml-48 min-h-screen">
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
