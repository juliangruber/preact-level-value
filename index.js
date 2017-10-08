export const on = (db, key, fn) => {
  const onput = (_key, value) => _key === key && fn(value)
  db.on('put', onput)
  db.get(key, (err, value) => {
    if (value) fn(value)
  })
  const stop = () => db.removeListener('put', onput)
  return { stop }
}
