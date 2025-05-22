import '../globals.css';
import Header from '../components/header/page'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Header></Header>
      <body>{children}</body>
    </html>
  )
}
