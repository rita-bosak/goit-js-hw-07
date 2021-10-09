const validationInput = document.querySelector('#validation-input');

const handleValidLength = () => {
    const currentInputLength = validationInput.value.length;

    const inputClass = validationInput.classList;

    if (currentInputLength === Number(validationInput.getAttribute("data-length"))){

        return inputClass.contains("invalid") ? 
        inputClass.replace("invalid", "valid") : 
        inputClass.add("valid");
    };
   
    return inputClass.contains("valid") ? 
    inputClass.replace("valid", "invalid") : 
    inputClass.add("invalid");
};

validationInput.addEventListener('change', handleValidLength);

