setTimeout(()=>{
  loading.classList.add('hidden')
  document.querySelector('#appMain').classList.remove('hidden')
  document.querySelector('#appMain').classList.add('show')
  maxHeightForUl()
},2000)


function maxHeightForUl() {
  const mainListWithEcp = document.querySelectorAll('.main__list_with_ecp'),
    mainMenuWithEcp = document.querySelector('.main__menu_with_ecp')
  if (document.body.clientHeight > 999) {
    mainMenuWithEcp.style.maxHeight = ((mainListWithEcp[0].clientHeight * 4) + 11) + 'px'
  } else if (document.body.clientHeight > 850) {
    mainMenuWithEcp.style.maxHeight = ((mainListWithEcp[0].clientHeight * 3) + 11) + 'px'
  } else if (document.body.clientHeight < 850) {
    mainMenuWithEcp.style.maxHeight = '100%'
  }
}

