import {getQueryString} from '../src/fetchYoutube'
import {assert} from 'chai'

describe('test del modulo fetchYoutube search e funzioni collegate', (t) => {
  it('test ella funzione getQueryString', ()=> {
    const expected = 'parametro1=siamo%20in%20mondatagna&parametro2=a%20villeggiare%20contanti'
    const calculated = getQueryString({
      'parametro1': 'siamo in mondatagna',
      'parametro2': 'a villeggiare contanti'
    })
    assert.equal(expected, calculated)
  })
})
