//Replace node
//log

// Returns Function that returns inital val as Promise
function Reflect(fn) {
  return (val) => {
    return Promise.resolve(fn).then(()=>val)
  }
}
