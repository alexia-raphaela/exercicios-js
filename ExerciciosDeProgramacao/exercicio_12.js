const modifica = (obj, prop) => {
  //console.log(obj)
  const _obj = obj
  //console.log(_obj)
  delete _obj[prop]
  return _obj
}

console.log(modifica({ a: 'a', b: 'b'}, 'b'))