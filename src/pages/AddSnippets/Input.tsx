import { ReactNode } from 'react'

type propsType = {
  label: string
  type: string
  id: string
  children?: ReactNode
}

export const Input = ({ label, type, id, children }: propsType) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        className="p-3 bg-gray-800 rounded-md text-lg"
      />
      {children}
    </>
  )
}
