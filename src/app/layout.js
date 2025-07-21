import StyledComponentsRegistry from "../lib/registry";
import "../styles/globals.css";

export const metadata = {
  title: "CEOs Landing Page",
  description: "Landing Page para CEOs - FilmeLab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="poppins-regular">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
