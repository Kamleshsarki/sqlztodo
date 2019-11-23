const buildItem = ({ id, text, isDone }) => {
  let itemElem = document.createElement('tr')
  itemElem.className = isDone ? 'complete' : ''
  itemElem.innerHTML = `
      <td class="item" data-id="${id}">
        ${text}
      </td>
      <td class="item" data-id="${id}">
        <i data-id="${id}"class="material-icons item delete">
          delete
        </i>
      </td>
      `
  return itemElem
}

const deleteItem = (id, parent) => {
  axios.delete(`/items/${id}`)
    .then(() => parent.remove())
    .catch(e => console.error(e))
}

const updateItem = (id, parent) => {
  axios.put(`/items/${id}`)
    .then(() => parent.className = parent.className === 'complete' ? '' : 'complete')
    .catch(e => console.error(e))
}

axios.get('/items')
  .then(({ data: items }) => {
    document.getElementById('items').innerHTML = ''
    items.forEach(item => document.getElementById('items').append(buildItem(item)))
  })

document.getElementById('addItem').addEventListener('click', e => {
  e.preventDefault()
  let item = {
    text: document.getElementById('text').value,
    isDone: false
  }
  axios.post('/items', item)
    .then(() => {
      document.getElementById('items').append(buildItem(item))
      document.getElementById('text').value = ''
    })
    .catch(e => console.error(e))
})

document.addEventListener('click', e => {
  if (e.target.className.includes('item')) {
    if (e.target.className.includes('delete')) {
      deleteItem(parseInt(e.target.dataset.id), e.target.parentNode.parentNode)
    } else {
      updateItem(e.target.dataset.id, e.target.parentNode)
    }
  }
})
