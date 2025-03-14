import confetti from 'canvas-confetti';

const celebration = () => {
    const end: number = Date.now() + (5 * 1000);

    // go Buckeyes!
    const colors: string[] = ['#bb0000', '#ffffff'];

    (function frame(): void {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
            zIndex: 0
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
            zIndex: 0
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

export default celebration;