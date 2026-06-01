import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useAppointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [bookedSlots, setBookedSlots] = useState([])

  const load = useCallback(async () => {
    setLoading(true)
    const { data } = await supabase.from('appointments').select('*').order('created_at', { ascending: false })
    const list = data || []
    setAppointments(list)
    setBookedSlots(list.filter(a => a.status !== 'rejected').map(a => `${a.date}${a.time}`))
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const insert = async (appt) => { const { error } = await supabase.from('appointments').insert(appt); if (error) throw error; await load() }
  const updateStatus = async (id, status) => { const { error } = await supabase.from('appointments').update({ status }).eq('id', id); if (error) throw error; await load() }
  const remove = async (id) => { const { error } = await supabase.from('appointments').delete().eq('id', id); if (error) throw error; await load() }

  return { appointments, loading, bookedSlots, load, insert, updateStatus, remove }
}
