import React, { useState } from 'react'

/**
 * Webhook/API Trigger de BuildShip (producción)
 */
const BUILD_SHIP_WEBHOOK = 'https://kbulop.buildship.run/libro-romero'

const Libro = () => {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null) // null | true | false

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setOk(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot
    if (formData.get('bot_field')) {
      setOk(true)
      setLoading(false)
      form.reset()
      return
    }

    // ---- PAYLOAD CORREGIDO Y ALINEADO AL FORM ----
    const payload = {
      hoja: {
        // numero y proveedor eliminados por requerimiento
        lugar: formData.get('domicilio_establecimiento') || '',
        fecha: formData.get('fecha') || '' // YYYY-MM-DD
      },
      consumidor: {
        nombre: formData.get('consumidor_nombre') || '',
        domicilio: formData.get('consumidor_domicilio') || '',
        doc: formData.get('consumidor_doc') || '',
        telefono: formData.get('consumidor_telefono') || '',
        email: formData.get('consumidor_email') || '',
        padre_madre: formData.get('padre_madre') || ''
      },
      bien: {
        tipo: formData.get('bien_tipo') || '',                 // 'producto' | 'servicio'
        monto_reclamado: formData.get('monto_reclamado') || '',
        descripcion: formData.get('bien_descripcion') || ''
      },
      reclamo: {
        tipo: formData.get('tipo') || '',                      // 'reclamo' | 'queja'
        pedido: formData.get('pedido') || '',
        detalle: formData.get('detalle') || ''
      },
      firmas: {
        consumidor: formData.get('firma_consumidor') || ''
      },
      consent: String(formData.get('consent') ? true : false), // "true" | "false"
      meta: {
        source: 'Landing Libro',
        ts: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
      }
    }
    // -----------------------------------------------

    try {
      const r = await fetch(BUILD_SHIP_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!r.ok) throw new Error('Bad response')
      setOk(true)
      form.reset()
    } catch (err) {
      console.error(err)
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full">
      {/* HERO */}
      <section className='w-full bg-gradient-red pt-header-fix pt-20 pb-4'>
        <div className='margin-responsive section-container pt-16 pb-[100px] text-center relative'>
          <h1 className='title-h1-movil md:title-big-desktop text-center pb-4 text-primary-500'>
            Libro de <br />
            <span className='text-dark-900'>reclamaciones</span>
          </h1>
          <p className='p-sm md:p-base text-dark-700 text-center max-w-3xl mx-auto'>
            Registra tu <strong>reclamo</strong> o <strong>queja</strong>. Nuestra empresa responderá en un plazo máximo de <strong>15 días hábiles</strong>.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className='w-full bg-white pt-12'>
        <div className='margin-responsive section-container pb-12'>
          <form
            onSubmit={onSubmit}
            noValidate
            className='bg-dark-200 border border-primary-100 rounded-2xl p-6 md:p-10 shadow-sm'
          >
            {/* Honeypot */}
            <div style={{ display: 'none' }}>
              <input type='text' name='bot_field' />
            </div>

            {/* Hoja simplificada */}
            <div className='grid md:grid-cols-2 gap-6 mb-10'>
              <div>
                <label className='block text-sm font-medium text-dark-700 mb-1'>Lugar donde ocurrió el hecho reclamado</label>
                <input type='text' name='domicilio_establecimiento' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
              </div>
              <div>
                <label className='block text-sm font-medium text-dark-700 mb-1'>Fecha</label>
                <input type='date' name='fecha' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
              </div>
            </div>

            {/* 1. Identificación del consumidor */}
            <fieldset className='mb-10'>
              <legend className='text-dark-900 font-semibold mb-4'>1. Identificación del consumidor reclamante</legend>
              <div className='grid md:grid-cols-2 gap-6'>
                <input required type='text' name='consumidor_nombre' placeholder='Nombre completo' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                <input type='text' name='consumidor_domicilio' placeholder='Domicilio' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                <input required type='text' name='consumidor_doc' placeholder='DNI / CE' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                <input type='tel' name='consumidor_telefono' placeholder='Teléfono (opcional)' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                <input required type='email' name='consumidor_email' placeholder='Email' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                <input type='text' name='padre_madre' placeholder='Padre o madre (si es menor de edad)' className='w-full rounded-lg border border-dark-200 px-3 py-2 md:col-span-2' />
              </div>
            </fieldset>

            {/* 2. Identificación del bien contratado */}
            <fieldset className='mb-10'>
              <legend className='text-dark-900 font-semibold mb-4'>2. Identificación del bien contratado</legend>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='flex items-center gap-6'>
                  <label className='inline-flex items-center gap-2'>
                    <input type='radio' name='bien_tipo' value='producto' className='accent-primary-600' />
                    <span>Producto</span>
                  </label>
                  <label className='inline-flex items-center gap-2'>
                    <input type='radio' name='bien_tipo' value='servicio' className='accent-primary-600' />
                    <span>Servicio</span>
                  </label>
                </div>
                <div>
                  <label className='block text-sm font-medium text-dark-700 mb-1'>Monto reclamado (S/)</label>
                  <input type='number' step='0.01' min='0' name='monto_reclamado' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
                </div>
                <textarea name='bien_descripcion' rows={3} placeholder='Descripción' className='w-full rounded-lg border border-dark-200 px-3 py-2 md:col-span-2'></textarea>
              </div>
            </fieldset>

            {/* 3. Detalle de la reclamación y pedido */}
            <fieldset className='mb-10'>
              <legend className='text-dark-900 font-semibold mb-4'>3. Detalle de la reclamación y pedido del consumidor</legend>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <label className='block text-sm font-medium text-dark-700'>Tipo</label>
                  <label className='inline-flex items-center gap-2 pr-6'>
                    <input type='radio' name='tipo' value='reclamo' className='accent-primary-600' />
                    <span>Reclamo</span>
                  </label>
                  <label className='inline-flex items-center gap-2'>
                    <input type='radio' name='tipo' value='queja' className='accent-primary-600' />
                    <span>Queja</span>
                  </label>
                </div>
                <textarea name='pedido' rows={5} placeholder='Pedido' className='w-full rounded-lg border border-dark-200 px-3 py-2 md:col-span-2'></textarea>
                <textarea name='detalle' rows={6} placeholder='Detalle' className='w-full rounded-lg border border-dark-200 px-3 py-2 md:col-span-2'></textarea>
              </div>
            </fieldset>

            {/* Consent & Firma */}
            <div className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <input type='text' name='firma_consumidor' placeholder='Nombre completo del consumidor' className='w-full rounded-lg border border-dark-200 px-3 py-2' />
              </div>
              <label className='inline-flex items-start gap-3'>
                <input required type='checkbox' name='consent' className='mt-1 accent-primary-600' />
                <span className='text-sm text-dark-700'>
                  Al escribir mi nombre completo declaro que la información proporcionada es veraz y autorizo el uso de mis datos para gestionar mi reclamo o queja.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className='mt-10 flex items-center justify-between gap-6 flex-wrap'>
              <p className='text-xs text-dark-600'>
                *El proveedor debe dar respuesta en un plazo no mayor a <strong>15 días hábiles</strong>.
              </p>
              <button type='submit' className='text-dark-100 px-6 py-3 rounded-xl bg-primary-700 hover:bg-primary-800 transition shadow' disabled={loading}>
                {loading ? 'Enviando…' : 'Enviar reclamación'}
              </button>
            </div>

            {ok === true && <p className='mt-4 text-green-700'>¡Listo! Recibimos tu envío.</p>}
            {ok === false && <p className='mt-4 text-red-700'>Ocurrió un problema. Inténtalo nuevamente.</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Libro
