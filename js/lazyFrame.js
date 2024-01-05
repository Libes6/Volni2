const frame = document.querySelectorAll('iframe[data-src],img[data-src]')

console.log(frame)
if (frame.length>0){
    let options = {
        root: null,
        rootMargin: "300px",
        threshold: 0.1,
    };
    const callbackFrame= (entries, observer)=>{
        entries.forEach((entry) => {
            console.log(entry.target.dataset.src)
            if (entry.isIntersecting){
                entry.target.src=entry.target.dataset.src
                observer.unobserve(entry.target)
            }

        });
    }

    let observer = new IntersectionObserver(callbackFrame, options);
    frame.forEach(item=>{
            observer.observe(item)
    })
}
