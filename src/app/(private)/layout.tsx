export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <header>Privado</header>
      <body>{children}</body>
    </html>
  )
}
