export default function LegalNoticePage() {
  return (
    // Wrapper with Tailwind typography classes
    <main className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
      <div>
        <h1>Legal Notice</h1>

        <h2>Responsible Person</h2>
        <p>Konstantin Schiwarov</p>

        <h3>Postal Address</h3>
        <p>
          {/* Environment variables for postal address */}
          {process.env.NEXT_PUBLIC_STREET}
          <br />
          {process.env.NEXT_PUBLIC_CITY}
        </p>

        <h3>Contact</h3>
        <p>Email: {process.env.NEXT_PUBLIC_EMAIL}</p>

        <h2>Website Information</h2>

        <h3>Copyright Notice</h3>
        <p>
          All images, photographs, and graphics used on this website are
          protected by copyright and were created by the website operator.
        </p>

        <h3>Responsible for editorial content</h3>
        <p>Konstantin Schiwarov</p>

        <p>
          <em>
            This Legal Notice was created with the help of the{" "}
            <a
              href="https://www.activemind.de/generatoren/impressum/"
              target="_blank"
              rel="noopener"
            >
              Legal Notice Generator from activeMind AG
            </a>{" "}
            (Version 2024-07-21).
          </em>
        </p>
      </div>
    </main>
  );
}
