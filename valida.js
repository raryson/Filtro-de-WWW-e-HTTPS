
function retiraProtocolo(url){
    
    const reGexHttp = new RegExp("^(http|https)://", "i")
    const reGexHttpWithWWW = new RegExp("^(http|https)://www.", "i")

    if(reGexHttpWithWWW.test(url)){
        let filtred = url.replace(reGexHttpWithWWW, '')
        return filtred
    }

    if(reGexHttp.test(url)){
        let filtred = url.replace(reGexHttp, '')
        return filtred
    }


    return url
}


document.querySelector('#go').addEventListener('click', (e) => {
    e.preventDefault()
    let domainValue = document.querySelector('#domainField').value
    const divAlert = document.querySelector('.alert')
    divAlert.innerHTML = '<strong> O dominio e '+ retiraProtocolo(domainValue)
    divAlert.style.display = 'block';
    domainValue = '';
    $('.alert').fadeOut(5000)
}) 