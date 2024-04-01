document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.accordion').forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('open');
            let content = el.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                document.querySelectorAll('.content').forEach((el) => {
                    el.style.maxHeight = null;
                });
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
