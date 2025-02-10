"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("ERROR :" + error);
  return (
    <html>
      <body className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </body>
    </html>
  );
}
