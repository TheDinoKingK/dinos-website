// variables
const toastTrigger = document.getElementById('toastTrigger')
const toastAlert = document.getElementById('alertToast')

// bs inits
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))
const toastBody = document.getElementById('toast-text')

// copy text to clipboard function
function clipboardText(myString, whatYouCopy) {
    navigator.clipboard.writeText(myString)
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastAlert)
    toastBootstrap.show()
    toastBody.innerHTML = "Copied " + whatYouCopy + " to clipboard"
}   
