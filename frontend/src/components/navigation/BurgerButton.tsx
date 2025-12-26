import './BurgerButton.css';

type Props = {
  isOpen: boolean;
  toggle: () => void;
}

export function BurgerButton({ isOpen, toggle } : Props) {
  return (
    <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
