const frame = document.querySelectorAll('iframe[data-src]')
if (frame.length>0){
    console.log(frame)
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
    };
    const callbackFrame= (entries, observer)=>{
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.src){
                entry.target.src=entry.target.dataset.src
            }
        });
    }

    let observer = new IntersectionObserver(callbackFrame, options);
    frame.forEach(item=>{
            observer.observe(item)
    })
}
