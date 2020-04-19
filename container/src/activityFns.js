export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function homePage(location) {
  return prefix(location, 'home')
}