import mock from 'mockjs'

let prolist = []
for(let i=0;i<10;i++) {
  prolist.push({
    face:mock.Random.dataImage('50x50'),
    title:mock.Random.cword(3, 7),
    img:mock.Random.dataImage('400x300'),
    con:mock.Random.cword(6, 10),
    address:[mock.Random.cword(2,4),mock.Random.cword(2,4)],
    label:[mock.Random.cword(2,4),mock.Random.cword(2,4),mock.Random.cword(2,4)],
    in: '进店逛逛>'
  })
}

export default prolist