export const metadata = {
  title: "OptiOdyssey",
  description: "AI-powered travel optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
