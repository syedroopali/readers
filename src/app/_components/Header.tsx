export default function Header({ children }) {
  return (
    <header className="shadow-md p-3 flex items-center justify-between relative h-14 sm:h-auto">
      {children}
    </header>
  );
}
