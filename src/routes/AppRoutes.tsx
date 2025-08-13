import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Store from '../pages/Store'
import Downloads from '../pages/Downloads'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/store" element={<Store />} />
			<Route path="/downloads" element={<Downloads />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}


