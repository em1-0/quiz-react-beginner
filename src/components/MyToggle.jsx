import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle({ btnDark }) {
  const [enabled, setEnabled] = useState(false)

  const send = () => {
    setEnabled(!enabled);
    btnDark(!enabled);
  }

  return (
    <Switch
      checked={enabled}
      onChange={send}
      className={`${enabled ? 'bg-gray-700' : 'bg-gray-600'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default MyToggle;