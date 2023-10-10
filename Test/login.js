function Login(inputData) {
    if(inputData === null)
        return false;
    else {
        fetch('url', {method: 'POST', data: inputData}).then(console.log('success'));
        return true;
    }
}