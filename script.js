    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementById('close');
    const images = document.querySelectorAll('.img-container img');
    const body = document.body;

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            body.classList.add('blur-active');
        });
    });

    close.addEventListener('click', () => {
        modal.classList.remove('active');
        body.classList.remove('blur-active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            body.classList.remove('blur-active');
        }
    });