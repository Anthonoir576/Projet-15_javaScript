const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');

// turn cube on mousemove

container.addEventListener('mousemove', (e) => {

    rotY = e.clientX / 1.8;
    rotZ = e.clientY / 1.8;


    cube.style.animation = 'none';
    cube.style.transform = 'rotateY(' + rotY +'deg) rotateZ(' + rotZ +'deg)';
    cube.style.transition = '.5s ease-out';

    container.addEventListener('mouseleave', () => {

        cube.style.animation = 'spin 1500s infinite linear';

    });

});

// turn cube on arrow
document.body.addEventListener('click', function(e) {

    // face random
    const classes = ['front', 'back', 'top', 'bottom', 'right', 'left'];

    let classToUse = classes[Math.floor(Math.random() * classes.length)];

    // pick new class if class is defined
    if (cube.classList.contains(classToUse)) {
       
        classToUse = classes[Math.floor(Math.random() * classes.length)];

    }

    // add class to show random face
    if (e.target.classList.contains('arrow')) {

        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
        cube.classList.add(classToUse);
        cube.style.animation = 'none';
        cube.style.transition = '1.2s ease';


    };
});

// mouse leave animation

document.querySelectorAll('.arrow').forEach(item => {

    item.addEventListener('mouseleave', () => {

        cube.style.animation = 'spin 1500s infinite linear';
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');

    });
});
