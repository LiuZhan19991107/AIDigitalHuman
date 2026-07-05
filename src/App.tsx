import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import SecondPage from '@/pages/SecondPage'
import ThirdPage from '@/pages/ThirdPage'

const DigitalPersonVideoPage = lazy(() => import('@/pages/DigitalPersonVideoPage'))
const EnterpriseServicePage = lazy(() => import('@/pages/EnterpriseServicePage'))
const PricePage = lazy(() => import('@/pages/PricePage'))
const WorkspacePage = lazy(() => import('@/pages/WorkspacePage'))
const VideoAssetsPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.VideoAssetsPage })),
)
const CommunityPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.CommunityPage })),
)
const PeopleLibraryPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.PeopleLibraryPage })),
)
const AudioLibraryPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.AudioLibraryPage })),
)
const AiTemplatePage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.AiTemplatePage })),
)
const InspirationPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.InspirationPage })),
)
const MarketingWorkbenchPage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.MarketingWorkbenchPage })),
)
const WorkflowStorePage = lazy(() =>
  import('@/pages/WorkspaceMenuPages').then((module) => ({ default: module.WorkflowStorePage })),
)

function AppLoading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #f5f7fb 0%, #eef2f8 100%)',
        color: '#334155',
      }}
    >
      正在加载页面...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/first" replace />} />
          <Route path="/first" element={<Home />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/pricing" element={<PricePage />} />
          <Route path="/enterprise-service" element={<EnterpriseServicePage />} />
          <Route path="/workspace" element={<WorkspacePage />} />
          <Route path="/my/assets/video.html" element={<VideoAssetsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/" element={<CommunityPage />} />
          <Route path="/people" element={<PeopleLibraryPage />} />
          <Route path="/people/" element={<PeopleLibraryPage />} />
          <Route path="/audio" element={<AudioLibraryPage />} />
          <Route path="/audio/" element={<AudioLibraryPage />} />
          <Route path="/ai-template" element={<AiTemplatePage />} />
          <Route path="/ai-template/" element={<AiTemplatePage />} />
          <Route path="/ai-data-home" element={<InspirationPage />} />
          <Route path="/marketing-workbench" element={<MarketingWorkbenchPage />} />
          <Route path="/workflowStore" element={<WorkflowStorePage />} />
          <Route path="/workflowStore/" element={<WorkflowStorePage />} />
          <Route path="/features/digital-person-video.html" element={<DigitalPersonVideoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
