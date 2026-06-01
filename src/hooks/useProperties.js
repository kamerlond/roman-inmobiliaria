import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useProperties() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase.from('properties').select('*').order('created_at', { ascending: false })
    if (!error) setProperties(data || [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const insert = async (prop) => { const { error } = await supabase.from('properties').insert(prop); if (error) throw error; await load() }
  const update = async (id, prop) => { const { error } = await supabase.from('properties').update(prop).eq('id', id); if (error) throw error; await load() }
  const remove = async (id) => { const { error } = await supabase.from('properties').delete().eq('id', id); if (error) throw error; await load() }

  return { properties, loading, load, insert, update, remove }
}
