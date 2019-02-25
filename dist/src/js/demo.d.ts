import '../styles/demo.styl';
import '../partials/donate/donate';
declare global {
    interface Window {
        ga: (a: string, b: string, c: string, d: string, e: string) => void;
    }
}
