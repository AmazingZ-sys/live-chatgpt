export function useDialog() {
  // dialog visible state
  const useDialogState = useState('useDialogState', () => false)

  // dialog type
  const useDialogType = useState('useDialogType', () => 'enterApiKey')

  const stateChangeHandler = (state: boolean) => {
    useDialogState.value = state
    console.log(useDialogState.value, "============>lalalal")
  }

  const typeChangeHandler = (type: string) => {
    useDialogType.value = type
  }

  return {
    useDialogType,
    useDialogState,
    typeChangeHandler,
    stateChangeHandler
  }

}
