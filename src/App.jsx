import TabBar from './components/tab-bar'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#141414'
    }}>
      <TabBar />
    </div>
  )
}