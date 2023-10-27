import routes from 'router/routes'

const navigation = () => {
  return routes.reduce((prev: any, curr) => {
    const { meta, path, name } = curr
    if (meta.icon) {
      prev.push({ name, href: path, icon: meta.icon, color: meta.color, title: meta.title, requiresAuth: meta.requiresAuth })
    }
    return prev
  }, [])
}

export default navigation()
