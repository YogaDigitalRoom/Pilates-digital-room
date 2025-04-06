import '../styles/globals.css';

export const metadata = {
  title: 'Pilates Digital Room',
  description: 'Tu espacio digital de pilates y yoga',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
