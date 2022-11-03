const api = {
    getSomething: () =>
        fetch('some url', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        }),
};
