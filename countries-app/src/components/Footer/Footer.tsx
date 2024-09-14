export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © {currentYear} Countries App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
