export function langCookie () {
  const cookie = useCookie('lang')
  function delCookie() {
    
  }
  return {
    cookie
  }
}
