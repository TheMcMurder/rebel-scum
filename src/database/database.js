import { people } from './people.js'
export function getWarCriminals () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rebels = people.filter(p => p.affiliation === 'Rebellion')
      resolve(rebels)
    }, 2500)
  })
}