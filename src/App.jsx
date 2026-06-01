import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useToast } from './hooks/useToast'
import { useProperties } from './hooks/useProperties'
import { useMessages } from './hooks/useMessages'
import { useAppointments } from './hooks/useAppointments'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Toast } from './components/Toast'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'

export default function App() {
  const { theme, toggle } = useTheme()
  const { toasts, toast } = useToast()
  const { properties, load: reloadProps } = useProperties()
  const { messages, markRead, remove: deleteMsg, insert: insertMsg } = useMessages()
  const { appointments, bookedSlots, updateStatus: updateAppt, remove: deleteAppt, insert: insertAppt } = useAppointments()

  const [page, setPage] = useState(() =>
    window.location.hash.startsWith('#/admin') ? 'admin' : 'home'
  )

  const goAdmin = () => {
    window.location.hash = '#/admin'
    setPage('admin')
  }

  const handleSubmitMessage = async (data) => {
    await insertMsg(data)
    toast('Mensaje enviado correctamente. Te respondemos pronto.')
  }

  const handleSubmitAppointment = async (data) => {
    await insertAppt(data)
    toast('Solicitud de cita enviada. Te llamaremos para confirmar.')
  }

  return (
    <>
      {page === 'home' ? (
        <>
          <Header theme={theme} onToggleTheme={toggle} onAdminClick={goAdmin} />
          <Home
            properties={properties}
            bookedSlots={bookedSlots}
            onSubmitMessage={handleSubmitMessage}
            onSubmitAppointment={handleSubmitAppointment}
          />
          <Footer />
        </>
      ) : (
        <Admin
          properties={properties}
          messages={messages}
          appointments={appointments}
          onRefreshAll={reloadProps}
          onMarkRead={markRead}
          onDeleteMsg={deleteMsg}
          onUpdateAppt={updateAppt}
          onDeleteAppt={deleteAppt}
          toast={toast}
          theme={theme}
          onToggleTheme={toggle}
        />
      )}
      <Toast toasts={toasts} />
    </>
  )
}
