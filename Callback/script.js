let value = 10
setTimeout(()=>{
    document.getElementById('change').innerText = value
    value--;
    setTimeout(()=>{
        document.getElementById('change').innerText = value
        value--;
        setTimeout(()=>{
            document.getElementById('change').innerText = value
            value--;
            setTimeout(()=>{
                document.getElementById('change').innerText = value
                value--;
                setTimeout(()=>{
                    document.getElementById('change').innerText = value
                    value--;
                    setTimeout(()=>{
                        document.getElementById('change').innerText = value
                        value--;
                        setTimeout(()=>{
                            document.getElementById('change').innerText = value
                            value--;
                            setTimeout(()=>{
                                document.getElementById('change').innerText = value
                                value--;
                                setTimeout(()=>{
                                    document.getElementById('change').innerText = value
                                    value--;
                                    setTimeout(()=>{
                                        document.getElementById('change').innerText = value
                                        value--;
                                        setTimeout(()=>{
                                            document.getElementById('change').innerText = 'Happy Independence Day'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)