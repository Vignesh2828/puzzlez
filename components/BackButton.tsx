'use client';

export default function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
        >
            Go Back
        </button>
    );
}