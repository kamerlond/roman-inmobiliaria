export function Toast({ toasts }) {
  return (
    <>
      {toasts.map(t => (
        <div key={t.id} className="toast show" role="status" aria-live="polite">
          {t.msg}
        </div>
      ))}
    </>
  )
}
