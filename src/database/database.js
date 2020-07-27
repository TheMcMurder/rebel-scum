const globalForcedTimeout = 800
import { people } from './people.js'
export function getWarCriminals () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rebels = people.filter(p => p.affiliation === 'Rebellion' || p.affiliation === 'Jedi')
      resolve(rebels)
    }, globalForcedTimeout)
  })
}

export function getWarCriminal (id) {
  if (!id) {
    return Promise.throw(`Cannot fetch war criminal with id: ${id}`)
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const criminal = people.find(p => p.id === id)
      console.log('criminal', criminal)
      resolve(criminal)
    }, globalForcedTimeout)
  })
}