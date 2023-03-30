// gpt models
export function useGptModels() {
  const gptModelsOptions = [
    'gpt-4',
    'gpt-4-0314',
    'gpt-4-32k',
    'gpt-4-32k-0314',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-0301',
  ]

  const gptModels = useState('gptModels', () => 'gpt-3.5-turbo')

  function gptModelsHandler(val: string) {
    gptModels.value = val
  }


  return {
    gptModels,
    gptModelsOptions,
    gptModelsHandler
  }
}
