const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero => {
    numero.innerText = '0';

    const actualizarContador = () => {
        const target = +numero.getAttribute('data-target');
        const c = +numero.innerText;

        const incremento = target / 200;

        if (c < target) {
            numero.innerText = `${Math.ceil(c + incremento)}`;
            setTimeout(actualizarContador, 50);
        } else {
            numero.innerText = target;
        }
    };

    actualizarContador();
});
