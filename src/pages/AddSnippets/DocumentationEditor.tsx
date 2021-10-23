import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { onChangeHandler } from '../../features/addSnippetSlice'

export const DocumentationEditor = () => {
  const value = useAppSelector(state => state.addSnippet.documentation)
  const dispatch = useAppDispatch()

  function onInputChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log('onInputChangeHandler', event.target.value)

    dispatch(
      onChangeHandler({ type: 'documentation', value: event.target.value })
    )
  }

  return (
    <textarea
      name="documentation"
      id="documentation"
      rows={5}
      className="bg-gray-800 p-3 rounded-md"
      value={value}
      onChange={onInputChangeHandler}
    />
  )
}
