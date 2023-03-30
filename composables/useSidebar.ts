// sidebar
export function useSidebar() {
  const sidebarState = useState('sidebarState', () => false)
  function sidebarChange() {
    sidebarState.value = !sidebarState.value
  }
  return {
    sidebarState,
    sidebarChange
  }
}
