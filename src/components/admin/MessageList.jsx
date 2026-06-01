export function MessageList({ messages, onMarkRead, onDelete }) {
  if (!messages.length) return <div className="empty"><p>No hay mensajes.</p></div>
  return (
    <div className="card-list">
      {messages.map(m => (
        <div key={m.id} className="card">
          <div className="card-header">
            <div><div className="card-name">{m.name}</div><div className="card-meta">{m.phone} · <a href={`mailto:${m.email}`} style={{color:'var(--c-gold)'}}>{m.email}</a> · {m.created_at?.slice(0,10)}</div></div>
            <span className={`badge badge-${m.status === 'new' ? 'new' : 'read'}`}>{m.status === 'new' ? 'Nuevo' : 'Leído'}</span>
          </div>
          <div className="card-body">{m.message}</div>
          <div className="card-actions">
            {m.status === 'new' && <button className="btn btn-outline btn-xs" onClick={() => onMarkRead(m.id)}>Marcar como leído</button>}
            <button className="btn btn-danger btn-xs" onClick={() => onDelete(m.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}
