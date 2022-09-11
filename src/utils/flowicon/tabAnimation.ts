import frame_1 from './frame_1.png';
import frame_2 from './frame_2.png';

export const tabAnimatedIcon = () => {
    let left = true;
    const icon = document.getElementsByTagName('link')[0];
    icon.type = 'image/png'
    setInterval(
        () => {
            if (left) {
                icon.href = frame_1;
                left = false;
            } else {
                icon.href = frame_2;
                left = true;
            }
        }, 600)
}