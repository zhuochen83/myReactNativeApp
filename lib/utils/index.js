export const indexedArray = prop => 
  array => {
    const object = {}
    array.forEach((item) => {
      object[item[prop]] = item
    }, this)
    return object
  }
  
export const getNavigation = (state) => (
  state.nav.routes[state.nav.routes.length - 1] || {}
)