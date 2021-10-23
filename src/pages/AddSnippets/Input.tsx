import { ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { onChangeHandler } from '../../features/addSnippetSlice'

type propsType = {
  label: string
  type: string
  id: 'title' | 'shortDescription' | 'code' | 'tags'
  children?: ReactNode
}

export const Input = ({ label, type, id, children }: propsType) => {
  const value = useAppSelector(state => state.addSnippet[id])
  const dispatch = useAppDispatch()

  function onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // console.log('onInputChangeHandler', event.target.value)

    dispatch(onChangeHandler({ type: id, value: event.target.value }))
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        className="p-3 bg-gray-800 rounded-md text-lg"
        value={value}
        onChange={onInputChangeHandler}
      />
      {children}
    </>
  )
}
