const BADGE = { pending: ['badge-pending','Pendiente'], accepted: ['badge-accepted','Aceptada'], rejected: ['badge-rejected','Rechazada'] }

export function AppointmentList({ appointments, onUpdateStatus, onDelete }) {
  if (!appointments.length) return <div className="empty"><p>No hay citas.</p></div>
  return (
    <div className="card-list">
      {appointments.map(a => {
        const [cls, label] = BADGE[a.status] || ['badge-read', a.status]
        return (
          <div key={a.id} className="card">
            <div className="card-header">
              <div><div className="card-name">{a.name}</div><div className="card-meta">{a.date} {a.time} · <a href={`tel:${a.phone}`} style={{color:'var(--c-gold)'}}>{a.phone}</a></div></div>
              <span className={`badge ${cls}`}>{label}</span>
            </div>
            <div className="card-body"><strong>Motivo:</strong> {a.reason}</div>
            <div className="card-actions">
              {a.status === 'pending' && <><button className="btn btn-success btn-xs" onClick={() => onUpdateStatus(a.id,'accepted')}>Aceptar</button><button className="btn btn-danger btn-xs" onClick={() => onUpdateStatus(a.id,'rejected')}>Rechazar</button></>}
              {a.status === 'accepted' && <button className="btn btn-danger btn-xs" onClick={() => onUpdateStatus(a.id,'rejected')}>Rechazar</button>}
              {a.status === 'rejected' && <button className="btn btn-success btn-xs" onClick={() => onUpdateStatus(a.id,'accepted')}>Aceptar</button>}
              <button className="btn btn-danger btn-xs" onClick={() => onDelete(a.id)}>Eliminar</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
