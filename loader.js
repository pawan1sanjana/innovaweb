(function () {
    // Inject loader HTML
    const loaderHTML = `
        <div id="premium-loader">
            <div class="loader-wrapper">
                <div class="loader-visual">
                    <div class="loader-circle"></div>
                    <svg class="loader-progress-circle" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48"></circle>
                    </svg>
                    <div class="loader-icon">
                        <i class="fas fa-microchip"></i>
                    </div>
                </div>
                <div class="loader-text-wrap">
                    <div class="loader-brand">INNOVA</div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    const loader = document.getElementById('premium-loader');
    const circle = loader.querySelector('.loader-progress-circle circle');
    const circumference = 2 * Math.PI * 48;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 98) progress = 98;
        setProgress(progress);
    }, 200);

    window.addEventListener('load', () => {
        clearInterval(interval);
        setProgress(100);

        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 500);
    });
})();
