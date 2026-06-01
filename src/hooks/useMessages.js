import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false })
    setMessages(data || [])
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const insert = async (msg) => { const { error } = await supabase.from('messages').insert(msg); if (error) throw error; await load() }
  const markRead = async (id) => { const { error } = await supabase.from('messages').update({ status: 'read' }).eq('id', id); if (error) throw error; await load() }
  const remove = async (id) => { const { error } = await supabase.from('messages').delete().eq('id', id); if (error) throw error; await load() }

  return { messages, loading, load, insert, markRead, remove }
}
