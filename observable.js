const { Observable } = require('rxjs');

const clock$ = new Observable(observer => {
    setInterval(() => {observer.next()}, 1000);
})

const sub$ = clock$
    .scan((acc) => acc + 1, 0)
    .subscribe(data => {
        console.log(data);
    });

setTimeout(() => {
    sub$.unsubscribe();
    process.exit(0);
}, 10000);
