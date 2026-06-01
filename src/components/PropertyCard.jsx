const FALLBACK_IMG = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80'

export function PropertyCard({ property, onOpen }) {
  const imgs = Array.isArray(property.images) && property.images.length ? property.images : [FALLBACK_IMG]
  const tagCls = property.tag === 'Alquiler' ? 'tag-rent' : 'tag-sale'
  return (
    <article className="property-card" tabIndex={0} role="button" aria-label={`Ver detalles de ${property.title}`}
      onClick={() => onOpen(property.id)} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen(property.id)}>
      <div className="prop-media">
        <img src={imgs[0]} alt={property.title} loading="lazy" />
        <span className={`prop-tag ${tagCls}`}>{property.tag || 'Venta'}</span>
      </div>
      <div className="prop-body">
        <div className="prop-price">{property.price}</div>
        <h3 className="prop-title">{property.title}</h3>
        <p className="prop-location"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{property.location}</p>
        <p className="prop-feats">{property.features}</p>
      </div>
      <div className="prop-footer">
        <button className="btn btn-outline btn-sm" onClick={e => { e.stopPropagation(); onOpen(property.id) }}>Ver detalles →</button>
      </div>
    </article>
  )
}
