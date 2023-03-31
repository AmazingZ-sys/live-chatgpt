export function useRole() {
  const userRole = useState('userRole', () => 'user')

  function roleChangeHandler(role: string) {
    userRole.value = role
  }

  return {
    userRole,
    roleChangeHandler
  }

}
