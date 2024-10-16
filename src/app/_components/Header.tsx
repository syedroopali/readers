export default function Header({ children }: any) {
  return (
    <header className="shadow-md p-3 flex items-center justify-between relative h-14 sm:h-auto sm:p-4">
      {children}
    </header>
  );
}
