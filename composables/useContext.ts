export function useContext() {
  const useContextNum = useState('useContextNum', () => 5);

  return {
    useContextNum
  }

}
