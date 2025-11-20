document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a biblioteca de animações
    AOS.init({
        duration: 800, // Duração da animação em ms
        once: true, // Anima apenas uma vez (não repete ao subir)
        offset: 100 // Começa a animar um pouco antes do elemento aparecer
    });

    // Lógica do Slider Principal
    const slider = document.getElementById('native-slider');
    if (slider) {
        const clipper = slider.querySelector('.image-clipper');
        const handle = slider.querySelector('.slider-handle');
        let isDragging = false;

        function moveSlider(x) {
            const sliderRect = slider.getBoundingClientRect();
            let position = (x - sliderRect.left) / sliderRect.width * 100;
            position = Math.max(0, Math.min(100, position));
            clipper.style.width = position + '%';
            handle.style.left = position + '%';
        }

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            slider.classList.add('dragging');
            moveSlider(e.clientX);
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                moveSlider(e.clientX);
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            slider.classList.remove('dragging');
        });

        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            slider.classList.add('dragging');
            moveSlider(e.touches[0].clientX);
        });

        window.addEventListener('touchmove', (e) => {
            if (isDragging) {
                e.preventDefault();
                moveSlider(e.touches[0].clientX);
            }
        });

        window.addEventListener('touchend', () => {
            isDragging = false;
            slider.classList.remove('dragging');
        });
    }

    // Lógica da Galeria de Miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const imgInspiration = document.getElementById('img-inspiration');
    const imgResult = document.getElementById('img-result');

    if (thumbnails.length > 0 && imgInspiration && imgResult) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Remove a classe 'active' de todas as miniaturas
                thumbnails.forEach(item => item.classList.remove('active'));

                // Adiciona a classe 'active' à miniatura clicada
                thumb.classList.add('active');

                // Obtém os caminhos das novas imagens a partir dos data-attributes
                const newInspirationSrc = thumb.dataset.inspiration;
                const newResultSrc = thumb.dataset.result;

                // Atualiza o 'src' das imagens no slider principal
                imgInspiration.src = newInspirationSrc;
                imgResult.src = newResultSrc;
            });
        });
    }
});
