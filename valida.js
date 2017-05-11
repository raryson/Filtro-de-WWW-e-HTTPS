
function retiraProtocolo(url){
    
    const reGexHttp = new RegExp("^(http|https)://", "i")
    const reGexHttpWithWWW = new RegExp("^(http|https)://www.", "i")
     const reGexWww = new RegExp("^www.", "i")

    if(reGexHttpWithWWW.test(url)){
        let filtred = url.replace(reGexHttpWithWWW, '')
        console.log(filtred.substring(filtred.length -1, filtred.length))
        if(filtred.substring(filtred.length -1, filtred.length)  === '/'){
            return  filtred.substring(0, filtred.length - 1)
        }
        return filtred
    }

    if(reGexHttp.test(url)){
        let filtred = url.replace(reGexHttp, '')
        if(filtred.substring(filtred.length -1, filtred.length)  === '/'){
            return  filtred.substring(0, filtred.length - 1)
        }
        return filtred
    }

    if(reGexWww.test(url)){
        let filtred = url.replace(reGexWww, '')
        if(filtred.substring(filtred.length -1, filtred.length) === '/'){
            return  filtred.substring(0, filtred.length - 1)
        }
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